// https://eth-sepolia.g.alchemy.com/v2/aj_jEQVoM-SAnMPEUfQgSme5AxVJH82q

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "aj_jEQVoM-SAnMPEUfQgSme5AxVJH82q";
const METAMASK_PRIVATE_KEY =
  "a51ea3ce33594f8250b4ac76e018ef75e9fad7389d77ba3d184b1a85e244ec53";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY],
    },
  },
};

export default config;
