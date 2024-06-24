import {getErrorFromUnknown, getObjectFromUnknown, safeParse} from "~/global-common-typescript/utilites/typeValidationUtilities";
import {generateUuid, getUnixTimeInSeconds, getUnixTimeInSecondsFromDate} from "~/global-common-typescript/utilites/utilities";
import {logBackendError} from "~/server/logging.server";

declare global {
    var _activeOtps: {[phoneNumber: string]: {otp: string; issuedAt: number}};
    var _authToken: {token: string; expiryDate: string};
}

export async function sendOtp(phoneNumber: string, name: string) {
    const activeOtps = getActiveOtps();
    const currentTimestamp = getUnixTimeInSeconds();

    const otp = Math.floor(Math.random() * 10 ** 6)
        .toString()
        .padStart(6, "0");
    activeOtps[phoneNumber] = {
        otp: otp,
        issuedAt: currentTimestamp,
    };
    console.log(otp);

    const normalizedPhoneNumber = `+91${phoneNumber}`;

    const authToken = await getAuthToken();
    if (authToken instanceof Error) {
        return authToken;
    }

    const result = await fetch(`${process.env.VALUE_FIRST_API_BASE_URI}/servlet/psms.JsonEservice`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken.token}`,
        },
        body: JSON.stringify({
            "@VER": "1.2",
            USER: {},
            DLR: {"@URL": ""},
            SMS: [
                {
                    "@UDH": "0",
                    "@CODING": "1",
                    "@TEXT": `Dear ${name}\nThanks for your interest in Sammaan Capital. Your OTP is ${otp}.\nPlease submit the OTP and expect a call soon.`,
                    "@PROPERTY": "0",
                    "@ID": generateUuid(),
                    ADDRESS: [
                        {
                            "@FROM": "SMCPTL",
                            "@TO": normalizedPhoneNumber,
                            "@SEQ": "1",
                            "@TAG": "OTP for confirmation",
                        },
                    ],
                },
            ],
        }),
    });

    if (!result.ok) {
        console.log(`Error in sendOtp: ${await result.text()}`);
    }
}


function getActiveOtps() {
    if (global._activeOtps == null) {
        global._activeOtps = {};
    }

    const activeOtps = global._activeOtps;
    const unixEpochInSeconds = getUnixTimeInSeconds();

    for (const phoneNumber of Object.keys(activeOtps)) {
        const otpInformation = activeOtps[phoneNumber];
        if (unixEpochInSeconds - otpInformation.issuedAt >= 3600) {
            delete activeOtps[phoneNumber];
        }
    }

    return activeOtps;
}



export async function verifyOtp(phoneNumber: string, otp: string): Promise<{success: boolean}> {
    const activeOtps = getActiveOtps();

    try {
        if (phoneNumber in activeOtps && activeOtps[phoneNumber].otp == otp) {
            delete activeOtps[phoneNumber];

            return {
                success: true,
            };
        } else {
            return {
                success: false,
            };
        }
    } catch (error_: unknown) {
        const error = getErrorFromUnknown(error_);
        logBackendError(error);
        return {success: false};
    }
}


async function getAuthToken(): Promise<{token: string; expiryDate: string} | Error> {
    const unixEpochInSeconds = getUnixTimeInSeconds();

    if (global._authToken == null) {
        const authToken = await getFreshSalesAuthToken();
        if (authToken instanceof Error) {
            return authToken;
        }
        global._authToken = authToken;
    }

    const tokenExpiryDate = global._authToken.expiryDate;
    const expiryInEpochSeconds = getUnixTimeInSecondsFromDate(tokenExpiryDate);

    if (expiryInEpochSeconds - unixEpochInSeconds <= 3600) {
        const authToken = await getFreshSalesAuthToken();
        if (authToken instanceof Error) {
            return authToken;
        }
        global._authToken = authToken;
    }

    return global._authToken;
}

async function getFreshSalesAuthToken(): Promise<{token: string; expiryDate: string} | Error> {
    try {
        const response = await fetch(`${process.env.VALUE_FIRST_API_BASE_URI}/api/messages/token?action=generate`, {
            method: "POST",
            headers: {
                Authorization: `Basic ${Buffer.from(`${process.env.VALUE_FIRST_USERNAME}:${process.env.VALUE_FIRST_PASSWORD}`, "utf-8").toString("base64")}`,
            },
        });

        const responseText = safeParse(getObjectFromUnknown, await response.text());

        if (!response.ok) {
            throw new Error(`Value First API call failed - status = ${response.status}, body = ${JSON.stringify(responseText)}`);
        }

        return responseText;
    } catch (error_: unknown) {
        const error = getErrorFromUnknown(error_);
        logBackendError(error);
        return error;
    }
}
