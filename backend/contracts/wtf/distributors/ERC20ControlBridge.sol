/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./ERC20ControlDistr.sol";

/// @title A ERC20 Controlled Bridge
/// @author Chainlabs Switzerland SA
/// @notice This contract redirects the revenue distributed by a BaseERC20Distr to
/// a set of controlled addresses.
contract ERC20ControlBridge is ERC20ControlDistr {
	BaseERC20Distr public immutable SOURCE; 
    
    /// @notice Constructs a controlled ERC20 bridge contract.
	/// @param _source The source BaseERC20Distr contract.
	/// @param _controller The default controller/admin that may change stake.
	constructor(
		address _source,
		address _controller
	) ERC20ControlDistr(address(BaseERC20Distr(_source).TOKEN()), _controller) {
        SOURCE = BaseERC20Distr(_source);
	}

	/// @dev Claims from source and redistribute to children.
	/// Called at every user claim.
	function _claimHook() internal override {
		_addRevenue(SOURCE.claim());
	}
}
