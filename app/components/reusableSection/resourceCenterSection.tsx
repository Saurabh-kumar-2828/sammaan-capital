import {useContext} from "react";
import {AccordionComponents} from "../reusableComponents/accordionComponents";
import {ContentProviderContext} from "~/contexts/contentProviderContext";
import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";

export function ResourceCenterSection({headingId, itemsId}: {headingId: string; itemsId?: string}){
    const contentData = useContext(ContentProviderContext);
    const jsonItems = itemsId? contentData.getContent(itemsId): "";
    const items = itemsId? JSON.parse(jsonItems) : [{title: "Key Features", description: "Key Features"},{title: "Benefits", description: "Benefits"},{title: "Eligibility", description: "Eligibility"},{title: "Required Documents", description: "Required Documents"},];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge tw-py-10 lg:tw-py-20',
            )}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-gap-8 tw-gap-6 tw-w-full">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(headingId)}
                </div>
                <AccordionComponents items={items} className="tw-w-full" />
            </div>
        </div>
    );
}