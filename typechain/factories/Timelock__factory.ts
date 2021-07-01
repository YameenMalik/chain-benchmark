/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Timelock } from "../Timelock";

export class Timelock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "candidate",
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
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506122c9806100206000396000f3fe60806040526004361061010e5760003560e01c80637d645fab116100a5578063c1a287e211610074578063e177246e11610059578063e177246e14610755578063f2b065371461077f578063fe4b84df146107a95761010e565b8063c1a287e214610700578063da92d3ae146107155761010e565b80637d645fab146106ac5780638da5cb5b146106c1578063b1b43ae5146106d6578063bc5920ba146106eb5761010e565b8063591fcdfe116100e1578063591fcdfe146104e65780636a42b8f8146106445780636c8381f814610659578063715018a6146106975761010e565b806301ffc9a7146101105780630825f38f1461017057806313af4035146103365780633a66f90114610376575b005b34801561011c57600080fd5b5061015c6004803603602081101561013357600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166107d3565b604080519115158252519081900360200190f35b6102c1600480360360a081101561018657600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135918101906060810160408201356401000000008111156101c357600080fd5b8201836020820111156101d557600080fd5b803590602001918460018302840111640100000000831117156101f757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561024a57600080fd5b82018360208201111561025c57600080fd5b8035906020019184600183028401116401000000008311171561027e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061080a915050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102fb5781810151838201526020016102e3565b50505050905090810190601f1680156103285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561034257600080fd5b5061010e6004803603602081101561035957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610db7565b34801561038257600080fd5b506104d4600480360360a081101561039957600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135918101906060810160408201356401000000008111156103d657600080fd5b8201836020820111156103e857600080fd5b8035906020019184600183028401116401000000008311171561040a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561045d57600080fd5b82018360208201111561046f57600080fd5b8035906020019184600183028401116401000000008311171561049157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610f65915050565b60408051918252519081900360200190f35b3480156104f257600080fd5b5061010e600480360360a081101561050957600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561054657600080fd5b82018360208201111561055857600080fd5b8035906020019184600183028401116401000000008311171561057a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156105cd57600080fd5b8201836020820111156105df57600080fd5b8035906020019184600183028401116401000000008311171561060157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061129a915050565b34801561065057600080fd5b506104d4611579565b34801561066557600080fd5b5061066e61157f565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156106a357600080fd5b5061010e61159b565b3480156106b857600080fd5b506104d4611677565b3480156106cd57600080fd5b5061066e61167e565b3480156106e257600080fd5b506104d461169a565b3480156106f757600080fd5b5061010e6116a1565b34801561070c57600080fd5b506104d46117ee565b34801561072157600080fd5b5061010e6004803603602081101561073857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166117f5565b34801561076157600080fd5b5061010e6004803603602081101561077857600080fd5b503561191e565b34801561078b57600080fd5b5061015c600480360360208110156107a257600080fd5b5035611a36565b3480156107b557600080fd5b5061010e600480360360208110156107cc57600080fd5b5035611a4b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526033602052604090205460ff1690565b6060610814611c08565b60665473ffffffffffffffffffffffffffffffffffffffff90811691161461086d5760405162461bcd60e51b815260040180806020018281038252602f81526020018061215d602f913960400191505060405180910390fd5b60008686868686604051602001808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156108e05781810151838201526020016108c8565b50505050905090810190601f16801561090d5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610940578181015183820152602001610928565b50505050905090810190601f16801561096d5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600081815260cd90935291205490995060ff1697506109fc96505050505050505760405162461bcd60e51b815260040180806020018281038252603d8152602001806120e6603d913960400191505060405180910390fd5b82610a05611c0c565b1015610a425760405162461bcd60e51b8152600401808060200182810382526045815260200180611fe36045913960600191505060405180910390fd5b610a4f8362127500611c10565b610a57611c0c565b1115610a945760405162461bcd60e51b8152600401808060200182810382526033815260200180611fb06033913960400191505060405180910390fd5b600081815260cd60205260409020805460ff191690558451606090610aba575083610b70565b85805190602001208560405160200180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260040182805190602001908083835b60208310610b3857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610afb565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b600060608973ffffffffffffffffffffffffffffffffffffffff1689846040518082805190602001908083835b60208310610bda57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610b9d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610c3c576040519150601f19603f3d011682016040523d82523d6000602084013e610c41565b606091505b509150915081610c825760405162461bcd60e51b815260040180806020018281038252603d81526020018061218c603d913960400191505060405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610d0c578181015183820152602001610cf4565b50505050905090810190601f168015610d395780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610d6c578181015183820152602001610d54565b50505050905090810190601f168015610d995780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39998505050505050505050565b610dbf611c08565b60665473ffffffffffffffffffffffffffffffffffffffff908116911614610e185760405162461bcd60e51b815260040180806020018281038252602f81526020018061215d602f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610e6a5760405162461bcd60e51b815260040180806020018281038252602481526020018061205c6024913960400191505060405180910390fd5b60665473ffffffffffffffffffffffffffffffffffffffff82811691161415610ec45760405162461bcd60e51b81526004018080602001828103825260288152602001806122436028913960400191505060405180910390fd5b60675473ffffffffffffffffffffffffffffffffffffffff82811691161415610f1e5760405162461bcd60e51b815260040180806020018281038252602981526020018061226b6029913960400191505060405180910390fd5b606780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610f6f611c08565b60665473ffffffffffffffffffffffffffffffffffffffff908116911614610fc85760405162461bcd60e51b815260040180806020018281038252602f81526020018061215d602f913960400191505060405180910390fd5b610fdc60cc54610fd6611c0c565b90611c10565b82101561101a5760405162461bcd60e51b81526004018080602001828103825260498152602001806121c96049913960600191505060405180910390fd5b60008686868686604051602001808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561108d578181015183820152602001611075565b50505050905090810190601f1680156110ba5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156110ed5781810151838201526020016110d5565b50505050905090810190601f16801561111a5780820380516001836020036101000a031916815260200191505b50975050505050505050604051602081830303815290604052805190602001209050600160cd600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508673ffffffffffffffffffffffffffffffffffffffff16817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f88888888604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156111f25781810151838201526020016111da565b50505050905090810190601f16801561121f5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561125257818101518382015260200161123a565b50505050905090810190601f16801561127f5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39695505050505050565b6112a2611c08565b60665473ffffffffffffffffffffffffffffffffffffffff9081169116146112fb5760405162461bcd60e51b815260040180806020018281038252602f81526020018061215d602f913960400191505060405180910390fd5b60008585858585604051602001808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561136e578181015183820152602001611356565b50505050905090810190601f16801561139b5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156113ce5781810151838201526020016113b6565b50505050905090810190601f1680156113fb5780820380516001836020036101000a031916815260200191505b50975050505050505050604051602081830303815290604052805190602001209050600060cd600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff16817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156114d35781810151838201526020016114bb565b50505050905090810190601f1680156115005780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561153357818101518382015260200161151b565b50505050905090810190601f1680156115605780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a3505050505050565b60cc5481565b60675473ffffffffffffffffffffffffffffffffffffffff1690565b6115a3611c08565b60665473ffffffffffffffffffffffffffffffffffffffff9081169116146115fc5760405162461bcd60e51b815260040180806020018281038252602f81526020018061215d602f913960400191505060405180910390fd5b60665460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3606680547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116909155606780549091169055565b62278d0081565b60665473ffffffffffffffffffffffffffffffffffffffff1690565b6202a30081565b60675473ffffffffffffffffffffffffffffffffffffffff166116f55760405162461bcd60e51b81526004018080602001828103825260318152602001806122126031913960400191505060405180910390fd5b6116fd611c08565b60675473ffffffffffffffffffffffffffffffffffffffff9081169116146117565760405162461bcd60e51b8152600401808060200182810382526029815260200180611f506029913960400191505060405180910390fd5b60675460665460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360678054606680547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b6212750081565b8073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561183b57600080fd5b505afa15801561184f573d6000803e3d6000fd5b505050506040513d602081101561186557600080fd5b505173ffffffffffffffffffffffffffffffffffffffff163014156118bb5760405162461bcd60e51b815260040180806020018281038252603a815260200180612123603a913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663bc5920ba6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561190357600080fd5b505af1158015611917573d6000803e3d6000fd5b5050505050565b611926611c08565b60665473ffffffffffffffffffffffffffffffffffffffff90811691161461197f5760405162461bcd60e51b815260040180806020018281038252602f81526020018061215d602f913960400191505060405180910390fd5b6202a3008110156119c15760405162461bcd60e51b81526004018080602001828103825260348152602001806120286034913960400191505060405180910390fd5b62278d00811115611a035760405162461bcd60e51b81526004018080602001828103825260388152602001806120806038913960400191505060405180910390fd5b60cc81905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b60cd6020526000908152604090205460ff1681565b600054610100900460ff1680611a645750611a64611c71565b80611a72575060005460ff16155b611aad5760405162461bcd60e51b815260040180806020018281038252602e8152602001806120b8602e913960400191505060405180910390fd5b600054610100900460ff16158015611ad8576000805460ff1961ff0019909116610100171660011790555b6202a300821015611b1a5760405162461bcd60e51b8152600401808060200182810382526037815260200180611f796037913960400191505060405180910390fd5b62278d00821115611b5c5760405162461bcd60e51b81526004018080602001828103825260388152602001806120806038913960400191505060405180910390fd5b611b64611c82565b7f320c9d5d0000000000000000000000000000000000000000000000000000000060005260336020527f4dde7aba240b92bfeb02406fb1591162717feaa2d08ee938055fb1560e8691b6805460ff1916600117905560cc829055611bc6611cd9565b60cc546040517f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a28015611c04576000805461ff00191690555b5050565b3390565b4290565b600082820183811015611c6a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000611c7c30611d8b565b15905090565b7f01ffc9a70000000000000000000000000000000000000000000000000000000060005260336020527f7ed16111154445b49c63a7b32817e3d96173348b5b40bc88bf9e7c0881bf91c9805460ff19166001179055565b600054610100900460ff1680611cf25750611cf2611c71565b80611d00575060005460ff16155b611d3b5760405162461bcd60e51b815260040180806020018281038252602e8152602001806120b8602e913960400191505060405180910390fd5b600054610100900460ff16158015611d66576000805460ff1961ff0019909116610100171660011790555b611d6e611d91565b611d76611e31565b8015611d88576000805461ff00191690555b50565b3b151590565b600054610100900460ff1680611daa5750611daa611c71565b80611db8575060005460ff16155b611df35760405162461bcd60e51b815260040180806020018281038252602e8152602001806120b8602e913960400191505060405180910390fd5b600054610100900460ff16158015611d76576000805460ff1961ff0019909116610100171660011790558015611d88576000805461ff001916905550565b600054610100900460ff1680611e4a5750611e4a611c71565b80611e58575060005460ff16155b611e935760405162461bcd60e51b815260040180806020018281038252602e8152602001806120b8602e913960400191505060405180910390fd5b600054610100900460ff16158015611ebe576000805460ff1961ff0019909116610100171660011790555b6000611ec8611c08565b606680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015611d88576000805461ff00191690555056fe44547261646546694f776e61626c65557067726164653a206e6f7420746865206e6577206f776e657254696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206973207374616c652e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774207375727061737365642074696d65206c6f636b2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e44547261646546694f776e61626c65557067726164653a207a65726f206164647265737354696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774206265656e207175657565642e4454726164652054696d656c6f636b3a3a636c61696d4f776e6572736869703a206f776e65727368697020616c726561647920636c61696d656444547261646546694f776e61626c65557067726164653a2063616c6c6572206973206e6f7420746865206f776e657254696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e20657865637574696f6e2072657665727465642e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d75737420736174697366792064656c61792e44547261646546694f776e61626c65557067726164653a2063616e646964617465206973207a65726f206164647265737344547261646546694f776e61626c65557067726164653a2073616d65206173206f726967696e616c44547261646546694f776e61626c65557067726164653a2073616d652061732063616e646964617465a26469706673582212204347b0bf763591da6d7c77a344d1a57a334247eb55077061c52860a0c679a0f264736f6c63430007040033";