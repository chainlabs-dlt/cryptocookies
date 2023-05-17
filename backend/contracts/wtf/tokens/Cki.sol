/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title Wtf's Cookie (CKI) token contract
/// @author Chainlabs Switzerland SA
contract Cki is ERC20 {
	/// @notice Constructs a Wtf's Cookie (CKI) token contract.
	constructor() ERC20("Cookie", "CKI") {}

	/// @notice Mints Cookie (CKI) for development purposes.
	/// @param _amount The amount to mint.
	function devMint(uint _amount) external {
		_mint(msg.sender, _amount);
	}
}
