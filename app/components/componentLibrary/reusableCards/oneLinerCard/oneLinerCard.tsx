import {Link} from '@remix-run/react';
import {ChevronRight} from 'react-bootstrap-icons';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function OneLinerCard({
    img,
    title,
    className,
    textClass,
    imgClassName,
    showChevron,
}: {
    img?: string;
    title: string;
    className?: string;
    textClass?: string;
    imgClassName?: string;
    showChevron?: boolean
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-auto-rows-max sc-medium-shadow tw-p-6 tw-gap-2 tw-rounded-lg tw-border tw-border-secondary-100-light tw-h-full tw-relative',
                className,
            )}>
            <div className={concatenateNonNullStringsWithSpaces("tw-rounded-full tw-overflow-hidden tw-bg-primary-500", imgClassName)}>
                {img? <img src={img} alt='cardImage' /> : ""}
            </div>
            <div className={concatenateNonNullStringsWithSpaces("sc-text-title2 tw-text-secondary-800", textClass? textClass : "")}>{title}</div>
            {
                showChevron && <Link to="#" className='tw-absolute tw-top-6 tw-right-6'><ChevronRight/></Link>
            }
        </div>
    );
}
