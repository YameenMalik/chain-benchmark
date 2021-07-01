import { BigNumber } from "bignumber.js";

export function toNumber(val: any) {
    return +val / Math.pow(10, 18);
  }
  
