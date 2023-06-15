/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./BaseERC20Distr.sol";
import "../libraries/ABDKMath64x64.sol";

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
		uint88 lastDistr;
		// For optimization purposes
		uint40 lastTrigger;
	}

	address public immutable GAUGE;
	int128 public immutable EM_GAMMA;

	InvExpDistr public invExpDistr;

	/// @notice Constructs a Wtf's Cookie (CKI) distributor.
	/// @param _cki Wtf's Cookie (CKI) ERC20 address.
	/// @param _gauge The gauge admin of the system.
	/// @param _emGamma The half-life derived parameter
	constructor(address _cki, address _gauge, uint256 _emGamma) BaseERC20Distr(_cki) {
		GAUGE = _gauge;
		EM_GAMMA = ABDKMath64x64.fromUInt(_emGamma);
	}

	/// @notice Injection of Cookie (CKI) over an inverse exponential schedule.
	/// @dev Requires an ERC20 approval before being called.
	/// Automatically triggers an inverse exponential distribution.
	/// Note: Due to fixed point precision limitations, only multiples of 18
	/// can be injected.
	/// @param _amount The amount to inject, divided by 10^18.
	function injectInvExp(uint256 _amount) external {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount * 10 ** 18));

		// Intermediate computations for efficiency
		int128 elapsed = ABDKMath64x64.fromUInt(block.timestamp);
		int128 pwr = elapsed.div(EM_GAMMA);
		int128 exp = pwr.neg().exp();

		// Indirect _triggerInvExpDistr() call
		uint256 rev = ABDKMath64x64.toUInt(invExpDistr.c.sub(invExpDistr.c.mul(exp)));
		RevDistr.addRevenue(globalState, (rev - uint256(invExpDistr.lastDistr)) * 10 ** 18);
		invExpDistr.lastTrigger = uint40(block.timestamp);

		// Update c factor
		int128 evol = pwr.exp().mul(ABDKMath64x64.fromUInt(_amount));
		invExpDistr.c = invExpDistr.c.add(evol);

		// Update lastDist to take into account T0 offset
		rev = ABDKMath64x64.toUInt(invExpDistr.c.sub(invExpDistr.c.mul(exp)));
		invExpDistr.lastDistr = uint88(rev);
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
		// For optimization purposes
		if (invExpDistr.lastTrigger == block.timestamp) return;

		int128 elapsed = ABDKMath64x64.fromUInt(block.timestamp);

		int128 exp = elapsed.div(EM_GAMMA).neg().exp();
		uint256 rev = ABDKMath64x64.toUInt(invExpDistr.c.sub(invExpDistr.c.mul(exp)));

		RevDistr.addRevenue(globalState, (rev - uint256(invExpDistr.lastDistr)) * 10 ** 18);
		invExpDistr.lastDistr = uint88(rev);
		invExpDistr.lastTrigger = uint40(block.timestamp);
	}

	/// @dev Automatically triggers an inverse exponential distribution.
	/// Called at every claim.
	function _claimHook() internal override {
		_triggerInvExpDistr();
	}
}
