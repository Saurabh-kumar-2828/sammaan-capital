import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";
import {EmiCalculator} from "../reusableComponents/emiCalculatorCard";
import {VerticalSpacer} from "../reusableComponents/verticalSpacer";
import {useContext, useState} from "react";
import {ContentProviderContext} from "~/contexts/contentProviderContext";

export function CalculatorSection({subHeadingId, categories}: {subHeadingId:string; categories: Array<string>}){
    const contentData = useContext(ContentProviderContext);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return(
        <div className={concatenateNonNullStringsWithSpaces('tw-grid tw-py-10 lg:tw-py-20')}>
            <div className="sc-text-headline tw-text-center sc-px-screen-edge">
                {contentData.getContent("616ec46c-593c-4803-b35c-088cd0ced772")}
            </div>
            <VerticalSpacer className="tw-h-4" />
            <div className="tw-bg-secondary-200 sc-px-screen-edge tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 lg:tw-justify-center tw-py-4 max-lg:tw-max-w-[100vw] tw-w-full tw-overflow-x-auto tw-mx-auto">
                {categories.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`tw-p-4 tw-px-5 tw-rounded-lg sc-text-button tw-whitespace-nowrap ${
                                selectedCategory === item
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() => setSelectedCategory(item)}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>
            <div className="tw-h-4" />
            <div className="sc-text-body tw-text-center sc-px-screen-edge">
                {contentData.getContent(subHeadingId)}
            </div>
            <div className="tw-h-6" />{' '}
            <div className="sc-px-screen-edge">
                {selectedCategory === "EMI" ? (
                    <EmiCalculator schedule />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}