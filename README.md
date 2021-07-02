# chain-benchmark
The repo contains boiler-plate code for benchmarking a chain. Provided an RPC URL to a chain that supports EVM and a TASK for which to evaluate the chain on. The module generates wallets and executes the provided tasks from all wallets concurrently and waits until all jobs are finished. After benchmarking the wallets generated during the process are saved in `wallets.json` and are re-used on next run.

### How To use
Before running the benchmark script, kindly update `benchmark.ts` with appropriate:
- **PROVIDER RPC URL:** The url of the block chain's rpc on which you wish to deploy.
- **FAUCET PVT KEY:** The faucet responsible for providing any funds for gas or transactions to wallets.
- **TASK:** A function which will be invoked asynchronously with different wallets to benchmark the network. Kindly specify one or more contract calls that you wish to benchmark the network on.
- **PRE_TASK:** This function executes before the TASK and can be used to transfer any funds from faucet to any wallet or do something else. 
- **POST_TASK:** The function executes after the benchmarking task and can be used to see status or state of contracts/users.

```
yarn # to install dependencies

# to start benchmarking script
# here:
#   -t is the number of transactions you wish to execute. it is set to 1 by default. 
#   -f is the amount of eth/edg/native asset to transfer to wallets from Faucet before making transactions. It defaults to 0.001, so make sure your Faucet has enough money to make the transfers.
yarn start -t <number> -f <number>
```

