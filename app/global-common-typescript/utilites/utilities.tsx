import {v4 as uuidv4} from "uuid";
import type {Uuid} from "~/typeDefinitions";

export function concatenateNonNullStringsWithSpaces(...strs: Array<string | null | undefined>) {
    // TODO: Do this properly
    // TODO: Ensure this handles undefined
    return strs.join(" ");
}

export function getIntegerArrayOfLength(n: number) {
    return Array(n)
        .fill(null)
        .map((_, i) => i);
}

export function getUnixTimeInSeconds(): number {
    return Math.trunc(Date.now() / 1000);
}

export function getUnixTimeInSecondsFromDate(date: string): number {
    return Math.trunc(new Date(date).getMilliseconds() / 1000);
}

export function generateUuid(): Uuid {
    return uuidv4() as Uuid;
}