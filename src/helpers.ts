import { BigNumber } from "bignumber.js";
import BN from 'bn.js';

export function toNumber(val: any) {
    return +val / Math.pow(10, 18);
  }

export function toBigNumber(val: number | string, decimals = 18): BigNumber {
    const tokenDigit = new BigNumber('10').exponentiatedBy(decimals);
    const bigNumber = new BigNumber(val).multipliedBy(tokenDigit);
    return bigNumber;
}

export function toFullDigit(val: number | string, decimals = 18): BN {
    return new BN(toBigNumber(val, decimals).toFixed(0));
  }
  
export function toFullDigitStr(val: number | string, decimals = 18): string {
    return toFullDigit(val, decimals).toString();
  }

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  
  
