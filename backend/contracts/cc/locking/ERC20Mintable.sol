/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title An ERC20 Mintable Contract
/// @author Chainlabs Switzerland SA
contract ERC20Mintable is ERC20, AccessControl, ERC20Permit {
	/// @notice Constructs a mintable ERC20 token contract.
	/// Caller has the sole right to assign new minters through the admin role.
	constructor(
		string memory _name,
		string memory _symbol
	) ERC20(_name, _symbol) ERC20Permit(_name) {
		_setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
	}

	/// @notice Mints tokens for a given target.
	/// May only be called by the admins of the contract.
	/// @param _target The beneficiary address.
	/// @param _amount The amount to mint.
	function mint(address _target, uint _amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
		_mint(_target, _amount);
	}
}
