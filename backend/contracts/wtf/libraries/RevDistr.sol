/// SPDX-License-Identifier: unlicensed
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./Math2.sol";

library RevDistr {
	uint256 public constant START_INCREMENT_PER_REVENUE = (2 ** 128) - 1;

	struct LazyUserState {
		uint128 ownStake; // The owned share of the total stake
		uint128 ownAccumulatedTotal; // The owned accumulated rewards
		uint128 alreadyClaimedTotal; // The already claimed rewards
		LazyGlobalState lastGlobalState; // The last global state synced
	}

	struct LazyGlobalState {
		uint128 totalStake; // The total stake
		uint128 incrementPerRevenue; // The increment per revenue
		uint256 index; // The index at last (global) update
	}

	/// @notice Computes the newest global index.
	///	@param _globalState The lazy global state.
	/// @param _revenue The new revenue coming in.
	/// @return index The new updated index.
	function updatedGlobalIndex(
		LazyGlobalState memory _globalState,
		uint256 _revenue
	) internal pure returns (uint256) {
		return _globalState.index + uint256(_globalState.incrementPerRevenue) * _revenue;
	}

	/// @notice Computes the freshly acquired revenue.
	/// @param _userState The lazy user state.
	/// @param _updatedGlobalIndex The newest global index.
	/// @return freshOwn The new updated added revenue.
	function updatedfreshOwn(
		LazyUserState memory _userState,
		uint256 _updatedGlobalIndex
	) internal pure returns (uint256) {
		return
			_userState.ownStake == 0
				? 0
				: Math2.mulDiv(
					_updatedGlobalIndex - _userState.lastGlobalState.index,
					_userState.ownStake,
					uint256(_userState.lastGlobalState.incrementPerRevenue) *
						uint256(_userState.lastGlobalState.totalStake)
				);
	}

	/// @notice Updates the lazy user state with the new fresh revenue.
	/// @param _userState The lazy user state.
	/// @param _freshOwn The newly acquired revenue.
	function updateLazyUser(LazyUserState storage _userState, uint256 _freshOwn) internal {
		_userState.ownAccumulatedTotal = uint128(
			uint256(_userState.ownAccumulatedTotal) + _freshOwn
		);
	}

	/// @notice Synchronizes the lazy user state with the newest
	/// lazy global state and own stake.
	/// @param _userState The lazy user state.
	/// @param _globalState The lazy global state to sync.
	/// @param _ownStake The newest user own stake.
	function syncUser(
		LazyUserState storage _userState,
		LazyGlobalState memory _globalState,
		uint256 _ownStake
	) internal {
		_userState.lastGlobalState = _globalState;
		_userState.ownStake = uint128(_ownStake);
	}

	/// @notice Adapts the lazy global state with a change in total stake.
	/// @param _globalState The lazy global state.
	/// @param _change The total stake change.
	function adaptLazyGlobal(LazyGlobalState storage _globalState, int256 _change) internal {
		uint256 oldTotalStake = uint256(_globalState.totalStake);
		uint256 newTotalStake = uint256(int256(oldTotalStake) + _change);

		if (newTotalStake == 0) {
			_globalState.incrementPerRevenue = uint128(START_INCREMENT_PER_REVENUE);
		} else if (oldTotalStake != 0) {
			_globalState.incrementPerRevenue = uint128(
				(uint256(_globalState.incrementPerRevenue) * oldTotalStake) / newTotalStake
			);
		}
		_globalState.totalStake = uint128(newTotalStake);
	}

	/// @notice Performs a given user ownStake change.
	/// 1. Updates the user with the new revenue.
	/// 2. Adapts the global state with the new stake change.
	/// 3. Sync user with global state and adapt stake.
	/// @param _globalState The lazy global state.
	/// @param _userState The lazy user state.
	/// @param _change The change (positive or negative).
	function userChangePool(
		LazyGlobalState storage _globalState,
		LazyUserState storage _userState,
		int256 _change
	) internal {
		// 0. Sanity check: Cannot remove more than current stake
		if (_change < 0) require(uint256(_change * -1) <= uint256(_userState.ownStake));

		// 1. Updates the user with the new revenue
		updateLazyUser(_userState, updatedfreshOwn(_userState, _globalState.index));

		//2. Adapts the global state with the new stake change
		adaptLazyGlobal(_globalState, _change);

		// 3. Sync user with global state and adapt stake
		syncUser(_userState, _globalState, uint256(int256(uint256(_userState.ownStake)) + _change));
	}

	/// @notice Returns the current claimable reward amount.
	/// Strictly monotonic function, until a claim resets the value to 0.
	/// @param _userState The lazy user state.
	/// @param _index The latest global index.
	/// @return claimable The claimable amount.
	function claimable(
		LazyUserState memory _userState,
		uint256 _index
	) internal pure returns (uint256) {
		uint256 accumulated = uint256(_userState.ownAccumulatedTotal) +
			updatedfreshOwn(_userState, _index);

		return accumulated - uint256(_userState.alreadyClaimedTotal);
	}

	/// @notice Effectively claims all pending rewards.
	/// @param _userState The lazy user state.
	/// @param _index The latest global index.
	/// @return amountClaimed The amount that has been claimed.
	function claim(
		LazyUserState storage _userState,
		uint256 _index
	) internal returns (uint256 amountClaimed) {
		amountClaimed = claimable(_userState, _index);

		// Updating claimable balance first unsures the absence of infinite loop
		_userState.alreadyClaimedTotal = uint128(
			uint256(_userState.alreadyClaimedTotal) + amountClaimed
		);
	}

	/// @notice Adds revenue to the pool.
	/// @param _globalState The lazy global state.
	/// @param _amount The amount of revenue added.
	function addRevenue(LazyGlobalState storage _globalState, uint256 _amount) internal {
		_globalState.index = updatedGlobalIndex(_globalState, _amount);
	}
}
