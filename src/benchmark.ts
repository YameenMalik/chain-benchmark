import { ethers, Wallet } from "ethers";
import { toNumber, toFullDigitStr } from "./helpers";

import { DETToken__factory } from "../typechain/factories/DETToken__factory";
const RECEIVER_ADDRESS: string = "0x931d6514C8d5522C7489aad7aCCFfC20E6A92E57"; //alice
const CONTRACT_ADDRESS = "0x99A53a4eBaBB340Fb3fc3804b5fd81714DF88Dcb"; // det token

export const PROVIDER = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:9000"
);
export const FAUCET = new Wallet(
  "31eaf7d2584b37409065bb99ec421197bb3ffc90cd900536726a0d6a15f91d80",
  PROVIDER
);

const detFactory = new DETToken__factory(FAUCET);
const DET = detFactory.attach(CONTRACT_ADDRESS);

// get user prior votes.
export const TASK = async (wallet: Wallet) => {
  return DET.connect(wallet).transfer(RECEIVER_ADDRESS, toFullDigitStr(100), {
    gasLimit: 2000000,
  });
};

export const PRE_TASK = async (wallets: Wallet[]) => {
  const nonce:number = await FAUCET.getTransactionCount();
  for (let itr  = 0; itr< wallets.length; itr++) {
        await DET.connect(FAUCET).transfer(
        wallets[itr].address,
        toFullDigitStr(100),
        { 'gasLimit': 2000000, 'nonce': nonce +itr }
        );
    }
  console.log(
    "Balance of Receiver:",
    toNumber(await DET.balanceOf(RECEIVER_ADDRESS))
  );
};

export const POST_TASK = async () => {
  console.log(
    "Balance of Receiver:",
    toNumber(await DET.balanceOf(RECEIVER_ADDRESS))
  );
};
