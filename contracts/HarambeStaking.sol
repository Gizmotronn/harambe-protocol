// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Replace with open-zeppelin later
import "./Collection.sol"; // NFT collection smart contract
import "./Rewards.sol"; // ERC20 staking contract rewards token smart contract

contract NFTStaking is Ownable, IERC721Receiver { // IERC721R.... enables the transferral of NFTs into the contract (ownership)
    uint256 public totalStake;

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
    StakingRewards token;

    //Reference tokenId to stake
    mapping(uint256 => Stake) public vault;

    constructor(Collection _nft, StakingRewards _token) {
        nft = _nft;
        token = _token;
    }

    function stake(uint256[] calldata tokenIds) external {
        uint256 tokenId;
        totalStaked += tokenIds.length;
        for (uint i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            require(nft.ownerOf(tokenId) == msg.sender, "not your token");
            require(vault[tokenId].tokenId == 0, 'already staked'); // if, otherwise

            nft.transferFrom(msg.sender, address(this), tokenId);
            emit NFTStaked(msg.sender, tokenId,block.timestamp);

            vault[tokenId] = Stake({
                owner: msg.sender,
                tokenId: uint24(tokenId),
                timestamp: uint48(block.timestamp)
            })
        }
    }
}