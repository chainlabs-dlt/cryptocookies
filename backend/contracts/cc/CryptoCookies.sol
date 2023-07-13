/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "./core/CCCore.sol";

pragma solidity ^0.8.18;

/// @title CryptoCookies
/// @author Chainlabs Switzerland SA
/// @notice TODO: WIP
contract CryptoCookies {
	// Upgradable? isDAO (heritance)
	// CCCore public immutable CORE;

	// Reference to game DAO or is DAO directly (upgradable?)
	// Reference to comptition or directly (upgradable?)

	// Automatic setup, creates all pools for easy bootstrap
	constructor(address _fdgDistr, address _ckiDistr) {
		//
        // CORE = new CCCore(_fdgDistr, _ckiDistr);
	}
}
