/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITokenVesting } from "../ITokenVesting";

export class ITokenVesting__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenVesting {
    return new Contract(address, _abi, signerOrProvider) as ITokenVesting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
    ],
    name: "balanceUnlocked",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
    ],
    name: "claimReleasedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getTotalUnclaimedBalance",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
    ],
    name: "getUnclaimedBalanceFromProvider",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
    ],
    name: "getVestingStatus",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "hasReleasedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "revokeVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "_amount",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "_revocable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_fixedInterval",
        type: "bool",
      },
    ],
    name: "vestTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
