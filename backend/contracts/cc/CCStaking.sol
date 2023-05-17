/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved
/*
import "../wtf/WtfApp.sol";
import "../wtf/distributors/BaseERC20Distr.sol";

pragma solidity ^0.8.18;

contract CCStaking is BaseERC20Distr {
	BaseERC20Distr public immutable PARENT;
    
    constructor(
		ERC20Distr _parent,
		address _token,
		address _stakeChanger
	) ERC20Distr(_token, _stakeChanger) {
        PARENT = _parent;
    }

	function _claimHook() internal override {
        // Claim and redistribute 
        RevDistr.addRevenue(globalState, PARENT.claim());
    
        // Add potential other revenue streams here!
    }
}
*/