/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "../../libraries/RevDistr.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title A Basic ERC20 Distributor
/// @author Chainlabs Switzerland SA
/// @notice This abstract contract provides boilerplate code for a primitive ERC20 distributor.
/// @dev By default, injections are immediate, but a more fine-grained implementation can
/// be achieved by redefining the _claimHook() function.
abstract contract BaseERC20Distr {
	IERC20 public immutable TOKEN;

	RevDistr.LazyGlobalState public globalState;
	mapping(address => RevDistr.LazyUserState) public usersState;

	/// @notice Constructs a basic ERC20 distributor contract.
	/// @param _token The relevant ERC20 token.
	constructor(address _token) {
		TOKEN = IERC20(_token);

		// Initialize the global distribution state
		globalState = RevDistr.LazyGlobalState(0, uint128(RevDistr.START_INCREMENT_PER_REVENUE), 0);
	}

	/// @notice Lazily injects an amount of ERC20 tokens to all users, distributed accordingly to
	/// their stakes.
	/// @dev Requires an ERC20 approval before being called.
	/// @param _amount The amount to inject.
	function inject(uint256 _amount) external {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount));

		_addRevenue(_amount);
	}

	/// @notice Claims a msg.sender's pending balance.
	/// msg.sender will be credited with the newly acquired ERC20 tokens.
	/// @dev This function calls the _claimHook() hook before executing a claim.
	/// @return amountClaimed The amount that has been claimed.
	function claim() external returns (uint256 amountClaimed) {
		_claimHook();

		amountClaimed = RevDistr.claim(usersState[msg.sender], globalState.index);
		require(TOKEN.transfer(msg.sender, amountClaimed));
	}

	/// @dev Adds revenue to be distributed.
	/// This function performs no security checks so its visibility
	/// should remain internal.
	/// @param _amount The amount to add.
	function _addRevenue(uint256 _amount) internal {
		RevDistr.addRevenue(globalState, _amount);
	}

	/// @dev Changes the stake of a given user in the distributor.
	/// This function performs no security checks so its visibility
	/// should remain internal.
	/// @param _user The target user.
	/// @param _change The change in stake.
	function _userChangeStake(address _user, int256 _change) internal {
		RevDistr.userChangePool(globalState, usersState[_user], _change);
	}

	/// @dev Called at every claim call, this function should be overwritten
	/// if an automatic injection needs to be performed before claiming.
	/// By default does nothing.
	function _claimHook() internal virtual {}
}
