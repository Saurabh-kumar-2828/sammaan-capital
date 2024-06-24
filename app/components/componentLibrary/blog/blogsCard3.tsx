import {Link} from '@remix-run/react';
import {ChevronRight} from 'react-bootstrap-icons';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

export function BlogsCard3({
    image,
    title,
    text,
    linkText,
    linkUrl,
}: {
    image?: string;
    title: string;
    text: string;
    linkText: string;
    linkUrl: string;
}) {
    return (
        <div className="tw-grid tw-grid-rows-2 tw-bg-secondary-200 sc-medium-shadow tw-border tw-border-secondary-100 tw-rounded-lg">
            <div className="tw-row-start-1 tw-bg-primary-500 tw-rounded-t-lg"></div>
            <div className="tw-row-start-2 tw-px-4 tw-py-6 tw-rounded-b-lg tw-grid tw-grid-rows-[auto_minmax(0,1fr)_0.5rem_auto]">
                <div className="sc-text-title1">{title}</div>
                <div className="sc-text-body tw-text-secondary-600">{text}</div>
                <VerticalSpacer className='tw-h-2' />
                <Link
                    to={linkUrl}
                    className="sc-text-button tw-flex tw-items-end tw-gap-1 tw-text-primary-500">
                    {linkText}
                    <ChevronRight className="tw-h-4 tw-w-4" />
                </Link>
            </div>
        </div>
    );
}
