import {useContext} from "react";
import {ContentProviderContext} from "~/contexts/contentProviderContext";
import {ItemBuilder} from "~/global-common-typescript/itemBuilder";

export function PerksSection({headingId, dataId}: {headingId: string; dataId: string;}) {
    const contentData = useContext(ContentProviderContext);
    const jsonData = contentData.getContent(dataId);
    const data = jsonData ? JSON.parse(jsonData) : [];
    return (
        <div className="sc-px-screen-edge tw-py-10 lg:tw-py-20">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(headingId)}
                </div>

                <ul className="tw-grid tw-gap-4 tw-list-disc tw-list-inside">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <li
                                    key={itemIndex}
                                    className="tw-p-4 tw-bg-secondary-400 tw-rounded-lg">
                                    {item}
                                </li>
                            );
                        }}
                    />
                </ul>
            </div>
        </div>
    )
}