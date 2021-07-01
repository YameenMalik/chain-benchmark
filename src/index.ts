import { ethers, Wallet } from "ethers";
import { toNumber } from './helpers'; 
import * as fs from "fs";
import { TASK } from './benchmark';
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
    fundingAmount: {
        alias: 'f',
        demandOption: false,
        description: 'funding amount to be sent to users'
      },
    rpcUrl: {
        alias: 'u',
        demandOption: false,
        description: 'RPC URL for the provider'
      },
      walletsPass: {
        alias: 'p',
        demandOption: false,
        description: 'Password to encrypt wallet'
      },
    gasFaucet:{
      alias: 'g',
      demandOption: false,
      description: 'private key of the faucet responsible for providing eth/edg/aUSD for paying gas fee amount to wallets'
    }
    
}).argv;

const numTransactions:number = argv.transactions? Number(argv.transactions): 1; 
const fundingAmount: string = argv.funding? argv.funding: "0.0001";
const rpcUrl:string = argv.rpcUrl? argv.rpcUrl: "http://127.0.0.1:9000"; 
const walletsPass:string = argv.walletsPass? argv.walletsPass: "Hello-Hello-Khaalo-Jello"; 
const faucetKey:string = argv.gasFaucet? argv.gasFaucet:"31eaf7d2584b37409065bb99ec421197bb3ffc90cd900536726a0d6a15f91d80"; 

const walletsPath = `${__dirname}/wallets`;


const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const walletFaucet = new Wallet(faucetKey, provider);


async function createWallets(numWallets: number): Promise<ethers.Wallet[]> {
  const wallets: Wallet[] = [];
  for (let i = 0; i < numWallets; i++) {
    const newWallet = Wallet.createRandom();
    const tx = {
      to: newWallet.address,
      value: ethers.utils.parseEther(fundingAmount),
    };
    wallets.push(await newWallet.connect(provider));
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

async function initWalletFromFile(walletPath:string): Promise<Wallet>{
  const walletData = fs.readFileSync(walletPath) as any;
  let wallet = await Wallet.fromEncryptedJson(walletData, walletsPass);
  wallet = await wallet.connect(provider);
  return wallet;
}

async function loadWallets(): Promise<Wallet[]> {
  let numWallets: number = fs.existsSync(walletsPath)
    ? fs.readdirSync(walletsPath).length
    : 0;
  const wait = [];
  if (numWallets > 0) {
    const fileNames = await fs.readdirSync(walletsPath);
    let itr = 0;
    while(itr < Math.min(fileNames.length,numTransactions)) {
      const filePath = walletsPath + "/" + fileNames[itr];
      wait.push(initWalletFromFile(filePath));
      itr++;
    }
  }
  const wallets: Wallet[] = await Promise.all(wait);
  return wallets;
}

async function validateFunding(wallet: Wallet): Promise<boolean>{
    const balance = toNumber(await provider.getBalance(wallet.address));
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
      const send = await walletFaucet.sendTransaction(tx)
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

    console.log("-> Saving wallets!");
    await saveWallets(newWallets);

    wallets.push(...newWallets);
  }
  
  console.log("-> Funding wallets...")
  await fundWallets(wallets);

  console.log("-> Executing batch transactions...")
  // start time
  var start = process.hrtime()

  // call task in batch
  await batchTransaction(wallets);

  // stop time
  var end = process.hrtime(start)

  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000)
};



main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});