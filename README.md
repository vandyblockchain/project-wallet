# Project Wallet

This project uses Hardhat, ethers.js, and React to create a basic DApp that provides the functionality for the User Registry smart contract.

To start clone this repository into your own directory.

1) Install the dependencies with 
```shell
npm i
```
or
```shell
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
```
2) Start a hardhat node (keep this terminal open)
```shell
npx hardhat node
```
3) In another terminal. To run locally enter the command
```shell
npx hardhat run scripts/deploy.js --network localhost
```
