import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function TwoLinerCard2({
    img,
    title,
    text,
    className,
    cardNumber,
}: {
    img?: string;
    title: string;
    text: string;
    className?: string;
    cardNumber: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-auto-rows-max sc-medium-shadow tw-p-6 tw-gap-2 tw-rounded-lg tw-bg-secondary-200-light tw-border tw-h-full tw-border-secondary-100-light',
                className,
            )}>
            <div className="tw-grid tw-grid-cols-2">
                <div className="tw-h-[3rem] tw-w-[3rem] tw-rounded-full tw-bg-[#001CA8] tw-overflow-hidden">
                    {img ? <img src={img} className='' alt='roundIcon' /> : ""}
                </div>

                <div className="tw-text-end">{cardNumber}</div>
            </div>
            <div className="sc-text-title1">{title}</div>
            <div className="sc-text-body">{text}</div>
        </div>
    );
}
