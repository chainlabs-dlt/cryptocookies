/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "./distributors/FdgDistr.sol";
import "./distributors/CkiDistr.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.18;

/// @title A Wtf Application
/// @author Chainlabs Switzerland SA
/// @notice This abstract contract serves as basis for all applications in the Wtf ecosystem.
/// Integrates both Fudge (FDG) and Cookie (CKI) distributors for standardized revenue channeling.
abstract contract WtfApp {
	// Wtf distributors
	FdgDistr public immutable FDG_DISTR;
	CkiDistr public immutable CKI_DISTR;

	// Wtf tokens
	IERC20 public immutable FDG;
	IERC20 public immutable CKI;

	/// @notice Constructs a Wtf's application.
	/// @param _fdgDistr Wtf's Fudge (FDG) distribution contract.
	/// @param _ckiDistr Wtf's Cookie (CKI) distribution contract.
	constructor(address _fdgDistr, address _ckiDistr) {
		FDG_DISTR = FdgDistr(_fdgDistr);
		CKI_DISTR = CkiDistr(_ckiDistr);

		FDG = FDG_DISTR.TOKEN();
		CKI = CKI_DISTR.TOKEN();
	}
}
