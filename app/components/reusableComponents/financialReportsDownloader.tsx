import {Link} from '@remix-run/react';
import {FileEarmarkArrowDownFill} from 'react-bootstrap-icons';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import type {ContentProvider} from '~/typeDefinitions';

export function FinancialReportsDownloader({
    className,
    reportDuration,
    createdIn,
    resultLink,
    earningsLink,
    contentData
}: {
    className?: string;
    reportDuration: string;
    createdIn: string;
    resultLink: string;
    earningsLink: string;
    contentData: ContentProvider;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-p-6 tw-grid xl:tw-grid-cols-2 tw-justify-between tw-gap-x-8 tw-gap-y-4 tw-flex-wrap tw-rounded-lg tw-bg-secondary-200 sc-medium-shadow tw-border-[0.727px] tw-border-secondary-100',
                className ? className : '',
            )}>
            <div className="tw-flex">
                <div className="sc-footer-text tw-font-bold tw-pr-2 tw-self-center tw-border-r tw-border-r-secondary-600">
                    {reportDuration}
                </div>

                <div className="tw-text-[1rem] tw-pl-2 tw-pr-6 tw-self-center">{createdIn}</div>
            </div>

            <div className="tw-grid tw-grid-cols-[auto_auto] tw-gap-6 tw-h-fit tw-my-auto">
                <Link to={resultLink} download className="tw-flex tw-items-center tw-gap-2 sc-footer-text tw-pr-2">
                    <div>
                        <FileEarmarkArrowDownFill className="tw-text-primary-500" />
                    </div>
                    <div className="tw-text-primary-500">{contentData.getContent("32672588-a6ba-47b3-bdcf-4dfdb5d3ce21")}</div>
                </Link>
                <Link to={earningsLink} download className="tw-flex tw-items-center tw-gap-2 sc-footer-text tw-pl-2">
                    <div>
                        <FileEarmarkArrowDownFill className="tw-text-primary-500" />
                    </div>
                    <div className="tw-text-primary-500">{contentData.getContent("83616dbb-d7ba-453a-8d85-f1e8ef45d40d")}</div>
                </Link>
            </div>
        </div>
    );
}
