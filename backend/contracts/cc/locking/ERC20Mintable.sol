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
	/// Admin has the sole right to assign new minters through the admin role.
	/// @param _name The name of token.
	/// @param _symbol The symbol of the token.
	/// @param _admin The initial minter.
	constructor(
		string memory _name,
		string memory _symbol,
		address _admin
	) ERC20(_name, _symbol) ERC20Permit(_name) {
		_setupRole(DEFAULT_ADMIN_ROLE, _admin);
	}

	/// @notice Mints tokens for a given target.
	/// May only be called by the admins of the contract.
	/// @param _target The beneficiary address.
	/// @param _amount The amount to mint.
	function mint(address _target, uint _amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
		_mint(_target, _amount);
	}
}

/// @title A ERC20Mintable Deployer
/// @author Chainlabs Switzerland SA
/// @notice This proxy contract deploys ERC20Mintable contracts to reduce the
/// overall contract sizes introduced by Spurious Dragon.
contract ERC20MintableDeployer {
	/// @notice Constructs an ERC20Mintable deployer.
	constructor() {}

	/// @notice Deploys an ERC20Mintable contract with the provided arguments.
	/// The admin will be the initial msg.sender.
	/// @param _name The name of token.
	/// @param _symbol The symbol of the token.
	/// @return The ERC20Mintable contract.
	function deploy(string memory _name, string memory _symbol) external returns (ERC20Mintable) {
		return new ERC20Mintable(_name, _symbol, msg.sender);
	}
}
