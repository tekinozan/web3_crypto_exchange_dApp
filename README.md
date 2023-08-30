## Web3 Crypto Exchange DApp

A decentralized cryptocurrency exchange React application with metamask pairing, live smart contract data fetching, and the ability swap my own created ERC20 tokens.
The factory and router contracts has been deployed with CRANQ.
And the ERC20 tokens created with https://www.smartcontracts.tools/token-generator/create/ethereum/ 

The MetaMask wallet should be in Goerli Test Network.(httpsbeykentswap.netlify.app) 


This template contains 2 packages

- [contracts](packagescontracts)
- [react-app](packagesreact-app)

The React app implements a basic example for how to connect and pull data from the
[Uniswap v2](httpsthegraph.comexplorersubgraphuniswapuniswap-v2) subgraph.

## What is Uniswap v2

Uniswap V2 is the second iteration of the Uniswap, a protocol for automated token exchange on Ethereum. Read more about it in the [official documentation](httpsuniswap.orgdocsv2).

## How to regenerate the project

Run yarn create eth-app my-eth-app --template uniswap-v2
More httpsgithub.compaulrbergcreate-eth-app

## How to start

- yarn install
- update the configuration in .packagesreact-appsrcconfig.js
- yarn run react-appstart
