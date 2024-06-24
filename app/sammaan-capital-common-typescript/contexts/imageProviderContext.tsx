import {createContext} from "react";
import type {ImageProvider} from "~/sammaan-capital-common-typescript/typeDefinitions";

export const ImageProviderContext = createContext<ImageProvider>({
    data: [],
    getIdFromName: (name) => "",
    getUrlFromId: (id) => "",
    getAltTextFromId: (id) => "",
    getTitleFromId: (id) => ""
});
