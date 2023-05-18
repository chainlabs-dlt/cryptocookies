/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved
/*
import "../wtf/WtfApp.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.18;

contract CCCore is WtfApp {
	IERC20 public immutable CKI;
	IERC20 public immutable FDG;

	CCDistr public immutable CKI_STAKE;

	constructor(
		address _cki,
		address _fdg,
		address _fdgDistr,
		address _ckiDistr
	) WtfApp(_fdgDistr, _ckiDistr) {
		CKI = IERC20(_cki);
		FDG = IERC20(_fdg);
		CKI_STAKE = new CCDistr(FDG_DISTR, _fdg, address(this));
	}

	function stakeCki(uint256 _amount) external {
		require(CKI.transferFrom(msg.sender, address(this), _amount));
		CKI_STAKE.userChangeStake(msg.sender, int256(_amount));
	}

	function unstakeCki(uint256 _amount) external {
		CKI_STAKE.userChangeStake(msg.sender, int256(_amount) * -1);
		require(CKI.transfer(msg.sender, _amount));
	}
}
*/