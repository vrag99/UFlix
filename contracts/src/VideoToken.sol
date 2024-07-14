// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.26;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VideoToken  is ERC20{
    constructor() ERC20("VideoToken", "VTK") {
       _mint(msg.sender, 1000000 * 10 ** uint(18));
    }
}