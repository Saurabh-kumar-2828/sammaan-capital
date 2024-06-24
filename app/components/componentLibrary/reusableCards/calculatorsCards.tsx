import {Link} from '@remix-run/react';

export function CalculatorsCard({
    image,
    title,
    text,
    buttonText,
    buttonLink,
}: {
    image?: string;
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}) {
    return (
        <div className="tw-bg-secondary-400 tw-p-4 tw-grid tw-gap-4 tw-rounded-lg tw-justify-items-center">
            <div className="tw-h-10 tw-w-10 tw-bg-primary-500">
                {image}
            </div>
            <div className="sc-text-title1">{title}</div>
            <div className="sc-text-body tw-text-secondary-600 tw-text-center">
                {text}
            </div>
            <Link
                to={buttonLink}
                className="sc-cta-outline-button tw-py-3 tw-px-0 tw-w-[15rem] tw-text-center">
                {buttonText}
            </Link>
        </div>
    );
}
