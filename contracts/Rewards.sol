// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Rewards is ERC20, ERC20Burnable, Ownable {
  mapping(address => bool) controllers; // allows the attaching of addresses to the controller (can be changed after the minting of this contract)
  
  constructor() ERC20("Rewards", "RHPR") { } // Riph-Harambe-Protocol-Rewards

  function mint(address to, uint256 amount) external { // mint the staking tokens
    require(controllers[msg.sender], "Only controllers can mint"); // These tokens can be minted at any time by the contract controller
    _mint(to, amount); // send the tokens directly to the staker upon claim() function in the nft staking contract
  }

  function burnFrom(address account, uint256 amount) public override {
      if (controllers[msg.sender]) {
          _burn(account, amount);
      }
      else {
          super.burnFrom(account, amount);
      }
  }

  function addController(address controller) external onlyOwner {
    controllers[controller] = true;
  }

  function removeController(address controller) external onlyOwner {
    controllers[controller] = false;
  }
}