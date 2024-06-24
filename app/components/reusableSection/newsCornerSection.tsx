import {Link} from '@remix-run/react';
import {useContext} from 'react';
import {BlogsCard2} from '~/components/componentLibrary/blog/blogsCard2';
import {KeenCarousel} from '~/components/reusableComponents/keenCarousel';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
export function NewsCornerSection({
    heading,
    news,
    className,
    buttonText,
}: {
    heading: string;
    news: Array<{
        date: string;
        title: string;
        text: string;
        image?: string;
        // linkText: string;
        // linkUrl: string;
    }>;
    className?: string;
    buttonText?: string;
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-py-10 lg:tw-py-20 sc-px-screen-edge',
                className,
            )}>
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-text-center sc-text-headline">{contentData.getContent("d3d236c3-8768-45e5-b2bf-101b2233e8c1")}</div>
                <VerticalSpacer className="lg:tw-h-5 tw-h-3" />
                <div className="tw-overflow-hidden">
                    <KeenCarousel
                        items={news}
                        itemBuilder={(news, newsIndex) => (
                            <BlogsCard2
                                date={news.date}
                                image={news.image}
                                title={news.title}
                                text={news.text}
                                linkText="Know More"
                                linkUrl="/"
                                key={newsIndex}
                            />
                        )}
                        slideClassName="tw-max-w-[22rem] tw-p-3"
                    />
                </div>
                {buttonText && (
                    <div className="sc-px-screen-edge tw-grid tw-mt-6">
                        <Link
                            to="#"
                            className="sc-cta-outline-button tw-grid tw-text-center tw-py-3 lg:-px-0 lg:tw-justify-self-center lg:tw-w-[19.5rem]">
                            {buttonText}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
