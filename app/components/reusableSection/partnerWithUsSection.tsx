import {Link} from '@remix-run/react';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function PartnerWithUsSection({
    items,
}: {
    items: Array<{
        imgLink: string;
        title: string;
        text: string;
        subText: string;
        // linkUrl: string;
    }>;
}) {
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-grid-cols-2 lg:tw-grid-rows-1 tw-grid-rows-2 tw-grid-cols-1 lg:tw-gap-8 tw-gap-4">
                <ItemBuilder
                    items={items}
                    itemBuilder={(item, itemIndex) => (
                        <div
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-grid lg:tw-grid-rows-[1.5rem_auto_0.5rem_auto_1rem_auto_1.5rem] tw-grid-rows-[1rem_auto_0.5rem_auto_0.5rem_auto_1rem] lg:tw-grid-cols-[8rem_minmax(0,1fr)]',
                                itemIndex === 0
                                    ? 'max-lg:tw-grid-cols-[minmax(0,1fr)_5.5rem]'
                                    : 'max-lg:tw-grid-cols-[5.5rem_minmax(0,1fr)]',
                            )}
                            key={itemIndex}>
                            <div className="tw-w-full tw-h-full tw-bg-secondary-100 tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full tw-rounded-lg">
                                <img src={item.imgLink} alt="" />
                            </div>
                            <div
                                className={concatenateNonNullStringsWithSpaces(
                                    'sc-text-title1 tw-font-bold tw-text-secondary-800 tw-row-start-2 tw-col-start-2 tw-pr-6',
                                    itemIndex === 0
                                        ? 'max-lg:tw-col-start-1 max-lg:tw-pl-6'
                                        : '',
                                )}>
                                {item.title}
                            </div>
                            <div
                                className={concatenateNonNullStringsWithSpaces(
                                    'tw-row-start-4 tw-col-start-2 tw-pr-6 tw-text-secondary-600 sc-text-title2',
                                    itemIndex === 0
                                        ? 'max-lg:tw-col-start-1 max-lg:tw-pl-6'
                                        : '',
                                )}>
                                {item.text}
                            </div>

                            <Link
                                to="#"
                                className={concatenateNonNullStringsWithSpaces(
                                    'tw-row-start-6 tw-col-start-2 tw-text-primary-500',
                                    itemIndex === 0
                                        ? 'max-lg:tw-col-start-1 max-lg:tw-pl-6'
                                        : '',
                                )}>
                                {item.subText}
                            </Link>
                        </div>
                    )}
                />
            </div>
        </div>
    );
}
