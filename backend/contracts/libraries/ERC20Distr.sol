// SPDX-License-Identifier: unlicensed
// Copyright © 2023 Chainlabs Switzerland SA
// All Rights Reserved

pragma solidity ^0.8.18;

import "./RevDistr.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ERC20Distr is AccessControl {
	IERC20 public immutable TOKEN;

	// Roles setup for access control
	bytes32 public constant CHANGE_STAKERS = keccak256("CHANGE_STAKERS");
	bytes32 public constant SCHEDULERS = keccak256("SCHEDULERS");

	RevDistr.LazyGlobalState public globalState;
	mapping(address => RevDistr.LazyUserState) public usersState;

	// Distributors that follow a lazy schedule
	Distr.Schedule[] public distrs;
	uint40 lastDistrUpdate;

	constructor(address _token, address _admin) {
		TOKEN = IERC20(_token);
		_setupRole(DEFAULT_ADMIN_ROLE, _admin);
		lastDistrUpdate = block.timestamp;

		// Initialize the global state
		globalState = RevDistr.LazyGlobalState(0, uint128(RevDistr.START_INCREMENT_PER_REVENUE), 0);
	}

	/**
	 * @notice Lazily injects an amount of ERC20 tokens to all users,
	 * distributed accordingly to their stakes.
	 * Requires ERC20 approval before being called.
	 *
	 * @param _amount The amount to inject
	 */
	function distribute(uint256 _amount) external {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount));

		RevDistr.addRevenue(globalState, _amount);
	}

	/**
	 * @notice Changes the stakes of a given user.
	 * Reserved to the admin of this distributor.
	 *
	 * @param _user The relevant user
	 * @param _change The change in stake
	 */
	function userChangeStake(address _user, int256 _change) external onlyRole(CHANGE_STAKERS) {
		RevDistr.userChangePool(globalState, usersState[_user], _change);
	}

	/**
	 * @notice Claims the caller's pending balance.
	 * The caller will be credited with the newly
	 * acquired ERC20 tokens.
	 *
	 * @return amountClaimed The amount that has been claimed
	 */
	function claim() external returns (uint256 amountClaimed) {
		amountClaimed = RevDistr.claim(usersState[msg.sender], globalState.index);

		require(TOKEN.transfer(msg.sender, amountClaimed));
	}

	function registerDistrSchedule(uint256 _total, Distr _distr) external onlyRole(SCHEDULERS) {
		require(TOKEN.transferFrom(msg.sender, address(this), _amount));

		distrs.push(Distr.Schedule(0, 0, _distr));
	}

	// Warning: loss of funds!
	function unregisterDistrSchedule(uint256 _index) external onlyRole(SCHEDULERS) {
		require(_index < distrs.length);

		for (uint256 i = _index; i < distrs.length - 1; i++) {
			distrs[i] = distrs[i + 1];
		}

		distrs.pop();
	}

	function distributeSchedules() internal {
		uint40 elapsed = block.timestamp - lastDistrUpdate;

		for (uint256 i = 0; i < distrs.length; i++) {
			Distr.Schedule storage schedule = distrs[i];
			uint256 newAccum = schedule.distr.schedule(schedule.timestamp + elapsed);
			RevDistr.addRevenue(globalState, newAccum - schedule.accum);
			schedule.accum = newAccum;
			schedule.timestamp += elapsed; 
		}

		lastDistrUpdate = block.timestamp;
	}
}

interface Distr {
	struct Schedule {
		uint128 accum;
		uint40 timestamp;
		Distr distr;
	}

	function schedule(uint256 t) external pure returns (uint256);
}
