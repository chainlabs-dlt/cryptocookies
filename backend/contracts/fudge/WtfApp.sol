// SPDX-License-Identifier: unlicensed
// Copyright © 2023 Chainlabs Switzerland SA
// All Rights Reserved

import "../libraries/ERC20Distr.sol";

pragma solidity ^0.8.18;

abstract contract WtfApp {

    ERC20Distr public immutable FDG_DISTR;
    ERC20Distr public immutable CKI_DISTR;



    constructor(address _fdgDistr, address _ckiDistr) {
        FDG_DISTR = ERC20Distr(_fdgDistr);
        CKI_DISTR = ERC20Distr(_ckiDistr);
    }

    function freshFdg() internal returns (uint256) {

    }

    function freshCki() internal returns (uint256) {

    }

    /**
	 * @notice Eagerly injects an amount of ERC20 tokens to one user.
	 * Requires ERC20 approval before being called.
	 *
	 * @paran _user The relevant user
	 * @param _amount The amount to inject
	 */
    //function 
}