/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "../../wtf/distributors/erc20/BaseERC20Distr.sol";

pragma solidity ^0.8.18;

/// @title CryptoCookies' Generic Staking Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract allows users to (un)stake their TOKEN to generate revenue.
contract CCStaking is BaseERC20Distr {
	ERC20Claimable public immutable SOURCE;
	IERC20 public immutable STAKED_TOKEN;

	/// @notice Constructs a CCStaking contract.
	/// @param _stakedToken The staked token.
	/// @param _source The source contract from which to receive revenue.
	constructor(
		address _stakedToken,
		address _source
	) BaseERC20Distr(ERC20Claimable(_source).token()) {
		STAKED_TOKEN = IERC20(_stakedToken);
		SOURCE = ERC20Claimable(_source);
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

	/// @dev Automatically triggers a bridge claim.
	/// Called at every user claim.
	function _claimHook() internal override {
		_addRevenue(SOURCE.claim());
	}
}
