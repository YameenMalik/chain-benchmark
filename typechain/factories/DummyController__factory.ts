/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DummyController } from "../DummyController";

export class DummyController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DummyController> {
    return super.deploy(overrides || {}) as Promise<DummyController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyController {
    return super.attach(address) as DummyController;
  }
  connect(signer: Signer): DummyController__factory {
    return super.connect(signer) as DummyController__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyController {
    return new Contract(address, _abi, signerOrProvider) as DummyController;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proxyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeUsingSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106fd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635018a4d61461004657806399a88ec414610216578063da92d3ae14610253575b600080fd5b6101956004803603608081101561005c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561009957600080fd5b8201836020820111156100ab57600080fd5b803590602001918460018302840111640100000000831117156100cd57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561012057600080fd5b82018360208201111561013257600080fd5b8035906020019184600183028401116401000000008311171561015457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610286945050505050565b60405180831515815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101da5781810151838201526020016101c2565b50505050905090810190601f1680156102075780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6102516004803603604081101561022c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610480565b005b6102516004803603602081101561026957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661050e565b600060608084805190602001208460405160200180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260040182805190602001908083835b6020831061030957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016102cc565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529050600060608873ffffffffffffffffffffffffffffffffffffffff1688846040518082805190602001908083835b602083106103aa57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161036d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461040c576040519150601f19603f3d011682016040523d82523d6000602084013e610411565b606091505b509092509050600182151514610472576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806106876041913960600191505060405180910390fd5b909890975095505050505050565b604080517f3659cfe600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015291518492831691633659cfe691602480830192600092919082900301818387803b1580156104f157600080fd5b505af1158015610505573d6000803e3d6000fd5b50505050505050565b8073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561055457600080fd5b505afa158015610568573d6000803e3d6000fd5b505050506040513d602081101561057e57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff163014156105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806106526035913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663bc5920ba6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561063657600080fd5b505af115801561064a573d6000803e3d6000fd5b505050505056fe436f6e74726f6c6c65723a3a636c61696d4f776e6572736869703a206f776e65727368697020616c726561647920636c61696d6564436f6e74726f6c6c65723a3a757067726164655573696e675369676e61747572653a20636f6e747261637420636f756c64206e6f74206265207570677261646564a26469706673582212200da476b734a079b248b20177e72309d6f1b3aa4c1eca6c4b2553f0337ac49cab64736f6c63430007040033";
