/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { InterfaceIDCalculator } from "../InterfaceIDCalculator";

export class InterfaceIDCalculator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InterfaceIDCalculator> {
    return super.deploy(overrides || {}) as Promise<InterfaceIDCalculator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InterfaceIDCalculator {
    return super.attach(address) as InterfaceIDCalculator;
  }
  connect(signer: Signer): InterfaceIDCalculator__factory {
    return super.connect(signer) as InterfaceIDCalculator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InterfaceIDCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InterfaceIDCalculator;
  }
}

const _abi = [
  {
    inputs: [],
    name: "calDelegatorInterfaceId",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "calcTimeLockInterfaceId",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610102806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80637eedc31c146037578063e9ed2755146051575b600080fd5b603d6057565b60405160489190609f565b60405180910390f35b603d607b565b7f320c9d5d0000000000000000000000000000000000000000000000000000000090565b7fbb4d44360000000000000000000000000000000000000000000000000000000090565b7fffffffff000000000000000000000000000000000000000000000000000000009190911681526020019056fea2646970667358221220219872ce307f7e6da92f5fc36747b8b720c551cf9be47fb76318e4150db2380f64736f6c63430007040033";