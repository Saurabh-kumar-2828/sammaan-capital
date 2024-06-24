import {useContext} from 'react';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {VerticalSpacer} from '../reusableComponents/verticalSpacer';
import {Link} from '@remix-run/react';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function HeroSection({
    imgId,
    bannerHeadingId,
    ctaTextId,
    ctaLink,
}: {
    imgId: string;
    bannerHeadingId: string;
    ctaTextId?: string;
    ctaLink?: string;
}) {
    const contentData = useContext(ContentProviderContext);
    // console.log("img Id >>>>>>>>", imgId)
    return (
        <div className="tw-h-[480px] tw-w-full tw-grid tw-overflow-hidden tw-relative">
            <div className={concatenateNonNullStringsWithSpaces("tw-absolute tw-inset-0 tw-h-full tw-w-full tw-row-start-1 tw-col-start-1 tw-bg-opacity-30", imgId != "" ? "" : "tw-bg-primary-500")}>
                {
                    imgId && <img
                    src={contentData.getContent(imgId)}
                    alt=""
                />
                }
            </div>

            <div className="tw-row-start-1 tw-col-start-1 tw-grid tw-grid-rows-[1fr_auto] md:tw-grid-rows-[auto_auto] tw-w-full sm:tw-w-fit tw-h-full max-lg:tw-py-12 lg:tw-h-fit tw-self-center tw-justify-self-center lg:tw-justify-self-start sc-px-screen-edge tw-z-10">
                <div
                    dangerouslySetInnerHTML={{
                        __html: contentData.getContent(bannerHeadingId),
                    }}
                    className="sc-text-banner tw-text-center lg:tw-text-left"
                />

                <VerticalSpacer className="tw-h-0 sm:tw-h-6" />

                {ctaTextId && (
                    <Link
                        to={ctaLink ? ctaLink : '#'}
                        className="sc-cta-button tw-w-full lg:tw-w-fit md:tw-h-fit">
                        {contentData.getContent(ctaTextId)}
                    </Link>
                )}
            </div>
        </div>
    );
}
