import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//TODO: Add more networks
//TODO: Add network RPC URLs to the .env file
//TODO: Add private key to the .env file

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY ?? ""],
      chainId: 5,
    }
  },
  solidity: "0.8.17",
};

export default config;
