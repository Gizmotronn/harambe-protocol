// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Replace with open-zeppelin later
import "https://github.com/net2devcrypto/n2dstaking/Collection.sol"; // NFT collection smart contract
import "https://github.com/net2devcrypto/n2dstaking/N2DRewards.sol"; // ERC20 staking contract rewards token smart contract

contract NFTStaking is Ownable, IERC721Receiver { // IERC721R.... enables the transferral of NFTs into the contract (ownership)
    uint256 public totalStake;

    struct Stake { // Stores the staked token's data, owner and earning values 
        uint24 tokenId;
        uint48 timestamp; // earning value - based on block timestamp
        address owner;
    }

    event NFTStaked(address owner, uint256 tokenId, uint256 value);
    event NFTUnstaked(address owner, uint256 tokenId, uint256 value);
    event Claimed(address owner, uint256 amount);
}