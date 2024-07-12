<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vrag99/UFlix">
    <img src="./logo.svg" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">UFlix</h3>

  <p align="center">
The future of video streaming is here! <br/>  As the first game-changing SocialFi platform on the Ubit network, UFlix leverages a familiar EVM chain to offer seamless peer-to-peer video streaming with secure content storage on IPFS. Creators can easily monetize their content with native tokens through microtransactions. Governed by a DAO, UFlix ensures transparent copyright and moderation, making it the frontrunner in EVM-based social video streaming.
    <br />
    <a href="https://github.com/vrag99/UFlix"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/vrag99/UFlix">View Demo</a>
    ·
    <a href="https://github.com/vrag99/UFlix/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/vrag99/UFlix/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#understanding-UFlix">Understanding UFlix</a>
      <ul>
        <li><a href="#architecture">Architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]
### UFlix: A Revolutionary EVM-based Video Streaming dApp on the Ubit Network

**Built for Creators, Powered by Community:**
UFlix is a next-gen, decentralized video streaming platform built on the EVM-compatible Ubit network. By using a familiar environment, UFlix becomes accessible to a broader range of developers, fostering a vibrant and dynamic creator community.

**Peer-to-Peer and Secure:**
UFlix empowers creators with peer-to-peer streaming, ensuring they have full control over their content while viewers enjoy low-latency playback. Utilizing the InterPlanetary File System (IPFS), UFlix guarantees secure and decentralized video storage, eliminating the need for centralized servers.

**Thriving SocialFi Ecosystem:**
UFlix nurtures a SocialFi environment where creators can directly engage with their audience and monetize their content. Native tokens facilitate seamless microtransactions, enabling viewers to support their favorite creators effortlessly.

**Community-Driven Governance:**
UFlix is governed by its community through a Decentralized Autonomous Organization (DAO). This transparent and fair system addresses issues like bans and copyright strikes, giving everyone a voice in shaping the platform's future.

**At the Forefront of Innovation:**
UFlix is poised to lead the way in EVM-based social video streaming on the Ubit network. By combining a familiar development environment, secure content storage, a thriving SocialFi ecosystem, and community-driven governance, UFlix delivers a revolutionary experience for both creators and viewers.

**Additional Points to Consider:**
* Highlight the specific EVM chain UFlix is built on, if that information is available.
* Briefly describe the utility of the native token beyond microtransactions (e.g., staking for governance rights, access to exclusive content).
* Emphasize any unique features UFlix offers compared to existing video streaming platforms (e.g., focus on specific content genres, built-in social media tools).


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Understanding UFlix
### Architecture
![Architecture][architecture]


### UserFlow
##### Flow for signup
**1. Signup:**
![Architecture][userflow_one]
* User visits the UFlix dApp website or opens the mobile app.
* User clicks on a "Signup" button.
* A signup form appears, prompting the user to connect their crypto wallet (e.g., MetaMask, WalletConnect).
* Upon successful connection, the user's wallet address is registered within the UFlix platform.
* The user can now explore the platform's functionalities.

**2. Browsing Videos:**
![Architecture][userflow_two]
* User navigates to the "Browse" section of the platform.
* The platform displays a list of available videos.
* Video listings may include thumbnails, titles, creators' names, and tags.
* Filtering and search options may be available to help users find specific content.
* For paid videos, a price tag might be displayed alongside the video.

**3. Watching a Video with Like Button and Comments:**
![Architecture][userflow_three]
* User clicks on a video thumbnail to initiate playback.
* The platform checks if the video is free or paid.
    * If free, the video starts playing immediately.
    * If paid:
        * A pop-up appears displaying the video's cost.
        * The user can choose to pay for the video using the "Pay Now" button. This triggers the `payForVideo` function in the smart contract, transferring the required amount of platform tokens from the user's wallet.
        * Upon successful payment, the video playback begins.
* While watching the video, a like button might be available on the player interface. Clicking the button interacts with the platform's smart contract, potentially registering the user's like for the video.
* A comments section might be displayed below the video player. Users can connect their wallets and leave comments on the video. These comments might be stored on-chain or off-chain depending on the platform's implementation.

**4. Uploading a Video:**
![UploadVideo][userflow_four]
* The user navigates to the upload section of the platform.
* You are prompted to choose the files and metadata for the video.
* The platform offers options for setting the video as free or paid.
  * If the video is paid - the creator makes a one time payment
* Upon submitting the details, the video is uploaded to the platform's server. 
* Once the upload is complete, the platform processes the video for compatibility across different devices and resolutions.
* After processing, the video is published on the platform and becomes available for other users to watch, like, and comment on.

**Additional Considerations:**

* User authentication might be implemented beyond initial signup for advanced functionalities like content creation or DAO participation.
* The platform might incentivize user engagement through a reputation system or reward tokens earned for likes, comments, or other actions.

### Contracts
The following are the Contract refrebnces.Open Each contract to see the refrence
<details>
<summary><h2>VideoManager</h2></summary>
This smart contract is a basic video management platform that allows users to upload videos, pay for access to certain videos, and manage copyright strikes and bans. Here's the API reference for the `VideoManager` contract:

### Constructor
```solidity
constructor(address _token, address _governanceContract)
```
- **Parameters:**
  - `_token`: Address of the ERC20 token used for payments.
  - `_governanceContract`: Address of the governance contract.

### Events
```solidity
event PaidForVideo(uint256 indexed id, address indexed user);
event VideoUploaded(uint256 indexed id, address indexed creator);
```
- **PaidForVideo:** Emitted when a user pays for a video.
- **VideoUploaded:** Emitted when a creator uploads a video.

### Structs
```solidity
struct Video {
    address creator;
    uint256 id;
    string ipfsHash;
    bool paid;
    uint256 cost;
    bool banned;
    bool copyRightStrike;
}
```
- **Video:** Represents a video on the platform.

### State Variables
```solidity
Video[] public videos;
uint256 public videoCount;
IERC20 public token;
mapping(address => uint256[]) public creatorMap;
mapping(address => bool) public platformAdmin;
address public governanceContract;
mapping(uint256 => mapping(address => bool)) public users;
uint256 public constant FEES = 10000 gwei;
```

### Modifiers
```solidity
modifier correctVideoId(uint256 id);
modifier onlyGovernance();
```
- **correctVideoId:** Ensures the video ID is valid.
- **onlyGovernance:** Ensures the caller is the governance contract.

### Functions

#### `getIpfsHash`
```solidity
function getIpfsHash(uint256 id, address addr) external view correctVideoId(id) returns (string memory ipfsHash, bool paid);
```
- **Parameters:**
  - `id`: Video ID.
  - `addr`: Address of the user requesting the IPFS hash.
- **Returns:** IPFS hash and a boolean indicating if the user has paid for the video.

#### `isVideoPaid`
```solidity
function isVideoPaid(uint256 id) external view correctVideoId(id) returns (bool);
```
- **Parameters:**
  - `id`: Video ID.
- **Returns:** Boolean indicating if the video is paid.

#### `isVideoBanned`
```solidity
function isVideoBanned(uint256 id) external view correctVideoId(id) returns (bool);
```
- **Parameters:**
  - `id`: Video ID.
- **Returns:** Boolean indicating if the video is banned.

#### `banVideo`
```solidity
function banVideo(uint256 id) external onlyGovernance returns (bool success);
```
- **Parameters:**
  - `id`: Video ID.
- **Returns:** Boolean indicating success of the operation.

#### `unBanVideo`
```solidity
function unBanVideo(uint256 id) external onlyGovernance returns (bool success);
```
- **Parameters:**
  - `id`: Video ID.
- **Returns:** Boolean indicating success of the operation.

#### `copyRightStrikeVideo`
```solidity
function copyRightStrikeVideo(uint256 id) external onlyGovernance returns (bool success);
```
- **Parameters:**
  - `id`: Video ID.
- **Returns:** Boolean indicating success of the operation.

#### `uploadVideo`
```solidity
function uploadVideo(string memory ipfsHash, uint256 cost, bool paid) external payable;
```
- **Parameters:**
  - `ipfsHash`: IPFS hash of the video.
  - `cost`: Cost of the video in tokens.
  - `paid`: Boolean indicating if the video requires payment.
- **Requirements:**
  - Caller must pay the `FEES`.
  - Emits `VideoUploaded` event.

#### `payForVideo`
```solidity
function payForVideo(uint256 id) external payable correctVideoId(id);
```
- **Parameters:**
  - `id`: Video ID.
- **Requirements:**
  - Video must be paid.
  - Successful token swap.
  - Emits `PaidForVideo` event.

#### `swapTokens`
```solidity
function swapTokens(uint amount) public returns (bool _success);
```
- **Parameters:**
  - `amount`: Amount of tokens to swap.
- **Returns:** Boolean indicating success of the swap.

### Example Usage

#### Uploading a Video
```solidity
VideoManager.uploadVideo("Qm...Hash", 1000, true);
```
- **Description:** Uploads a video with an IPFS hash, sets the cost to 1000 tokens, and marks it as a paid video.

#### Paying for a Video
```solidity
VideoManager.payForVideo(1);
```
- **Description:** Pays for access to the video with ID 1.

#### Getting IPFS Hash
```solidity
(string memory ipfsHash, bool paid) = VideoManager.getIpfsHash(1, userAddress);
```
- **Description:** Retrieves the IPFS hash for video ID 1 if the user has paid for it.
</details>
<details>
    <summary><h2>DAO</h2></summary>
This contract defines a DAO (Decentralized Autonomous Organization) that can create and vote on proposals to manage videos, such as banning, unbanning, and applying copyright strikes. Here's the API reference for the `DAO` contract:

### Constructor
```solidity
constructor(address[] memory _admins)
```
- **Parameters:**
  - `_admins`: Array of addresses that will be set as initial admins.

### Enums
```solidity
enum ProposalAction { BanVideo, CopyrightStrikeVideo, UnbanVideo }
```
- **ProposalAction:** Enum to define actions that can be taken on videos.

### Structs
```solidity
struct Proposal {
    uint256 id;
    string description;
    ProposalAction action;
    uint256 yesCount;
    uint256 noCount;
    bool executed;
    mapping(address => bool) voted;
}
```
- **Proposal:** Represents a proposal within the DAO.

### State Variables
```solidity
address[] public admins;
uint256 public proposalCount;
IVideo public videoContract;
mapping(uint256 => Proposal) public proposals;
mapping(address => bool) public voters;
mapping(address => bool) public isAdmin;
uint256 constant STAKING_FEES = 100000 gwei;
```

### Modifiers
```solidity
modifier onlyAdmin();
modifier onlyVoters();
```
- **onlyAdmin:** Ensures the caller is an admin.
- **onlyVoters:** Ensures the caller is a registered voter.

### Events
```solidity
event ProposalCreated(uint256 id, string description, ProposalAction action);
event Voted(uint256 proposalId, address voter, bool vote);
event ProposalExecuted(uint256 id);
```
- **ProposalCreated:** Emitted when a proposal is created.
- **Voted:** Emitted when a vote is cast on a proposal.
- **ProposalExecuted:** Emitted when a proposal is executed.

### Functions

#### `setVideoContract`
```solidity
function setVideoContract(address _contract) external onlyOwner
```
- **Parameters:**
  - `_contract`: Address of the video contract.
- **Description:** Sets the video contract address.

#### `registerVoter`
```solidity
function registerVoter(address _voter) external payable
```
- **Parameters:**
  - `_voter`: Address of the voter to be registered.
- **Requirements:**
  - Caller must pay the `STAKING_FEES`.
- **Description:** Registers a new voter.

#### `createProposal`
```solidity
function createProposal(string calldata _description, ProposalAction _action) external onlyVoters
```
- **Parameters:**
  - `_description`: Description of the proposal.
  - `_action`: Action to be taken (BanVideo, CopyrightStrikeVideo, UnbanVideo).
- **Description:** Creates a new proposal.

#### `vote`
```solidity
function vote(uint256 _proposalId, bool _vote) external onlyVoters
```
- **Parameters:**
  - `_proposalId`: ID of the proposal to vote on.
  - `_vote`: Boolean indicating the vote (true for yes, false for no).
- **Description:** Casts a vote on a proposal.

#### `executeProposal`
```solidity
function executeProposal(uint256 _proposalId, uint256 id) external onlyAdmin
```
- **Parameters:**
  - `_proposalId`: ID of the proposal to execute.
  - `id`: ID of the video on which the proposal action is to be executed.
- **Description:** Executes a proposal after it has been voted on.

#### `getAdmins`
```solidity
function getAdmins() external view returns (address[] memory)
```
- **Returns:** Array of admin addresses.
- **Description:** Returns the list of admins.

### Example Usage

#### Setting the Video Contract
```solidity
DAO.setVideoContract(videoContractAddress);
```
- **Description:** Sets the address of the video contract.

#### Registering a Voter
```solidity
DAO.registerVoter{value: 100000 gwei}(voterAddress);
```
- **Description:** Registers a new voter by staking the required fees.

#### Creating a Proposal
```solidity
DAO.createProposal("Ban this inappropriate video", ProposalAction.BanVideo);
```
- **Description:** Creates a new proposal to ban a video.

#### Voting on a Proposal
```solidity
DAO.vote(1, true);
```
- **Description:** Casts a yes vote on the proposal with ID 1.

#### Executing a Proposal
```solidity
DAO.executeProposal(1, videoId);
```
- **Description:** Executes the proposal with ID 1 on the specified video.


</details>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prequisite
Ensure you have ipfs on your computer


### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/vrag99/UFlix.git && cd UFlix
   ```
2. Start the local backend enviorment and fill the env as mention below
   ```sh
    cd backend && npm i && npm run dev
   ```
3. ipfs daemon
   ```sh
    ipfs daemon
   ```
4. Run the Frontend
   ```sh
    cd ui && yarn && yarn dev
   ```

#### Development env backend
```
# PORT
PORT=9090

# Databse url
DATABASE_URL=

SECRET_KEY=developemtn_secret_key

# For opt
SMTP_HOST=
SMTP_PORT=
SMTP_MAIL=
SMTP_APP_PASS=
# where is ipfgs
IPFS_BINARY=


LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = 'http://localhost:5173'
CREDENTIALS = true
```
##### Development env frontend
```bash
VITE_BACKEND_URI=http://localhost:9090/api
VITE_IPFS_GATEWAY_URI=https://localhost:8080/ipfs
```
######  Voila! now movie Should be running on localhost:5173

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

**For Creators:**

* **Monetize Your Passion:** Upload your videos and connect directly with your audience. Earn native tokens through microtransactions for every view or subscription.
* **Creative Freedom:** No censorship or limitations. Share your unique voice and build a loyal following.
* **Retain Control:**  Decide how your content is distributed and set your own pricing.

**For Viewers:**

* **Unfiltered Content:** Discover a diverse library of videos free from centralized control. Support creators you love directly.
* **Seamless Experience:** Enjoy high-quality, low-latency streaming powered by peer-to-peer technology.
* **Community-driven Platform:**  Participate in the DAO governance, shaping the future of UFlix and influencing platform policies.

**Applications of UFlix:**

* **Independent Filmmakers:** Showcase your work and reach a global audience without relying on traditional studios.
* **Educational Channels:** Offer in-depth tutorials or niche courses and get rewarded for your expertise.
* **Livestreaming & Events:** Host live events, Q&A sessions, or exclusive behind-the-scenes content and monetize through viewer interaction.
* **Gaming & Esports:** Share gameplay footage, highlights, and build a community around your passion for gaming.
* **Art & Music:** Share your creative expression, build a fanbase, and offer exclusive content for dedicated supporters.

**UFlix empowers both creators and viewers with a revolutionary approach to video streaming. It fosters a space for unfiltered creativity, direct monetization, and community-driven governance, paving the way for a more democratic and rewarding online entertainment experience.**
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/vrag99/movie/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/vrag99/UFlix.svg?style=for-the-badge
[contributors-url]: https://github.com/vrag99/UFlix/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vrag99/UFlix.svg?style=for-the-badge
[forks-url]: https://github.com/vrag99/UFlix/network/members
[stars-shield]: https://img.shields.io/github/stars/vrag99/UFlix.svg?style=for-the-badge
[stars-url]: https://github.com/vrag99/UFlix/stargazers
[issues-shield]: https://img.shields.io/github/issues/vrag99/UFlix.svg?style=for-the-badge
[issues-url]: https://github.com/vrag99/UFlix/issues
[license-shield]: https://img.shields.io/github/license/vrag99/UFlix.svg?style=for-the-badge
[license-url]: https://github.com/vrag99/UFlix/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/intro.png
[frost-screenshot]: images/frost.png
[architecture]: images/architecture.jpeg
[userflow_one]: images/onboard.png
[userflow_two]: images/videos.png
[userflow_three]: images/player.png
[userflow_four]: images/upload-video.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com