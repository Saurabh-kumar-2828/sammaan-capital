import type {ActionFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {getObjectFromUnknown, safeParse} from "~/global-common-typescript/utilites/typeValidationUtilities";

export type GenericActionData = {
    error: string | null;
};

export const action: ActionFunction = async ({request, params}) => {
    const body = await request.formData();

    const formData = safeParse(getObjectFromUnknown, body.get("formData"));

    if (formData == null) {
        const actionData: GenericActionData = {
            error: "Error in submitting form! Error code: 2135e1c6-a807-4c07-9249-d268677273c2",
        };
        return json(actionData);
    }
    // console.log("formData>>>>", formData);

    const phoneNo = formData.phoneNo;
    const name = formData.name;
    const reason = formData.reason;
    const email = formData.email;
    const pincode = formData.pincode;
    const category = formData.Category;
    // const termsAndConditionsChecked = formData.termsAndConditionsChecked;

    // console.log("entered ???????>>>>>>>>>>>>><<<<<<<<", phoneNo, name, reason, email, pincode, category);

    if (phoneNo == null || name == null || reason == null || email ==null || pincode == null || category == null ) {
        const actionData: GenericActionData = {
            error: "Error in submitting form! Error code: 2135e1c6-a807-4c07-9249-d268677273c2",
        };
        return json(actionData);
    }

    const actionData: GenericActionData = {
        error: null,
    };

    return json(actionData);
};
