/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

import "./BaseERC20Distr.sol";

/// @title Wtf's Cookie (CKI) Distributor
/// @author Chainlabs Switzerland SA
/// @notice This contract distributes Cookie (CKI) to applications within the Wtf ecosystem.
/// Concretely, this distributor includes CKI's reverse exponential minting process.
contract CkiDistr is BaseERC20Distr {
	constructor(address _token) BaseERC20Distr(_token) {}
}
