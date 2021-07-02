import { ethers, Wallet } from "ethers";
import { toNumber,delay } from './helpers'; 
import * as fs from "fs";
import { TASK, PRE_TASK, POST_TASK, PROVIDER, FAUCET } from './benchmark';
import { sys } from "typescript";
const yargs = require('yargs');

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
    fundingAmount: {
        alias: 'f',
        demandOption: false,
        description: 'funding amount to be sent to users'
      }
}).argv;

const numTransactions:number = argv.transactions? Number(argv.transactions): 1; 
const fundingAmount: string = argv.funding? argv.funding: "0.001";
const walletsPath = `${__dirname}/wallets.json`;

async function createWallets(numWallets: number): Promise<ethers.Wallet[]> {
  const wallets: Wallet[] = [];
  for (let i = 0; i < numWallets; i++) {
    const newWallet = Wallet.createRandom();
    const tx = {
      to: newWallet.address,
      value: ethers.utils.parseEther(fundingAmount),
    };
    wallets.push(await newWallet.connect(PROVIDER));
  }
return wallets;
}

async function saveWallets(wallets: Wallet[]) {

  const keys = await wallets.map(w => {
    return w.privateKey;
  });
  fs.writeFileSync(walletsPath, JSON.stringify(keys))
}

async function loadWallets(): Promise<Wallet[]> {
  let walletPvtKeys = [];

  if(fs.existsSync(walletsPath)){
    try{
      walletPvtKeys = JSON.parse(fs.readFileSync(walletsPath) as any)
    } catch (e) {
      console.log("Error:", e);
      sys.exit()
    }
  }

  if (walletPvtKeys.length == 0) {
    return [];
  }
  
  const wallets: Wallet[] = await walletPvtKeys.map(key => {
    return new Wallet(key, PROVIDER);
  })

  return wallets.splice(0, Math.min(wallets.length, numTransactions));
}

async function validateFunding(wallet: Wallet): Promise<boolean>{
    const balance = toNumber(await PROVIDER.getBalance(wallet.address));
    return balance >= Number(fundingAmount);
}

async function fundWallets(wallets: Wallet[]){
    for (let i = 0; i < numTransactions; i++) {
      const _wallet = wallets[i];

      if (await validateFunding(_wallet)) {
        continue;
      }

      console.log("-->", i+1, "- Funding wallet:", _wallet.address);
      const tx = {
        to: _wallet.address,
        value: ethers.utils.parseEther(fundingAmount),
        };
      const send = await FAUCET.sendTransaction(tx)
      await send.wait();
    }
}

async function batchTransaction(wallets: Wallet[]){
    const waits = []
    for(let itr in wallets){
        waits.push(TASK(wallets[itr]));
    }
    await Promise.all(waits);
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
    wallets.push(...newWallets);
    
    console.log("-> Saving wallets!");
    await saveWallets(wallets);
  }
  
  console.log("-> Funding wallets...");

  await fundWallets(wallets);

  console.log("-> Performing Pre-Tasks...");
  
  await PRE_TASK(wallets);
  
  console.log("-> Executing batch transactions...")

  // start time
  var start = process.hrtime()

  // call task in batch
  await batchTransaction(wallets);

  // stop time
  var end = process.hrtime(start)

  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000)

  console.log("-> Performing Post-Tasks...");

  await delay(1000) 
  await POST_TASK();
};


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});
