/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./ERC20ControlDistr.sol";
import "../../interfaces/functional/ERC20Claimable.sol";

/// @title A ERC20 Controlled Bridge
/// @author Chainlabs Switzerland SA
/// @notice This contract redirects the revenue distributed by a source to a set of
/// controlled addresses. Claiming the source is done through a callback interface.
contract ERC20ControlBridge is ERC20ControlDistr {
	ERC20Claimable public immutable SOURCE;

	/// @notice Constructs a controlled ERC20 bridge contract.
	/// @param _token The token to redirect.
	/// @param _source The source contract from which to receive revenue.
	/// @param _controller The default controller/admin that may change stake.
	constructor(
		address _token,
		address _source,
		address _controller
	) ERC20ControlDistr(_token, _controller) {
		SOURCE = ERC20Claimable(_source);
	}

	/// @notice Claims a msg.sender's pending balance.
	/// msg.sender will be credited with the newly acquired ERC20 tokens.
	/// @dev This function calls the _claimHook() hook before executing a claim.
	/// Has been overwritten for optimization purposes (single transfer).
	/// @return amountClaimed The amount that has been claimed.
	function claim() external override returns (uint256 amountClaimed) {
		_claimHook();

		amountClaimed = RevDistr.claim(usersState[msg.sender], globalState.index);
		require(TOKEN.transferFrom(address(SOURCE), msg.sender, amountClaimed));
	}

	/// @dev Claims from source and redistribute to children.
	/// Called at every user claim.
	function _claimHook() internal override {
		_addRevenue(SOURCE.claim());
	}
}
