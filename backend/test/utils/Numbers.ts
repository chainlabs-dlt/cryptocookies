import { BigNumber } from "ethers";
import { ethers } from "hardhat";
var bigdecimal = require("bigdecimal");

export function BN(nb: Number | String) {
    return BigNumber.from(nb.toString());
}

export function BD(nb: Number | BigNumber) {
    return bigdecimal.BigDecimal(nb.toString());
}

export function randomBN(min: BigNumber, max: BigNumber) {
    const random256b = binToDec(Array(256)
        .fill(0)
        .map(() => (Math.random() > 0.5 ? "1" : "0"))
        .join(""));
    const max256b = binToDec(Array(256).fill("1").join(""));

    const randomDec = BD(random256b).divide(
        BD(max256b),
        128,
        bigdecimal.RoundingMode.HALF_EVEN()
    );

    return BN(
        randomDec
            .multiply(BD(max).subtract(BD(min)))
            .add(BD(min))
            .toBigInteger()
            .toString()
    );
}

function binToDec(binStr: String) {
    const lastIndex = binStr.length - 1;
    return Array.from(binStr).reduceRight((total, currValue, index) => (
        (currValue === '1') ? total.add(BN(2).pow(BN(lastIndex - index))) : total
    ), BN(0));
}

export const ETHER = ethers.utils.parseUnits("1", "ether");