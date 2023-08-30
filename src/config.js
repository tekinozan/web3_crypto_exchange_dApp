import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "YOUR ROUTER ADDRESS";
//export const POOLS = undefined; 
//export const COIN_NAME = "WETH";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "YOUR_PROVIDER_LINK", // can take provider link in alchemy.com
  },
};
