import {Link} from '@remix-run/react';
import {ChevronRight} from 'react-bootstrap-icons';

export function ProductCard({
    image,
    title,
    text,
    linkText,
    linkUrl,
}: {
    image?: string;
    title: string;
    text?: string;
    linkText: string;
    linkUrl: string;
}) {
    // const contentData = useContext(ContentProviderContext);

    return (
        <div className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-h-full tw-grid tw-grid-rows-[auto_minmax(0,1fr)]">
            <div className="tw-h-[16rem] tw-bg-secondary-400 tw-relative tw-rounded-lg">
                <img className="tw-rounded-t-lg" src={image} alt="image1 url" />
                <div className="tw-absolute tw-top-0 tw-left-0 tw-bg-primary-500 tw-py-1 tw-px-2 tw-rounded-tl-lg tw-rounded-br-lg tw-text-secondary-100">
                    {/* {contentData.getContent("af955c11-e4b3-4bb9-a052-182ad042017d")} */}{' '}
                    Low Interest
                </div>
            </div>
            <div className="tw-p-4 tw-grid tw-gap-2 tw-h-full">
                <div className="sc-text-title1 tw-row-start-1 tw-text-secondary-800">{title}</div>
                {text && <div className="sc-text-title2 tw-text-secondary-600">{text}</div>}
                <Link
                    to={linkUrl}
                    className="sc-text-button tw-text-primary-500 tw-flex tw-gap-1 tw-items-center">
                    {linkText}
                    <ChevronRight className="tw-h-4 tw-w-4" />
                </Link>
            </div>
        </div>
    );
}
