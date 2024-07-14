// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

interface IVideo {
    function banVideo(uint256 id) external returns (bool);
    function copyRightStrikeVideo(uint256 id) external returns (bool);
    function unBanVideo(uint256 id) external returns (bool);
}