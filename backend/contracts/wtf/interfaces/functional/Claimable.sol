/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

/// @title A Functional Claimable Callback
/// @author Chainlabs Switzerland SA
/// @notice Since Solidity does not support higher-order functions, this callback
/// can be used to easily redirect control flow without breaking contract abstraction.
interface Claimable {
    function claim() external returns (uint256);   
}