import { ethers, Wallet } from "ethers";
import { toNumber, toFullDigitStr } from "./helpers";

import { DETToken__factory } from "../typechain/factories/DETToken__factory"; // det token factory
const RECEIVER_ADDRESS: string = "0x931d6514C8d5522C7489aad7aCCFfC20E6A92E57"; //alice
const CONTRACT_ADDRESS = "0xa94077d093eCCA58f622d2C70a296bB7D5393096"; // det token

export const PROVIDER = new ethers.providers.JsonRpcProvider(
  "http://18.210.28.137:8547" // add your rpc url over here
);
export const FAUCET = new Wallet("90121808028adae9d38f0ad2ab29929bb4a7dbed40aaa02e1b5f49572a297066",PROVIDER); // faucet having eth as well as det

const detFactory = new DETToken__factory(FAUCET);
const DET = detFactory.attach(CONTRACT_ADDRESS);

// Write the contract call for which to BENCHMARK the chain
export const TASK = async (wallet: Wallet) => {
  return DET.connect(wallet).transfer(RECEIVER_ADDRESS, toFullDigitStr(100), {
    gasLimit: 2000000,
  });
};

// Write any pre-task to be executed BEFORE running the TASK
export const PRE_TASK = async (wallets: Wallet[]) => {
  const nonce:number = await FAUCET.getTransactionCount();
  for (let itr  = 0; itr< wallets.length; itr++) {
        await DET.connect(FAUCET).transfer(
        wallets[itr].address,
        toFullDigitStr(1000),
        { 'gasLimit': 2000000, 'nonce': nonce +itr }
        );
    }
  console.log(
    "Balance of Receiver:",
    toNumber(await DET.balanceOf(RECEIVER_ADDRESS))
  );
};

// Write any post-tasks to be executed AFTER running the TASK
export const POST_TASK = async () => {
  console.log(
    "Balance of Receiver:",
    toNumber(await DET.balanceOf(RECEIVER_ADDRESS))
  );
};
