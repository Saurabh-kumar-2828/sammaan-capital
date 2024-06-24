
export enum Language {
    English = "en-in",
    Hindi = "hi-in",
}
export enum CardType {
    TwoLinerCard = "twoLinerCard",
    TwoLinerCardWithNumber = "twoLinerCardWithNumber",
    OneLinerCardWithChevron = "OneLinerCardWithChevron",
}

export enum Ids {
    StepsToTakeHomeLoan = "dec1ecc4-7f1b-4fd0-ad9b-ec4813ad0cb5",
    HappyHomeStories = 'e3697c29-6bd9-487c-bc09-8f5ff95c1d48',
    ResourceCenter = '0875ac0b-ee9f-4cbf-85dc-05ffbb90404a',
    DiscoverBlogs = 'f5106bbb-9ce1-428c-9b42-c4c3b9639f40',
    NewsCorner = 'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
    Faqs = '58f3cae9-f314-4099-9474-ffd22ac28516',
    CustomerPortalHeading = 'd2ec9d6a-52af-4122-8b1e-ed28e881de61',
    CustomerPortalSubheading = '0af6ea53-d4f8-41cd-8a78-581137bc84fa',
    CustomerPortalCards = '3d1e7a59-d1cc-4725-b17a-f8cdf550f702',
}

export type Uuid = string & {__brand: "Uuid"};

export type Faqs = Array<{question: string; answer: string}>
export type Reviews = Array<{video: string; name: string; rating: string; location: string; description: string}>;
export type News = Array<{image: string; title: string; text: string; date: string}>;
export type Projects = Array<{location: string; imageUrl: string; projectName: string; address: string}>;

export type ContentProvider = {
    getContent: (id: string) => string;
};
export type UserPreferences = {
    language: Language;
    theme: Theme;
};

export type StatesAndCities ={[state: string]: Array<string>};

export enum Theme {
    Dark = "dark",
    Light = "light",
}

export function languageToHumanFriendlyString(language: Language) {
    switch (language) {
        case Language.English:
            return "English";
        case Language.Hindi:
            return "हिंदी";
        default:
            // const exhaustiveCheck: never = language;
            throw new Error(`Unexpected value for Language: ${language}`);
    }
}

export function languageToShortHumanFriendlyFormat(language: Language) {
    switch (language) {
        case Language.English:
            return "EN";
        case Language.Hindi:
            return "हि";
        default:
            // const exhaustiveCheck: never = language;
            throw new Error(`Unexpected value for Language: ${language}`);
    }
}


export function themeToHumanFriendlyString(userPreferences: UserPreferences, theme: Theme | null) {
    switch (userPreferences.language) {
        case Language.English:
            switch (theme) {
                case Theme.Dark:
                    return "Dark Theme";
                case Theme.Light:
                    return "Light Theme";
                case null:
                    return "System Theme";
                default:
                    // const exhaustiveCheck: never = theme;
                    throw new Error(`Unexpected value for Theme: ${theme}`);
            }
        case Language.Hindi:
            switch (theme) {
                case Theme.Dark:
                    return "Dark Theme";
                case Theme.Light:
                    return "Light Theme";
                case null:
                    return "System Theme";
                default:
                    // const exhaustiveCheck: never = theme;
                    throw new Error(`Unexpected value for Theme: ${theme}`);
            }
        default:
            // const exhaustiveCheck: never = theme;
            throw new Error(`Unexpected value for Theme: ${theme}`);
    }
}

export function getLanguageFromUnknown(input: unknown): Language {
    // TODO: Replace with zod
    if (typeof input != "string") {
        throw new Error(`${input} of type ${typeof input} is not a valid Language!`);
    }

    // return input == Language.Hindi ? Language.Hindi : input == Language.Marathi ? Language.Marathi : Language.English;
    return input == Language.Hindi ? Language.Hindi : Language.English;
}

export function getThemeFromUnknown(input: unknown): Theme {
    // TODO: Replace with zod
    if (typeof input != "string") {
        throw new Error(`${input} of type ${typeof input} is not a valid Theme!`);
    }

    return input == Theme.Dark ? Theme.Dark : Theme.Light;
}