import {Link} from '@remix-run/react';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function OurBlogSection({
    heading,
    items,
    background,
    buttonText,
}: {
    heading: string;
    items: Array<{image?: string; date: string; title: string; text: string}>;
    background?: boolean;
    buttonText?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge tw-py-10 lg:tw-py-20',
                background ? '' : '',
            )}>
            <div className="tw-max-w-7xl tw-m-auto tw-grid">
                <div className="tw-grid tw-gap-6 lg:tw-gap-8 ">
                    <div className="tw-text-center sc-text-headline">
                        {heading}
                    </div>
                    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-2 lg:tw-gap-5">
                        <ItemBuilder
                            items={items}
                            itemBuilder={(item, itemIndex) => (
                                <BlogsCard
                                    date={item.date}
                                    title={item.title}
                                    text={item.text}
                                    key={itemIndex}
                                />
                            )}
                        />
                    </div>
                </div>
                {buttonText && (
                    <>
                        <VerticalSpacer className="tw-h-6" />
                        <Link
                            to="#"
                            className="sc-cta-outline-button tw-grid tw-text-center tw-py-3 lg:-px-0 lg:tw-justify-self-center lg:tw-w-[19.5rem]">
                            {buttonText}
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
