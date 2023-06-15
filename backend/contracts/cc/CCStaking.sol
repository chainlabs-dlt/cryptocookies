/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "./CCCore.sol";
import "../wtf/distributors/BaseERC20Distr.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.18;

/// @title CryptoCookies' Generic Staking Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract allows user to (un)stake their TOKEN to generate revenue.
contract CCStaking is BaseERC20Distr {
	CCCore public immutable CORE;
	IERC20 public immutable STAKED_TOKEN;

	/// @notice Constructs a CCStaking contract.
	/// @param _core CryptoCookies' core contract.
	/// @param _stakedToken The staked token.
	/// @param _revToken The revenue token.
	constructor(address _core, address _stakedToken, address _revToken) BaseERC20Distr(_revToken) {
		CORE = CCCore(_core);
		STAKED_TOKEN = IERC20(_stakedToken);
	}

	/// @notice Adds stake for the caller in the distributor.
	/// Requires a prior ERC20 TOKEN approval.
	/// @param _amount The added stake.
	function stake(uint256 _amount) external {
		require(STAKED_TOKEN.transferFrom(msg.sender, address(this), _amount));
		_userChangeStake(msg.sender, int256(_amount));
	}

	/// @notice Removes stake from the caller in the distributor.
	/// Credits the player's ERC20 TOKEN account.
	/// @param _amount The removed stake.
	function unstake(uint256 _amount) external {
		_userChangeStake(msg.sender, int256(_amount) * -1);
		STAKED_TOKEN.transfer(msg.sender, _amount);
	}

	/// @dev Automatically triggers a CCCore update.
	/// Called at every claim.
	function _claimHook() internal override {
		// Harvest new TOKEN funds from CORE
		CORE.harvest(address(TOKEN));
	}
}
