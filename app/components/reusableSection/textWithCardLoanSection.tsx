import {Link} from '@remix-run/react';
import {useContext} from 'react';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {OneLinerCard} from '../componentLibrary/reusableCards/oneLinerCard/oneLinerCard';
import {VerticalSpacer} from '../reusableComponents/verticalSpacer';

export function TextWithCardSection({
    heading,
    description,
    condition1,
    condition2,
    cardItems,
    buttonText,
    buttonLink,
}: {
    heading: string;
    description: string;
    condition1: string;
    condition2?: string;
    cardItems: Array<{imgLink: string; text: string}>;
    buttonText: string;
    buttonLink: string;
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge tw-pt-6 tw-pb-10 lg:tw-pt-10 lg:tw-pb-20">
            <div className="tw-grid tw-gap-4 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(heading)}
                </div>
                <div className="tw-grid tw-gap-8 lg:tw-gap-12 tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1fr)_minmax(auto,1.2fr)]">
                    <div className="tw-grid tw-auto-rows-max">
                        <div className="sc-text-title2">
                            {contentData.getContent(description)}
                        </div>

                        <VerticalSpacer className="tw-h-6 lg:tw-h-3" />

                        <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-2 lg:tw-hidden">
                            <ItemBuilder
                                items={cardItems}
                                itemBuilder={(item, itemIndex) => {
                                    return (
                                        <OneLinerCard
                                            key={itemIndex}
                                            img={item.imgLink}
                                            title={item.text}
                                            imgClassName="tw-w-12 tw-h-12 tw-justify-self-center tw-rounded-full tw-bg-primary-500 tw-bg-opacity-30"
                                            className="tw-p-4"
                                            textClass="tw-text-center"
                                        />
                                    );
                                }}
                            />
                        </div>

                        <VerticalSpacer className="tw-h-6 lg:tw-hidden" />

                        <Link
                            to={buttonLink ? buttonLink : '#'}
                            className="sc-cta-button tw-w-fit max-lg:tw-mx-auto max-sm:tw-w-full">
                            {contentData.getContent(buttonText)}
                        </Link>

                        <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                        <div>
                            <div className="sc-text-caption tw-text-secondary-600">
                                {contentData.getContent(condition1)}
                            </div>
                            {condition2 && (
                                <div className="sc-text-caption tw-text-secondary-600">
                                    {contentData.getContent(condition2)}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:tw-grid tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4 tw-hidden">
                        <ItemBuilder
                            items={cardItems}
                            itemBuilder={(item, itemIndex) => {
                                return (
                                    <OneLinerCard
                                        key={itemIndex}
                                        img={item.imgLink}
                                        title={item.text}
                                        imgClassName="tw-w-12 tw-h-12 tw-justify-self-center tw-rounded-full tw-bg-primary-500 tw-bg-opacity-30"
                                        className="tw-p-4"
                                        textClass="tw-text-center"
                                    />
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
