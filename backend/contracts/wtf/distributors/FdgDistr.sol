/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./BaseERC20Distr.sol";

/// @title Wtf's Fudge (FDG) Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract distributes Fudge (FDG) to applications within the Wtf ecosystem.
/// Concretely, this distributor linearly "flattens" all Fudge (FDG) injections over FLATTEN_PERIOD.
/// The stakes may only be updated by the gauge contract.
contract FdgDistr is BaseERC20Distr {
	struct FlatDistr {
		uint128 distrBuffer;
		uint40 lastDistr;
	}

	address public immutable GAUGE;
	uint256 public immutable FLATTEN_PERIOD;
	FlatDistr public flatDistr;

	/// @notice Constructs a Wtf's Fudge (FDG) distributor.
	/// @param _fdg Wtf's Fudge (FDG) ERC20 address.
	/// @param _gauge The gauge admin of the system.
	/// @param _flattenPeriod The period over which to flatten the FDG injections.
	constructor(address _fdg, address _gauge, uint256 _flattenPeriod) BaseERC20Distr(_fdg) {
		GAUGE = _gauge;
		FLATTEN_PERIOD = _flattenPeriod;
		flatDistr = FlatDistr(0, uint40(block.timestamp));
	}

	/// @notice Injection of Fudge (FDG) over a linear period FLATTEN_PERIOD.
	/// @dev Requires an ERC20 approval before being called.
	/// Automatically triggers a flatten distribution.
	/// @param _amount The amount to inject.
	function injectFlatten(uint256 _amount) external {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount));

		_triggerFlatDistr();
		flatDistr.distrBuffer = uint128(uint256(flatDistr.distrBuffer) + _amount);
		flatDistr.lastDistr = uint40(block.timestamp);
	}

	/// @notice Changes the stake of a given app in the distributor.
	/// Can only be called by Wtf's gauge contract.
	/// @param _app The target app.
	/// @param _change The change in stake.
	function appChangeStake(address _app, int256 _change) external {
		require(msg.sender == GAUGE);
		_userChangeStake(_app, _change);
	}

	/// @dev Effectively "flattens" all Fudge (FDG) injections over FLATTEN_PERIOD.
	/// NOTE: This function recalculates a new linear distribution rate over FLATTEN_PERIOD.
	function _triggerFlatDistr() internal {
		uint256 lastDistr = uint256(flatDistr.lastDistr);
		uint256 distrBuffer = uint256(flatDistr.distrBuffer);
		uint256 elapsed = block.timestamp - lastDistr;

		// For optimization purposes
		if (elapsed == 0 || distrBuffer == 0) return;

		if (elapsed >= FLATTEN_PERIOD) {
			RevDistr.addRevenue(globalState, distrBuffer);
			flatDistr.distrBuffer = 0;
		} else {
			uint256 rev = (elapsed * distrBuffer) / FLATTEN_PERIOD;
			RevDistr.addRevenue(globalState, rev);
			flatDistr.distrBuffer = uint128(distrBuffer - rev);
		}

		flatDistr.lastDistr = uint40(block.timestamp);
	}

	/// @dev Automatically triggers a flatten distribution.
	/// Called at every claim.
	function _claimHook() internal override {
		_triggerFlatDistr();
	}
}
