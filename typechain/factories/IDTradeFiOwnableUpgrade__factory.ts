/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDTradeFiOwnableUpgrade } from "../IDTradeFiOwnableUpgrade";

export class IDTradeFiOwnableUpgrade__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDTradeFiOwnableUpgrade {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDTradeFiOwnableUpgrade;
  }
}

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
