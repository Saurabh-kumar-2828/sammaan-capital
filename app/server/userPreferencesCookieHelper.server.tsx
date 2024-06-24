import {getNonEmptyStringFromUnknown, safeParse} from "~/global-common-typescript/utilites/typeValidationUtilities";
import {getUserPreferencesCookie} from "~/server/userPreferencesCookie.server";
import {UserPreferences, getLanguageFromUnknown, getThemeFromUnknown} from "~/typeDefinitions";

export async function getUserPreferencesFromCookies(request: Request): Promise<UserPreferences | Error> {
    const cookie = await getUserPreferencesCookie(request.headers.get("Cookie"));

    const language = safeParse(getNonEmptyStringFromUnknown, cookie.get("language"));
    const theme = safeParse(getNonEmptyStringFromUnknown, cookie.get("theme"));

    return {
        language: getLanguageFromUnknown(language ?? ""),
        theme: getThemeFromUnknown(theme ?? ""),
    };
}
