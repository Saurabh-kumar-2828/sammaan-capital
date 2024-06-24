import type {ActionFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {verifyOtp} from "~/backend/authentication.server";
import {getNonEmptyStringFromUnknown, safeParse} from "~/global-common-typescript/utilites/typeValidationUtilities";

export type GenericActionData = {
    error: string | null;
    isInvalidOtp?: boolean;
};

export const action: ActionFunction = async ({request, params}) => {
    // console.log("Verifying otp>>>>>>>>>>>>");

    const body = await request.formData();

    const phoneNumber = safeParse(getNonEmptyStringFromUnknown, body.get("phoneNumber"));
    const otp = safeParse(getNonEmptyStringFromUnknown, body.get("otp"));

    if (phoneNumber == null || otp == null) {
        const actionData: GenericActionData = {
            error: "Inputs can't be null! Error code: edd16dac-2a67-44d1-b6b6-dcf03bd40320",
        };
        return json(actionData);
    }

    const otpVerificationResult = await verifyOtp(phoneNumber, otp);

    if (!otpVerificationResult.success) {
        const actionData: GenericActionData = {
            error: "Please enter valid otp! Error code: c07a58df-5019-4f01-8edf-6f75d62b644c",
            isInvalidOtp: true,
        };
        return json(actionData);
    }
    const actionData: GenericActionData = {
        error: null,
        isInvalidOtp: false
    };
    // console.log("otp verified");

    return json(actionData);
};
