import type {BlurHash, Iso8601DateTime, Uuid} from "../common--type-definitions/typeDefinitions";

export type ImageDetails = {
    width: number;
    height: number;
    blurHash?: BlurHash;
    altText?: string;
    title?: string;
    variants: Array<{
        width: number;
        height: number;
        // format?: string;
        extension?: string;
        url: string;
    }>;
};

export type Media = {
    id: Uuid;
    type: Uuid;
    role: Uuid;
    data: ImageDetails;
    createdAt: Iso8601DateTime;
    updatedAt: Iso8601DateTime;
    name: string;
};
export type ImageProvider = {
    data: Array<Media>
    getIdFromName: (name: string) => Uuid;
    getUrlFromId: (id: Uuid) => string;
    getAltTextFromId: (id: Uuid) => string;
    getTitleFromId: (id: Uuid) => string;
};