//import { DETToken__factory } from "../../artifacts/typechain/factories/DETToken__factory";
import { ethers, Wallet } from "ethers";
import { toNumber } from './helpers'; 
import * as fs from "fs";
const yargs = require('yargs')

// ----------------------------------------------------------------//
//                          ARGUMENT PARSER
// ----------------------------------------------------------------//

// argument parser
const argv = yargs.options({
    transactions: {
      alias: 't',
      demandOption: false,
      description: 'number of transactions to execute'
    },
    funding: {
        alias: 'f',
        demandOption: false,
        description: 'funding amount to be sent to users'
      },    
}).argv;

const numTransactions:number = argv.transactions? Number(argv.transactions): 1; 
const fundingAmount: string = argv.funding? argv.funding: "0.0001";

const faucetKey ="31eaf7d2584b37409065bb99ec421197bb3ffc90cd900536726a0d6a15f91d80";
const rpcUrl = "http://127.0.0.1:9000";
const walletsPath = `${__dirname}/wallets`;
const walletsPass = "Hello-Hello-Khaalo-Jello";
const detAddr: string = "0x99A53a4eBaBB340Fb3fc3804b5fd81714DF88Dcb";
const aliceAddr: string = "0x931d6514C8d5522C7489aad7aCCFfC20E6A92E57";


const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const wallet = new Wallet(faucetKey, provider);
// const detFactory = new DETToken__factory(wallet);
// const DET = detFactory.attach(detAddr);


async function createWallets(numWallets: number): Promise<ethers.Wallet[]> {
  const wallets: Wallet[] = [];
  for (let i = 0; i < numWallets; i++) {
    const newWallet = Wallet.createRandom();
    const tx = {
      to: newWallet.address,
      value: ethers.utils.parseEther(fundingAmount),
    };
    wallets.push(newWallet);
  }
return wallets;
}

async function saveWallets(wallets: Wallet[]) {
  if (!fs.existsSync(walletsPath)) {
    console.log("Creating wallets directory");
    fs.mkdirSync(walletsPath);
  }

  for (const wallet of wallets) {
    const completePath = walletsPath + "/" + wallet.address + ".json";
    const encryptedWallet = await wallet.encrypt(walletsPass);
    fs.writeFileSync(completePath, encryptedWallet);
  }
}

async function loadWallets(): Promise<Wallet[]> {
  let numWallets: number = fs.existsSync(walletsPath)
    ? fs.readdirSync(walletsPath).length
    : 0;
  const wallets: Wallet[] = [];
  if (numWallets > 0) {
    const fileNames = await fs.readdirSync(walletsPath);
    let itr = 0;
    while(itr < Math.min(fileNames.length,numTransactions)) {
      const filePath = walletsPath + "/" + fileNames[itr];
      const walletData = fs.readFileSync(filePath) as any;
      wallets.push(await Wallet.fromEncryptedJson(walletData, walletsPass));
      itr++;
    }
  }
  return wallets;
}

async function validateFunding(wallet: Wallet): Promise<boolean>{
    const balance = toNumber(await provider.getBalance(wallet.address));
    return balance >= Number(fundingAmount);
}

async function fundWallets(wallets: Wallet[]){
    for (let i = 0; i < numTransactions; i++) {
        if (!await validateFunding(wallets[i])){
            console.log("-->", i+1, "- Funding wallet:", wallets[i].address);
            const tx = {
            to: wallets[i].address,
            value: ethers.utils.parseEther(fundingAmount),
            };
            const send = await wallet.sendTransaction(tx)
            await send.wait();
        }
      }
}

async function batchTransaction(wallets: Wallet[]){
    // const waits = []
    // for(let itr in wallets){
    //     waits.push(DET.connect(wallets[itr]).transfer(aliceAddr,toFullDigitStr(100), {'gasLimit':2000000}));
    // }
    // Promise.all(waits);
} 

async function main(){
  console.log("-> Number of transactions to perform:", numTransactions);

  console.log("-> Loading existing wallets... This may take some time");

  const wallets: ethers.Wallet[] = await loadWallets();
  const numWallets: number = wallets.length;

  console.log("-> Number of existing wallets:", numWallets);

  const walletsToCreate = numTransactions - numWallets;
  if (walletsToCreate > 0) {
    console.log("-> Creating", walletsToCreate, "wallets");
    const newWallets = await createWallets(walletsToCreate);

    console.log("-> Saving wallets!");
    await saveWallets(newWallets);

    wallets.push(...newWallets);
  }

  wallets.map(w => w.connect(provider));

  console.log("-> Funding wallets...")
  await fundWallets(wallets);

//   console.log("-> Executing batch transactions...")
//   var start = process.hrtime()
//   await batchTransaction(wallets);
//   var end = process.hrtime(start)
//   console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000)
};



main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});