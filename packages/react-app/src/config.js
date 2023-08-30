import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x99145aA71F6046Ae4A76953dD79a0cfB69EDD83d";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/tHXBu6R9-Gp0I2_yg9pHdwAg47QRVyv3",
  },
};
