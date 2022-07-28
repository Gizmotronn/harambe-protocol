// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Replace with open-zeppelin later
import "./Collection.sol"; // NFT collection smart contract
import "./Rewards.sol"; // ERC20 staking contract rewards token smart contract

contract NFTStaking is Ownable, IERC721Receiver { // IERC721R.... enables the transferral of NFTs into the contract (ownership)
    uint256 public totalStaked;

    struct Stake { // Stores the staked token's data, owner and earning values 
        uint24 tokenId;
        uint48 timestamp; // earning value - based on block timestamp. When the user executed the staking action
        address owner;
    }

    event NFTStaked(address owner, uint256 tokenId, uint256 value); // when the user adds their nft to the staking contract
    event NFTUnstaked(address owner, uint256 tokenId, uint256 value); // when the user claims/unstakes their nft (taking it out of the staking contract)
    event Claimed(address owner, uint256 amount); // when the user claims their staked tokens

    // Pointers to the NFT collection & reward token smart contract
    Collection nft;
    Rewards token;

    //Reference tokenId to stake
    mapping(uint256 => Stake) public vault;

    constructor(Collection _nft, Rewards _token) {
        nft = _nft;
        token = _token;
    }

    function stake(uint256[] calldata tokenIds) external { // the user selects their tokenIds they want to stake in the input array
        uint256 tokenId;
        totalStaked += tokenIds.length;
        for (uint i = 0; i < tokenIds.length; i++) { // Store each staked nft to start staking calculations per nft staked
            tokenId = tokenIds[i];
            require(nft.ownerOf(tokenId) == msg.sender, "not your token");
            require(vault[tokenId].tokenId == 0, 'already staked'); // if, otherwise

            nft.transferFrom(msg.sender, address(this), tokenId);
            emit NFTStaked(msg.sender, tokenId,block.timestamp);

            vault[tokenId] = Stake({ 
                owner: msg.sender,
                tokenId: uint24(tokenId),
                timestamp: uint48(block.timestamp)
            });
        }
    }

    function _unstakeMany(address account, uint256[] calldata tokenIds) internal {
        uint256 tokenId;
        totalStaked -= tokenIds.length;
        for (uint i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            Stake memory staked = vault[tokenId];
            require(staked.owner == msg.sender, "not an owner");

            delete vault[tokenId];
            emit NFTUnstaked(account, tokenId, block.timestamp);
            nft.transferFrom(address(this), account, tokenId);
        }
    }

    function claim(uint256[] calldata tokenIds) external {
        _claim(msg.sender, tokenIds, false);
    }

    function claimForAddress(address account, uint256[] calldata tokenIds) external {
        _claim(account, tokenIds, false);
    }

    function unstake(uint256[] calldata tokenIds) external {
        _claim(msg.sender, tokenIds, true);
    }

    function _claim(address account, uint256[] calldata tokenIds, bool _unstake) internal { // claim & unstake nfts, or just claim staked erc20? -> bool
        uint256 tokenId; // Called internally by the smart contract with an external call (`claim` function) that is handled by end user
        uint256 earned = 0;

        for (uint i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            Stake memory staked = vault[tokenId];
            require(staked.owner == account, "not an owner");
            uint256 stakedAt = staked.timestamp;
            earned += 10000 ether * (block.timestamp - stakedAt) / 1 days; // staking erc20 tokens that will be rewarded to the staking user
            vault[tokenId] = Stake({
                owner: account,
                tokenId: uint24(tokenId),
                timestamp: uint48(block.timestamp)
            });
        }

        if (earned > 0) { // Can increase this value to force the NFT to be staked for a minimum amount of time
            earned = earned / 10000;
            token.mint(account, earned); // mint the erc20 staking rewards token & send them to the user's wallet address
        }
        
        if (_unstake) {
            _unstakeMany(account, tokenIds); // Unstake the nfts selected by end user [and send them] to the user's wallet address
        }
        emit Claimed(account, earned);
    }

    // Retrieve staking information for end user
    function earningInfo(uint256[] calldata tokenIds) external view returns (uint256[2] memory info) { // What's the current value of the user's staking tokens
        uint256 tokenId;
        uint256 totalScore = 0;
        uint256 earned = 0;
        Stake memory staked = vault[tokenId];
        uint256 stakedAt = staked.timestamp;
        earned += 10000 ether * (block.timestamp - stakedAt) / 1 days; // ether -> erc 20 tokens (staking rewards)
        uint256 earnRatePerSecond = totalScore * 1 ether / 1 days;
        earnRatePerSecond = earnRatePerSecond / 10000;
        return [earned, earnRatePerSecond];
    }

    function balanceOf(address account) public view returns (uint256) { // how many nfts has the user staked in the vault?
        uint256 balance = 0;
        uint256 supply = nft.totalSupply();
        for (uint i = 1; i <= supply; i++) {
            if (vault[i].owner == account) {
                balance += 1;
            }
        }
        return balance;
    }

    function tokensOfOwner(address account) public view returns (uint256[] memory ownerTokens) {
        uint256 supply = nft.totalSupply();
        uint256[] memory tmp = new uint256[](supply);
        uint256 index = 0;
        for (uint tokenId = 1; tokenId <= supply; tokenId++) {
            if (vault[tokenId].owner == account) {
                tmp[index] = vault[tokenId].tokenId;
                index += 1;
            }
        }

        uint256[] memory tokens = new uint256[](index); // number of tokens the end user has earned by staking nfts
        for (uint i = 0; i < index; i++) {
            tokens[i] = tmp[i];
        }

        return tokens;
    }

    function onERC721Received( // some params to dictate how the nfts are transferred into the staking vault
        address,
        address from,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        require(from == address(0x0), "Cannot send nfts to vault directory");
        return IERC721Receiver.onERC721Received.selector;
    }
}