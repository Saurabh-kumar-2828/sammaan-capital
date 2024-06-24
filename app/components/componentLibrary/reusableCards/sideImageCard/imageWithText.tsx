import {useState} from 'react';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function ImageWithText({
    imageClassName,
    textClassName,
    image,
    title,
    text,
}: {
    imageClassName: string;
    textClassName: string;
    image?: string;
    title: string;
    text: string;
}) {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <div className="tw-grid tw-grid-rows-[auto_minmax(0,1fr)] tw-grid-cols-1 lg:tw-grid-rows-1 lg:tw-grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:tw-gap-x-10 tw-gap-y-6 tw-rounded-lg sc-medium-shadow tw-p-4 tw-bg-secondary-200 tw-border tw-border-secondary-100 lg:tw-p-6">
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'lg:tw-h-full tw-w-full tw-bg-primary-500 tw-h-[17.5rem] tw-rounded-lg',
                    imageClassName,
                )}>
                <img src={image} alt="" />
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'tw-grid tw-gap-y-6 tw-gap-x-4 tw-grid-rows-[auto_minmax(0,1fr)] lg:tw-gap-4',
                    textClassName,
                )}>
                <div className="sc-text-headline tw-row-start-1 tw-text-center tw-text-secondary-800">
                    {title}
                </div>
                <div className="sc-text-title2 tw-text-secondary-600 tw-row-start-2 tw-hidden lg:tw-block">
                    {text}
                </div>
                <div className="sc-text-title2 tw-text-secondary-600 tw-row-start-2 tw-block lg:tw-hidden">
                    {showFullText ? text : `${text.slice(0, 140)}... `}
                    <button
                        onClick={() => setShowFullText(prev => !prev)}
                        className="tw-text-primary-500 tw-underline">
                        {showFullText ? 'See Less' : ' Show more'}
                    </button>
                </div>
            </div>
        </div>
    );
}
