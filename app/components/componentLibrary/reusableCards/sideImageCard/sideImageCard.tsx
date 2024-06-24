import {Link} from '@remix-run/react';
import {useState} from 'react';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function SideImageCard({
    imageClassName,
    textClassName,
    imageUrl,
    buttonText,
    title,
    text,
    buttonLink,
}: {
    imageClassName: string;
    textClassName: string;
    imageUrl?: string;
    buttonText: string;
    title: string;
    text: string;
    buttonLink?: string;
}) {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <div className="tw-grid tw-grid-rows-[auto_auto] tw-grid-cols-1 md:tw-grid-rows-1 md:tw-grid-cols-[minmax(0,1fr)_minmax(auto,1fr)] tw-gap-x-14 tw-gap-y-4 tw-rounded-lg sc-medium-shadow tw-p-4 tw-bg-secondary-200 tw-border tw-border-[#F2F2F2]">
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'tw-h-fit lg:tw-min-h-[15.6rem] lg:tw-max-w-[30rem] tw-w-full tw-rounded-lg tw-overflow-hidden tw-justify-self-end',
                    imageClassName,
                )}>
                <img className='tw-rounded-lg' src={imageUrl} alt='sideImage'/>
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'tw-grid tw-gap-4 tw-grid-rows-[auto_minmax(0,1fr)]',
                    textClassName,
                )}>
                <div className="sc-text-headline tw-row-start-1">{title}</div>
                <div className="sc-text-body tw-row-start-2 tw-hidden md:tw-block tw-text-secondary-600">
                    {text}
                </div>
                <div className="sc-text-body tw-row-start-2 tw-block md:tw-hidden">
                    <div className='tw-text-secondary-600'>{showFullText ? text : text? `${text.slice(0, 200)}...` : ""}</div>
                    <button
                        onClick={() => setShowFullText(prev => !prev)}
                        className="tw-text-primary-500 tw-underline">
                        {showFullText ? 'See Less' : '.Show more'}
                    </button>
                </div>

                <Link to={buttonLink? buttonLink : ""}  className="sc-cta-button tw-hidden md:tw-block tw-text-secondary-100 tw-w-fit tw-text-center">
                    {buttonText}
                </Link>
            </div>
            <Link to={buttonLink? buttonLink : ""} className="sc-cta-button tw-col-start-1 md:tw-hidden tw-text-secondary-100 md:tw-w-fit tw-text-center">
                {buttonText}
            </Link>
        </div>
    );
}
