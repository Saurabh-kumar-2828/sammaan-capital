import type {Media} from "~/sammaan-capital-common-typescript/typeDefinitions";
import type {Uuid} from "~/common--type-definitions/typeDefinitions";

export function getId(imageContent: Array<Media>) {
    return (name: string) => {
        const checkName = imageContent.map(item => item.name);
        if (!checkName.includes(name)) {
            console.log(`"${name}",`);
        }
        return imageContent
            .filter(item => item.name === name)
            .map(item => item.id)[0];
    };
}

export function getAltText(imageContent: Array<Media>) {
    return (id: Uuid) => {
        const checkIds = imageContent.map(item => item.id);
        if (!checkIds.includes(id)) {
            console.log(`"${id}",`);
        }

        return imageContent
            .filter(item => item.id === id)
            .map(item => item.data.altText)[0];
    };
}

export function getTitle(imageContent: Array<Media>) {
    return (id: Uuid) => {
        const checkIds = imageContent.map(item => item.id);
        if (!checkIds.includes(id)) {
            console.log(`"${id}",`);
        }

        return imageContent
            .filter(item => item.id === id)
            .map(item => item.data.title)[0];
    };
}

export function getUrl(imageContent: Array<Media>) {
    return (id: Uuid) => {
        let width = 0;
        if(typeof window !== 'undefined'){
            width = window.innerWidth;
        }

        const checkIds = imageContent.map(item => item.id);
        if (!checkIds.includes(id)) {
            console.log(`"${id}",`);
        }
        return imageContent
            .filter(item => item.id === id)
            .map(item => width > 1024 ? item.data.variants[0].url : width > 768 ? item.data.variants.length > 1 ? item.data.variants[1].url: item.data.variants[0].url : item.data.variants.length > 2 ? item.data.variants[2].url :  item.data.variants.length > 1 ? item.data.variants[1].url: item.data.variants[0].url)[0];
    };
}