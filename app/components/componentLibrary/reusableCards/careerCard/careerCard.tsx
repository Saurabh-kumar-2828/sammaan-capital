import {Link} from '@remix-run/react';
import {ChevronRight, GeoAltFill} from 'react-bootstrap-icons';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function CareerCard({
    title,
    text,
    location,
    linkText,
    link,
    className,
}: {
    title: string;
    text: string;
    location: string;
    linkText: string;
    link: string;
    className?: string;
}) {
    return (
        <div className={concatenateNonNullStringsWithSpaces("sc-medium-shadow tw-py-6 tw-px-4 lg:tw-px-6 tw-rounded-lg tw-bg-secondary-200 tw-border tw-border-secondary-100", className? className : "")}>
            <div className='sc-text-title1'>{title}</div>
            <div className="tw-h-2 lg:tw-h-4" />
            <div className='sc-text-title2 tw-text-secondary-600'>{text}</div>
            <div className="tw-h-2" />
            <div className="tw-flex tw-gap-2 tw-items-center sc-text-title2">
                <GeoAltFill />
                {location}
            </div>
            <div className="tw-h-4 lg:tw-h-6" />
            <Link to={link} className='tw-flex tw-gap-2 tw-items-center sc-text-title2 tw-text-primary-500'>
                {linkText}
                <ChevronRight />
            </Link>
        </div>
    );
}
