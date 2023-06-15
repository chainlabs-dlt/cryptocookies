import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {DEPLOY_KEY} from "./secrets";

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        chainlabs: {
            url: `https://eth.cryptocookies.wtf`,
            accounts: [DEPLOY_KEY]
        }
    }
};

export default config;
