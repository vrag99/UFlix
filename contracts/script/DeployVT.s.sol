// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Script} from "forge-std/Script.sol";
import {VideoToken} from "../src/VideoToken.sol";
import {console} from "forge-std/console.sol";

contract DeployVT is Script {
    uint256 public DEFAULT_ANVIL_PRIVATE_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    uint256 public deployerKey;

    function run() external returns (address) {
        vm.startBroadcast();
        VideoToken videoToken = new VideoToken();
        vm.stopBroadcast();
        return address(videoToken);
    }
}