/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title A Mocked ERC20
/// @author Chainlabs Switzerland SA
contract MockERC20 is ERC20 {
	/// @notice Constructs a mock token contract.
	constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {}

	/// @notice Mints to a given address for debug purposes.
	/// @param _user The user to be credited.
	/// @param _amount The amount to mint.
	function mint(address _user, uint256 _amount) external {
		_mint(_user, _amount);
	}
}
