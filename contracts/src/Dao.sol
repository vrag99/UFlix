// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ownable} from "lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import {IVideo} from "./interfaces/Ivideo.sol";


contract DAO is Ownable {
    address[] public admins;
    uint256 public proposalCount;

    enum ProposalAction { BanVideo, CopyrightStrikeVideo, UnbanVideo }

    struct Proposal {
        uint256 id;
        string description;
        ProposalAction action;
        uint256 yesCount;
        uint256 noCount;
        bool executed;
        mapping(address => bool) voted;
    }

    IVideo videoContract;

    mapping(uint256 => Proposal) public proposals;
    mapping(address => bool) public voters;
    mapping(address => bool) public isAdmin;

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can perform this action");
        _;
    }

    modifier onlyVoters() {
        require(voters[msg.sender], "Only registered voters can perform this action");
        _;
    }

    event ProposalCreated(uint256 id, string description, ProposalAction action);
    event Voted(uint256 proposalId, address voter, bool vote);
    event ProposalExecuted(uint256 id);

    uint256 constant STAKING_FEES = 100000 gwei;

    constructor(address[] memory _admins) Ownable(msg.sender) {
        admins = _admins;
        for (uint i = 0; i < _admins.length; i++) {
            isAdmin[_admins[i]] = true;
        }
    }

    function setVideoConract(address _contract) external  onlyOwner {
        videoContract = IVideo(_contract);
    }



    function registerVoter(address _voter) external payable  {
        require(msg.value >= STAKING_FEES, "NEF");
        voters[_voter] = true;
    }

    function createProposal(string calldata _description, ProposalAction _action) external onlyVoters {
        proposalCount += 1;
        Proposal storage newProposal = proposals[proposalCount];
        newProposal.id = proposalCount;
        newProposal.description = _description;
        newProposal.action = _action;

        emit ProposalCreated(proposalCount, _description, _action);
    }

    function vote(uint256 _proposalId, bool _vote) external onlyVoters {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.voted[msg.sender], "You have already voted");
        require(!proposal.executed, "Proposal already executed");

        proposal.voted[msg.sender] = true;
        if (_vote) {
            proposal.yesCount += 1;
        } else {
            proposal.noCount += 1;
        }

        emit Voted(_proposalId, msg.sender, _vote);
    }

    function executeProposal(uint256 _proposalId,uint256 id) external onlyAdmin {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");

        proposal.executed = true;

        // Proposal execution logic based on the action
        if (proposal.action == ProposalAction.BanVideo) {
            videoContract.banVideo(id);
        } else if (proposal.action == ProposalAction.CopyrightStrikeVideo) {
            // Copyright strike video logic
            videoContract.copyRightStrikeVideo(id);
        } else if (proposal.action == ProposalAction.UnbanVideo) {
            // Unban video logic
            videoContract.unBanVideo(id);
        }

        emit ProposalExecuted(_proposalId);
    }

    function getAdmins() external view returns (address[] memory) {
        return admins;
    }
}
