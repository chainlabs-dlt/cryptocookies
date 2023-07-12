/// SPDX-License-Identifier: UNLICENSED
/// Copyright © 2023 Chainlabs Switzerland SA
/// All Rights Reserved

import "../../wtf/distributors/erc20/ERC20ControlBridge.sol";
import "../staking/CCStaking.sol";
import "../locking/CCLocking.sol";

pragma solidity ^0.8.18;

/// @title CryptoCookies' Pool Handler Contract
/// @author Chainlabs Switzerland SA
/// @notice This contract handles the deployment, activation, and stakes
/// of staking and locking pools in CryptoCookies.
contract CCPoolHandler {
	address public immutable DAO;
	modifier onlyDAO() {
		require(msg.sender == DAO);
		_;
	}

	ERC20ControlBridge public immutable FDG_BRIDGE;
	address public immutable FDG;

	ERC20ControlBridge public immutable CKI_BRIDGE;
	address public immutable CKI;

	LockingDeployer public immutable DEPLOYER;

	enum LockStatus {
		SCHEDULED,
		RUNNING,
		STOPPED
	}
	/// @notice Metadata of a locking pool.
	/// Contains information on the lifecycle of a locking pool.
	struct LockMetadata {
		bool valid;
		LockStatus status;
		uint40 start;
		uint40 end;
		uint128 stake;
	}

	// Multiple locking pools that change over time (CKI and FDG).
	mapping(address => LockMetadata) public lockings;

	// Records all pools in the CryptoCookies environment.
	// pool[0] = CKI_STAKING; pool[1] = FDG_STAKING
	// Append-only data structure.
	address[] public pools;

	// Two staking pools that never change.
	CCStaking public immutable CKI_STAKING;
	CCStaking public immutable FDG_STAKING;

	/// @notice Constructs a CCPoolHandler contract.
	/// To complete the setup, control over both bridges has to be granted
	/// over by the previous admin. The stakes of both bridges must NOT be
	/// touched by the admin before.
	/// @param _ckiBridge The Cookie bridge of CCCore.
	/// @param _fdgBridge The Fudge bridge of CCCore.
	/// @param _lockingDeployer The locking deployer proxy.
	/// @param _dao The DAO of CryptoCookies.
	constructor(address _ckiBridge, address _fdgBridge, address _lockingDeployer, address _dao) {
		FDG_BRIDGE = ERC20ControlBridge(_fdgBridge);
		FDG = address(FDG_BRIDGE.TOKEN());

		CKI_BRIDGE = ERC20ControlBridge(_ckiBridge);
		CKI = address(CKI_BRIDGE.TOKEN());

		DAO = _dao;
		DEPLOYER = LockingDeployer(_lockingDeployer);

		// Deploy both staking pools only once.
		// Note: The DAO will have to activate them by adding stake.
		// Staking contracts are light enough and do not require deployers.
		CKI_STAKING = new CCStaking(CKI, _fdgBridge);
		pools.push(address(CKI_STAKING));

		FDG_STAKING = new CCStaking(FDG, _ckiBridge);
		pools.push(address(FDG_STAKING));
	}

	/// @notice Changes the revenue stake of a given staking pool.
	/// Can only be called by the DAO.
	/// @param _cki True for Cookie staking, false for Fudge staking.
	/// @param _change The intensity of stake change.
	function changeStake(bool _cki, int256 _change) external onlyDAO {
		if (_cki) FDG_BRIDGE.userChangeStake(address(CKI_STAKING), _change);
		else CKI_BRIDGE.userChangeStake(address(FDG_STAKING), _change);
	}

	/// @notice Schedules a	new locking pool creation.
	/// Can only be called by the DAO.
	/// @param _cki True for Cookie locking, false for Fudge locking.
	/// @param _start When the locking pool will start receiving revenue.
	/// @param _period The lifespan of the locking pool (after start).
	/// @param _stake The revenue stake (once started, until the end).
	function scheduleLocking(
		bool _cki,
		uint256 _start,
		uint256 _period,
		uint256 _stake
	) external onlyDAO {
		require(_start >= block.timestamp);

		address tkn = _cki ? address(CKI) : address(FDG);
		address bridge = _cki ? address(CKI_BRIDGE) : address(FDG_BRIDGE);
		uint256 end = _start + _period;

		address pool = address(DEPLOYER.deploy(tkn, bridge, end));

		pools.push(pool);
		lockings[pool] = LockMetadata(
			true,
			LockStatus.SCHEDULED,
			uint40(_start),
			uint40(end),
			uint128(_stake)
		);
	}

	/// @notice Starts a scheduled locking pool waiting to be activated (i.e. start timestamp has
	/// passed). Will allocate stake in the bridge contract. Callable by anyone.
	/// @param _pool A valid, scheduled locking pool address, ready to be activated.
	function startLocking(address _pool) external {
		LockMetadata storage metadata = lockings[_pool];
		require(metadata.valid && metadata.status == LockStatus.SCHEDULED);
		require(block.timestamp >= metadata.start);

		metadata.status = LockStatus.RUNNING;
		CCLocking(_pool).BRIDGE().userChangeStake(_pool, int256(uint256(metadata.stake)));
	}

	/// @notice Stops a running locking pool that has expired (i.e. stop timestamp has passed).
	/// Will de-allocate stake from the bridge contract. Callable by anyone.
	/// @param _pool A valid, running locking pool address, ready to be stopped.
	function stopLocking(address _pool) external {
		LockMetadata storage metadata = lockings[_pool];
		require(metadata.valid && metadata.status == LockStatus.RUNNING);
		require(block.timestamp >= metadata.end);

		metadata.status = LockStatus.STOPPED;
		CCLocking(_pool).BRIDGE().userChangeStake(_pool, int256(uint256(metadata.stake)) * -1);
	}
}
