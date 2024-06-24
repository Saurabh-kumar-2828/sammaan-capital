import type {NonEmptyString} from "~/global-common-typescript/typeDefinitions";

export function safeParse<T>(parse: (input: unknown) => T, input: unknown): T | null {
    try {
        const output = parse(input);
        return output;
    } catch {
        return null;
    }
}

export function getIntegerFromUnknown(input: unknown): number {
    // TODO: Replace with zod
    if (typeof(input) != "string" || input.length == 0) {
        throw new Error(`${input} of type ${typeof(input)} is not a valid Integer!`);
    }

    const int = parseInt(input);

    if (isNaN(int)) {
        throw new Error(`${input} of type ${typeof(input)} is not a valid Integer!`);
    }

    return int;
}

export function getStringFromUnknown(input: unknown): string {
    // TODO: Replace with zod
    if (typeof(input) != "string") {
        throw new Error(`${input} of type ${typeof(input)} is not a valid string!`);
    }

    return input;
}

export function getObjectFromUnknown(input: unknown): any {
    // TODO: Replace with zod
    if (typeof(input) != "string" || input.length == 0) {
        throw new Error(`${input} of type ${typeof(input)} is not a valid JSON!`);
    }

    const obj = JSON.parse(input);

    return obj;
}

export function getErrorFromUnknown(error: unknown): Error {
    if (error instanceof Error) {
        return error;
    }

    return Error(string(error));
}

export function getNonEmptyStringFromUnknown(input: unknown): NonEmptyString {
    // TODO: Replace with zod
    if (typeof(input) != "string" || input.length == 0) {
        throw new Error(`${input} of type ${typeof(input)} is not a valid NonEmptyString!`);
    }

    return input as NonEmptyString;
}