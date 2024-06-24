import {StarFill} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {
    concatenateNonNullStringsWithSpaces,
    getIntegerArrayOfLength,
} from '~/global-common-typescript/utilites/utilities';

export function TestimonialsCard({
    video,
    rating,
    name,
    state,
    message,
    className,
}: {
    className?: string;
    video?: string;
    rating: string;
    name: string;
    state: string;
    message: string;
}) {
    return (
        <div className={className}>
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-grid-rows-[auto,auto,minmax(0,1fr)] tw-gap-x-2 tw-gap-y-2 tw-justify-start tw-items-start sc-medium-shadow tw-h-full tw-w-full tw-rounded-lg tw-overflow-hidden tw-pb-4 tw-bg-secondary-200'
            )}
        >
            {video ? (
                <div className="tw-col-start-1 tw-row-start-1 tw-col-span-full tw-rounded-lg">
                    <video controls>
                        <source src={video}/>
                    </video>
                </div>
            ) : (
                <div className="tw-flex tw-flex-col tw-justify-start tw-items-start tw-col-start-1 tw-row-start-1 tw-col-span-full tw-aspect-[560/315] sc-bg-secondary-300 tw-rounded-lg tw-w-full tw-p-5">
                    <div className="sc-text-title1">{rating} Stars</div>
                    <div className="tw-h-1" />
                    <div className="tw-flex tw-flex-row tw-gap-[2px] ">
                        <ItemBuilder
                            items={getIntegerArrayOfLength(5)}
                            itemBuilder={(item, itemIndex) => (
                                <StarFill
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-w-4 tw-h-4',
                                        itemIndex < Number(rating)
                                            ? 'tw-text-primary-500'
                                            : 'tw-text-secondary-100',
                                    )}
                                    key={itemIndex}
                                />
                            )}
                        />
                    </div>
                </div>
            )}

            <div className="tw-col-start-1 tw-row-start-2 tw-flex tw-flex-col tw-gap-1 tw-justify-start tw-px-4">
                <div className="sc-text-title1 tw-text-secondary-800">{name}</div>

                <div className="sc-text-caption tw-text-secondary-800 tw-text-left">{state}</div>
            </div>
            <div className="tw-col-start-2  tw-flex tw-flex-row tw-gap-[2px] tw-justify-self-end tw-px-4">
                <ItemBuilder
                    items={getIntegerArrayOfLength(5)}
                    itemBuilder={(_, itemIndex) => (
                        <StarFill
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-w-5 tw-h-5',
                                itemIndex < Number(rating)
                                    ? 'tw-text-primary-500'
                                    : 'tw-text-secondary-300',
                            )}
                            key={itemIndex}
                        />
                    )}
                />
            </div>
            <div className="tw-col-start-1 tw-col-span-full tw-row-start-3 tw-h-full tw-w-full tw-px-4">
                <div className="sc-text-title2 tw-text-secondary-600 tw-text-left tw-flex-1">
                    {message}
                </div>
            </div>
        </div>
        </div>
    );
}
