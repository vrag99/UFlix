// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {DAO} from  "src/Dao.sol";


contract DeployDao is Script {
    
    uint256 public DEFAULT_ANVIL_PRIVATE_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    uint256 public deployerKey;
    address[] admins;

    function run() external returns (address) {
        vm.startBroadcast();
        admins.push(msg.sender);
        DAO dao =  new DAO(admins);
        vm.stopBroadcast();
        return address(dao);
    }
}