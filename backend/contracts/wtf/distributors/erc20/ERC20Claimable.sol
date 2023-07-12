/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

pragma solidity ^0.8.18;

/// @title A Functional ERC20Claimable Interface
/// @author Chainlabs Switzerland SA
interface ERC20Claimable {
    function claim() external returns (uint256);  
    function token() external returns (address);   
}