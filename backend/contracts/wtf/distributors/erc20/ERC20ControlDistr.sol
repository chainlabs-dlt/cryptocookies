/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./BaseERC20Distr.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title A ERC20 Controlled Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract adds control over the "userChangeStake" of the basic ERC20
/// distributor (BaseERC20Distr).
contract ERC20ControlDistr is BaseERC20Distr, AccessControl {
	/// @notice Constructs a controlled ERC20 distributor contract.
	/// @param _token The relevant ERC20 token.
	/// @param _controller The default controller/admin that may change stake.
	constructor(address _token, address _controller) BaseERC20Distr(_token) {
		_setupRole(DEFAULT_ADMIN_ROLE, _controller);
	}

	/// @dev Changes the stake of a given user in the distributor.
	/// May only be called by a controller/admin.
	/// @param _user The target user.
	/// @param _change The change in stake.
	function userChangeStake(address _user, int256 _change) external onlyRole(DEFAULT_ADMIN_ROLE) {
		RevDistr.userChangePool(globalState, usersState[_user], _change);
	}
}
