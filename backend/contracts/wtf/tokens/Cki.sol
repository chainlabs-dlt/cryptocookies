/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/// @title Wtf's Cookie (CKI) token contract
/// @author Chainlabs Switzerland SA
contract Cki is ERC20, ERC20Permit {
	/// @notice Constructs a Wtf's Cookie (CKI) token contract.
	constructor() ERC20("Cookie", "CKI") ERC20Permit("Cookie") {}

	/// @notice Mints Cookie (CKI) for development purposes.
	/// @param _amount The amount to mint.
	function devMint(uint _amount) external {
		_mint(msg.sender, _amount);
	}
}
