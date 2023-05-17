/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./BaseERC20Distr.sol";

/// @title Wtf's Fudge (FDG) Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract distributes Fudge (FDG) to applications within the Wtf ecosystem.
/// Concretely, this distributor linearly "flattens" all Fudge (FDG) injections over FLATTEN_PERIOD.
contract FdgDistr is BaseERC20Distr {
	struct FlatDistr {
		uint128 distrBuffer;
		uint40 lastDistr;
	}

	uint256 public immutable FLATTEN_PERIOD;
	FlatDistr public flatDistr;

	/// @notice Constructs a Wtf's Fudge (FDG) distributor.
	/// @param _fdg Wtf's Fudge (FDG) ERC20 address.
	/// @param _flattenPeriod The period over which to flatten the FDG injecStions.
	constructor(address _fdg, uint256 _flattenPeriod) BaseERC20Distr(_fdg) {
		FLATTEN_PERIOD = _flattenPeriod;
		flatDistr = FlatDistr(0, uint40(block.timestamp));
	}

	/// @notice Linearly "flattens" all Fudge (FDG) injections over FLATTEN_PERIOD.
	/// @dev Requires an ERC20 approval before being called.
	/// Automatically triggers a flatten distribution.
	/// @param _amount The amount to inject.
	function injectFlatten(uint256 _amount) external {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount));

		_triggerFlatDistr();
		flatDistr.distrBuffer = uint128(uint256(flatDistr.distrBuffer) + _amount);
	}

	/// @dev Effectively "flattens" all Fudge (FDG) injections over FLATTEN_PERIOD.
	function _triggerFlatDistr() internal {
		uint256 lastDistr = uint256(flatDistr.lastDistr);
		uint256 distrBuffer = uint256(flatDistr.distrBuffer);
		uint256 elapsed = block.timestamp - lastDistr;

		if (elapsed == 0) return;

		if (elapsed >= FLATTEN_PERIOD) {
			RevDistr.addRevenue(globalState, distrBuffer);
			flatDistr.distrBuffer = 0;
		} else {
			uint256 rev = (elapsed * distrBuffer) / lastDistr;
			RevDistr.addRevenue(globalState, distrBuffer);
			flatDistr.distrBuffer = uint128(distrBuffer - rev);
		}

		flatDistr.lastDistr = uint40(block.timestamp - elapsed);
	}

	/// @dev Automatically triggers a flatten distribution.
	/// Called at every claim.
	function _claimHook() internal override {
		_triggerFlatDistr();
	}
}
