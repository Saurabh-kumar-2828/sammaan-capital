import type {ActionFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {sendOtp} from "~/backend/authentication.server";
import {getNonEmptyStringFromUnknown, safeParse} from "~/global-common-typescript/utilites/typeValidationUtilities";

export type GenericActionData = {
    error: string | null;
};

export const action: ActionFunction = async ({request, params}) => {
    const body = await request.formData();

    // console.log("Entered >>>>>>>>>>><<<<<<<<<<<<");

    const phoneNumber = safeParse(getNonEmptyStringFromUnknown, body.get("phoneNumber"));
    const name = safeParse(getNonEmptyStringFromUnknown, body.get("name"));

    if (phoneNumber == null || name == null) {
        const actionData: GenericActionData = {
            error: "Inputs can't be null! Error code: ec05b264-8d0c-4450-a34c-c24be937b259",
        };
        return json(actionData);
    }

    const result = await sendOtp(phoneNumber, name);
    if (result instanceof Error) {
        const actionData: GenericActionData = {
            error: "Error while sending otp! Error code:c7547ab4-41ba-472c-b60a-11a9c97c652c",
        };
        return json(actionData);
    }

    const actionData: GenericActionData = {
        error: null,
    };

    return json(actionData);
};
