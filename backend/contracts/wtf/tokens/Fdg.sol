/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title Wtf's Fudge (FDG) token contract
/// @author Chainlabs Switzerland SA
contract Fdg is ERC20 {
	/// @notice Constructs a Wtf's Fudge (FDG) token contract.
	constructor() ERC20("Fudge", "FDG") {}

	/// @notice Mints Fudge (FDG) for development purposes.
	/// @param _amount The amount to mint.
	function devMint(uint _amount) external {
		_mint(msg.sender, _amount);
	}
}