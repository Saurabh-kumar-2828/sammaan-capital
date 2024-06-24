import {useState} from 'react';
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function AccordionComponents({
    items,
    className,
}: {
    items: Array<{title: string; description: string}>;
    className?: string;
}) {
    const array = Array.from({length: items.length});
    array.fill(false);
    const [showDescription, setShowDescription] = useState(array);

    function updateShowDescription(index: number) {
        const newArray = [...showDescription];
        newArray[index] = !showDescription[index];
        setShowDescription(newArray);
    }
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-gap-4',
                className? className : "",
            )}>
            <ItemBuilder
                items={items}
                itemBuilder={(item, itemIndex) => {
                    return (
                        <div
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-grid tw-gap-4 tw-px-4 tw-py-5 tw-border tw-border-secondary-100 tw-bg-secondary-200 tw-rounded-lg',
                            )}
                            onClick={() => updateShowDescription(itemIndex)}
                            key={itemIndex}>
                            <div className="tw-grid tw-grid-cols-[minmax(0,1fr),auto] tw-gap-8 tw-items-center sc-text-title2 tw-cursor-pointer">
                                <div>{item.title}</div>
                                {!showDescription[itemIndex] ? (
                                    <ChevronDown
                                        onClick={() =>
                                            updateShowDescription(itemIndex)
                                        }
                                        className="tw-cursor-pointer"
                                    />
                                ) : (
                                    <ChevronUp
                                        onClick={() =>
                                            updateShowDescription(itemIndex)
                                        }
                                        className="tw-cursor-pointer"
                                    />
                                )}
                            </div>
                            {!showDescription[itemIndex] == false && (
                                <div className="sc-text-title2 tw-text-secondary-600">
                                    {item.description}
                                </div>
                            )}
                        </div>
                    );
                }}
            />
        </div>
    );
}
