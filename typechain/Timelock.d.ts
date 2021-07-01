/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TimelockInterface extends ethers.utils.Interface {
  functions: {
    "GRACE_PERIOD()": FunctionFragment;
    "MAXIMUM_DELAY()": FunctionFragment;
    "MINIMUM_DELAY()": FunctionFragment;
    "cancelTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "candidate()": FunctionFragment;
    "claimOwnership(address)": FunctionFragment;
    "delay()": FunctionFragment;
    "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "initialize(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "queuedTransactions(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDelay(uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateOwner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;

  events: {
    "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
    "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
    "NewDelay(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDelay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
}

export class Timelock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TimelockInterface;

  functions: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MAXIMUM_DELAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MINIMUM_DELAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    claimOwnership(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership(address)"(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    "delay()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(uint256)"(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDelay(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setDelay(uint256)"(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateOwner()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  "MAXIMUM_DELAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  "MINIMUM_DELAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  cancelTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelTransaction(address,uint256,string,bytes,uint256)"(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  claimOwnership(
    _contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership(address)"(
    _contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  "delay()"(overrides?: CallOverrides): Promise<BigNumber>;

  executeTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeTransaction(address,uint256,string,bytes,uint256)"(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(uint256)"(
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  queueTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "queueTransaction(address,uint256,string,bytes,uint256)"(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queuedTransactions(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "queuedTransactions(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDelay(
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setDelay(uint256)"(
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateOwner()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    "MAXIMUM_DELAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_DELAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    claimOwnership(
      _contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "claimOwnership(address)"(
      _contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    "delay()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "initialize(uint256)"(
      delay_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setDelay(delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setDelay(uint256)"(
      delay_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    "updateOwner()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    CancelTransaction(
      txHash: BytesLike | null,
      target: string | null,
      value: null,
      signature: null,
      data: null,
      eta: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, BigNumber],
      {
        txHash: string;
        target: string;
        value: BigNumber;
        signature: string;
        data: string;
        eta: BigNumber;
      }
    >;

    ExecuteTransaction(
      txHash: BytesLike | null,
      target: string | null,
      value: null,
      signature: null,
      data: null,
      eta: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, BigNumber],
      {
        txHash: string;
        target: string;
        value: BigNumber;
        signature: string;
        data: string;
        eta: BigNumber;
      }
    >;

    NewDelay(
      newDelay: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { newDelay: BigNumber }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    QueueTransaction(
      txHash: BytesLike | null,
      target: string | null,
      value: null,
      signature: null,
      data: null,
      eta: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, BigNumber],
      {
        txHash: string;
        target: string;
        value: BigNumber;
        signature: string;
        data: string;
        eta: BigNumber;
      }
    >;
  };

  estimateGas: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    "MAXIMUM_DELAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_DELAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimOwnership(address)"(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    "delay()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(uint256)"(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDelay(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setDelay(uint256)"(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateOwner()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MAXIMUM_DELAY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MINIMUM_DELAY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership(address)"(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "delay()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(uint256)"(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDelay(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setDelay(uint256)"(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateOwner()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}