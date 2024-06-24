import {create} from "@storybook/theming/create";
import React, {createContext} from "react";

const primary100Light = "#051c2a";
const primary100Dark = "#051c2a";

const primary300Light = "#1f40cb";
const primary300Dark = "#1f40cb";

const primary500Light = "#00a2ed";
const primary500Dark = "#00a2ed";

const background500Light = "#ecf0ff";
const background500Dark = "#17171a";

const foreground100Light = "#fcfcfc";
const foreground100Dark = "#202329";

const foreground300Light = "#b2b4b9";
const foreground300Dark = "#484a50";

const foreground500Light = "#7c7e83";
const foreground500Dark = "#7c7e83";

const foreground700Light = "#484a50";
const foreground700Dark = "#b2b4b9";

const foreground900Light = "#202329";
const foreground900Dark = "#fcfcfc";

const shopify100 = "#004d40";
const shopify300 = "#5e8e3e";
const shopify5100 = "#94be46";
const shopify700 = "#d6ebe6";
const shopify900 = "#5d6bd4";

export const darkTheme = create({
    // base: "light",
    base: "dark",

    // fontBase: "Poppins",

    // Typography
    // fontBase: "Poppins",
    // fontCode: "monospace",

    // brandTitle: "Growth Jockey Component Library",
    // // brandUrl: "https://www.growthjockey.com",
    // // brandImage: "https://www.growthjockey.com/favicon.ico",
    // // brandTarget: "_self",

    // //
    // colorPrimary: primary300Light,
    // colorSecondary: primary300Light,

    // // UI
    // appBg: background500Dark,
    // appContentBg: background500Dark,
    // appBorderColor: foreground900Dark,
    // appBorderRadius: 4,

    // // Text colors
    // textColor: foreground900Dark,
    // textInverseColor: foreground900Light,

    // // Toolbar default and active colors
    // barTextColor: foreground900Dark,
    // barSelectedColor: foreground500Dark,
    // barBg: background500Dark,

    // // Form colors
    // inputBg: background500Dark,
    // inputBorder: foreground900Dark,
    // inputTextColor: foreground900Dark,
    // inputBorderRadius: 2,
});

export enum Theme {
    Dark = "dark",
    Light = "light",
}

export type UserPreferences = {
    // language: Language;
    theme: Theme;
};

export const UserPreferencesContext = createContext<UserPreferences>({
    // language: Language.English,
    theme: Theme.Dark,
});

export function CustomThemeProvider({theme, children}: {theme: string, children: React.ReactNode}) {
    const theme_ = theme == "dark" ? Theme.Dark : Theme.Light;

    return (
        <UserPreferencesContext.Provider value={{theme: theme_}}>
            <div className={theme_ == Theme.Dark ? "tw" : undefined}>{children}</div>
        </UserPreferencesContext.Provider>
    );
}
