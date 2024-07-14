// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {VideoManager} from  "src/Video.sol";
import {DevOpsTools} from "lib/foundry-devops/src/DevOpsTools.sol";

contract DeployVideo is Script {
    uint256 public DEFAULT_ANVIL_PRIVATE_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    uint256 public deployerKey;

    function run() external returns (address) {
        address mostRecentlyDeployedDAO = DevOpsTools.get_most_recent_deployment("DAO",block.chainid); 
        vm.startBroadcast();
        VideoManager videoManager = new VideoManager(mostRecentlyDeployedDAO);
        vm.stopBroadcast();
        return address(videoManager);
    }
}