/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./BaseERC20Distr.sol";
import "../libraries/ABDKMath64x64.sol";
import "hardhat/console.sol";

/// @title Wtf's Cookie (CKI) Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract distributes Cookie (CKI) to applications within the Wtf ecosystem.
/// Concretely, this distributor includes CKI's reverse exponential distribution process.
contract CkiDistr is BaseERC20Distr {
	using ABDKMath64x64 for int128;

	struct InvExpDistr {
		// Constant factor in the integral calculation:
		// F(t) = c*(1 - e^(-t/EM_GAMMA))
		// This factor is updated when a new reverse exponential injection occurs.
		int128 c;
		// The previous integral calculation, already distributed:
		// F(lastUpdate) = lastDistr
		uint128 lastDistr;
		int128 elapsed;
	}

	address public immutable GAUGE;
	int128 public immutable EM_GAMMA;
	int128 public immutable T0;

	InvExpDistr public invExpDistr;

	/// @notice Constructs a Wtf's Cookie (CKI) distributor.
	/// @param _cki Wtf's Cookie (CKI) ERC20 address.
	/// @param _gauge The gauge admin of the system.
	/// @param _emGamma The half-life derived parameter
	constructor(address _cki, address _gauge, uint256 _emGamma) BaseERC20Distr(_cki) {
		GAUGE = _gauge;
		EM_GAMMA = ABDKMath64x64.fromUInt(_emGamma);
		T0 = ABDKMath64x64.fromUInt(block.timestamp);
	}

	/// @notice Injection of Cookie (CKI) over an inverse exponential schedule.
	/// @dev Requires an ERC20 approval before being called.
	/// Automatically triggers an inverse exponential distribution.
	/// Note: Due to fixed point precision limitations, only multiples of 18
	/// can be injected.
	/// @param _amount The amount to inject, divided by 10^18.
	function injectInvExp(uint256 _amount) external {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount * 10 ** 18));

		_triggerInvExpDistr();
		int128 evol = invExpDistr.elapsed.div(EM_GAMMA).exp().mul(ABDKMath64x64.fromUInt(_amount));
		invExpDistr.c = invExpDistr.c.add(evol);
	}

	/// @notice Changes the stake of a given app in the distributor.
	/// Can only be called by Wtf's gauge contract.
	/// @param _app The target app.
	/// @param _change The change in stake.
	function appChangeStake(address _app, int256 _change) external {
		require(msg.sender == GAUGE);
		_userChangeStake(_app, _change);
	}

	function _triggerInvExpDistr() internal {
		int128 newElapsed = ABDKMath64x64.fromUInt(block.timestamp).sub(T0);
		// No precision errors possible as no fractional part
		if (invExpDistr.elapsed == newElapsed) return;

		int128 exp = newElapsed.div(EM_GAMMA).neg().exp();
		uint256 rev = ABDKMath64x64.toUInt(invExpDistr.c.sub(invExpDistr.c.mul(exp)));

		RevDistr.addRevenue(globalState, (rev - uint256(invExpDistr.lastDistr)) * 10 ** 18);
		invExpDistr.lastDistr = uint128(rev);
		invExpDistr.elapsed = newElapsed;
	}

	/// @dev Automatically triggers an inverse exponential distribution.
	/// Called at every claim.
	function _claimHook() internal override {
		_triggerInvExpDistr();
	}
}
