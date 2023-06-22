/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "../wtf/WtfApp.sol";
import "./CCStaking.sol";

pragma solidity ^0.8.18;

/// @title CryptoCookies' Core Contract
/// @author Chainlabs Switzerland SA
/// @notice This contract serves as the main point of access of the CryptoCookies environment.
contract CCCore is WtfApp {
	uint256 constant HUGE_APPROVAL = 1 << 255;

	CCStaking public immutable FDG_STAKING;
	CCStaking public immutable CKI_STAKING;

	// For optimization purposes
	uint256 fdgLastUpdate;
	uint256 ckiLastUpdate;

	/// @notice Constructs the entire CryptoCookies environment.
	/// @param _fdgDistr Wtf's Fudge (FDG) distribution contract.
	/// @param _ckiDistr Wtf's Cookie (CKI) distribution contract.
	constructor(address _fdgDistr, address _ckiDistr) WtfApp(_fdgDistr, _ckiDistr) {
		FDG_STAKING = new CCStaking(address(this), address(FDG), address(CKI));
		CKI_STAKING = new CCStaking(address(this), address(CKI), address(FDG));

		// Infinite approval for children contracts.
		FDG.approve(address(CKI_STAKING), HUGE_APPROVAL);
		CKI.approve(address(FDG_STAKING), HUGE_APPROVAL);

		fdgLastUpdate = block.timestamp;
		ckiLastUpdate = block.timestamp;
	}

	/// @notice Harvests all of the app's claimable revenue for a given token.
	/// Distributes the claimed value to the children contracts (staking, locking).
	/// @param _token The token to harvest (FDG or CKI).
	function harvest(address _token) external {
		if (_token == address(FDG) && fdgLastUpdate != block.timestamp) {
			_fdgHarvest();
			fdgLastUpdate = block.timestamp;
		} else if (_token == address(CKI) && ckiLastUpdate != block.timestamp) {
			_ckiHarvest();
			ckiLastUpdate = block.timestamp;
		}
	}

	/// @dev Harvest all of the app's claimable FDG revenue.
	/// Distributes the claimed value to the children contracts.
	function _fdgHarvest() internal {
		uint256 claimed = FDG_DISTR.claim(address(this));

		// For now, redirect all to staking
		CKI_STAKING.inject(claimed);
	}

	/// @dev Harvest all of the app's claimable CKI revenue.
	/// Distributes the claimed value to the children contracts.
	function _ckiHarvest() internal {
		uint256 claimed = CKI_DISTR.claim(address(this));

		// For now, redirect all to staking
		FDG_STAKING.inject(claimed);
	}
}
