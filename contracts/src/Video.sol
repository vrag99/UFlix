// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.26;

import {Ownable} from "lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import {IVideo} from "./interfaces/Ivideo.sol";
import {IERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract VideoManager is Ownable, IVideo, ReentrancyGuard {
    struct Video {
        address creator;
        uint256 id;
        string ipfsHash;
        bool paid;
        uint256 cost;
        bool banned;
        bool copyRightStrike;
    }

    Video[] videos;
    uint256 public videoCount;

    mapping(address => uint256[]) creatorMap;
    mapping(address => bool) platformAdmin;
    address governanceContract;
    //Userds who have paid for the videos
    // video id => user[]
    mapping(uint256 => mapping(address => bool)) users;

    uint256 public constant FEES = 10000 gwei;

    constructor(address _governanceContract) Ownable(msg.sender) {
        videoCount = 0;
        governanceContract = _governanceContract;
    }

    event PaidForVideo(uint256 indexed id, address indexed user);
    event VideoUploaded(uint256 indexed id, address indexed creator);

    modifier correctVideoId(uint256 id) {
        require(id <= videoCount, "Invalid Video Id");
        _;
    }

    modifier onlyGovernance() {
        require(msg.sender == governanceContract, "NGC");
        _;
    }

    function getIpfsHash(
        uint256 id,
        address addr
    )
        external
        view
        correctVideoId(id)
        returns (string memory ipfsHash, bool paid)
    {
        Video memory video = videos[id];
        if (video.paid) {
            if (users[id][addr]) {
                ipfsHash = video.ipfsHash;
                paid = true;
            } else {}
        } else {
            ipfsHash = video.ipfsHash;
            paid = false;
        }
    }

    function hasVideoPaidForVideo(
        uint256 id,
        address addr
    ) external view correctVideoId(id) returns (bool) {
        return users[id][addr];
    }

    function getCount() external view returns (uint256) {
        return videoCount;
    }

    function isVideoPaid(
        uint256 id
    ) external view correctVideoId(id) returns (bool) {
        return videos[id].paid;
    }

    function isVideoBanned(
        uint256 id
    ) external view correctVideoId(id) returns (bool) {
        return videos[id].banned;
    }

    function banVideo(
        uint256 id
    ) external onlyGovernance returns (bool success) {
        Video storage video = videos[id];
        success = video.banned = true;
    }

    function unBanVideo(
        uint256 id
    ) external onlyGovernance returns (bool success) {
        Video storage video = videos[id];
        success = video.banned = true;
    }

    function copyRightStrikeVideo(
        uint256 id
    ) external onlyGovernance returns (bool success) {
        Video storage video = videos[id];
        require(governanceContract == msg.sender, "Only creator can ban video");
        success = video.banned = true;
    }

    function uploadVideo(
        string memory ipfsHash,
        uint256 cost,
        bool paid
    ) external returns (uint256 id) {
        id = videoCount += 1;
        videos.push(
            Video({
                creator: msg.sender,
                cost: cost,
                paid: paid,
                ipfsHash: ipfsHash,
                id: videoCount,
                banned: false,
                copyRightStrike: false
            })
        );
        emit VideoUploaded(videoCount, msg.sender);
    }

    function payForVideo(uint256 id) external payable correctVideoId(id) {
        Video memory video = videos[id];
        require(msg.value >= video.cost + FEES, "Insufficient funds");
        require(video.paid, "Video is not paid");
        swapTokens(video.cost, video.creator);
        users[id][msg.sender] = true;
        emit PaidForVideo(id, msg.sender);
    }

    function swapTokens(uint amount, address creator) public nonReentrant {
        payable(creator).transfer(amount);
    }
}
