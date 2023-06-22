/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "./CCCore.sol";
import "./CCStaking.sol";
import "../wtf/distributors/BaseERC20Distr.sol";
import "./locking/ERC20Mintable.sol";

pragma solidity ^0.8.18;

/// @title CryptoCookies' Generic Locking Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract allows user to lock their TOKEN to generate revenue.
/// Players my lock tokens to obtain an equivalent amount of:
/// - Yield tokens (yTKN)
/// - Capital tokens (cTKN)
/// Yield tokens can then be staked to generate revenue; however, this stake
/// will be at risk of being captured through CryptoCookies' competition mechanism.
/// At any time, yield tokens and capital tokens may be combined to unlock the
/// underlying token. At the end of the contract period, capital tokens can always
/// be used to unlock the underlying tokens.
contract CCLocking is CCStaking {
	ERC20 public immutable LOCKED_TOKEN;

	ERC20Mintable public immutable YIELD_TOKEN;
	ERC20Mintable public immutable CAPITAL_TOKEN;

	uint256 public immutable PERIOD_END;

	/// @notice Constructs a CCLocking contract.
	/// @param _core CryptoCookies' core contract.
	/// @param _lockedToken The locked token.
	/// @param _revToken The revenue token.
	/// @param _periodDuration How long the contract obtains revenue from the core.
	constructor(
		address _core,
		address _lockedToken,
		address _revToken,
		uint256 _periodDuration
	)
		CCStaking(
			_core,
			address(
				new ERC20Mintable(
					string.concat("Yield", " ", ERC20(_lockedToken).name()),
					string.concat("y", ERC20(_lockedToken).symbol())
				)
			),
			_revToken
		)
	{
		LOCKED_TOKEN = ERC20(_lockedToken);

		YIELD_TOKEN = ERC20Mintable(address(STAKED_TOKEN));
		CAPITAL_TOKEN = new ERC20Mintable(
			string.concat("Capital", " ", LOCKED_TOKEN.name()),
			string.concat("c", LOCKED_TOKEN.symbol())
		);

		PERIOD_END = block.timestamp + _periodDuration;
	}

	/// @notice Locks a given amount of TOKEN to obtain an equivalent amount of
	/// yield and capital tokens. May only be called before the end of the period.
	/// Requires a prior ERC20 token approval.
	/// @param _amount The amount to lock.
	function lock(uint256 _amount) external {
		require(PERIOD_END < block.timestamp);
		require(LOCKED_TOKEN.transferFrom(msg.sender, address(this), _amount));

		CAPITAL_TOKEN.mint(msg.sender, _amount);
		YIELD_TOKEN.mint(msg.sender, _amount);
	}

	/// @notice Unlocks a given amount of TOKEN by providing the equivalent amount
	/// of cTKN (and yTKN if the period has not yet ended).
	/// Requires a prior ERC20 token approval.
	/// @param _amount The amount to lock.
	function unlock(uint256 _amount) external {
		require(CAPITAL_TOKEN.transferFrom(msg.sender, address(this), _amount));
		if (PERIOD_END < block.timestamp)
			require(YIELD_TOKEN.transferFrom(msg.sender, address(this), _amount));

		LOCKED_TOKEN.transfer(msg.sender, _amount);
	}
}