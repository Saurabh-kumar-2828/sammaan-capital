import {useContext} from 'react';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {TwoLinerCard} from '../componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {CardType} from '~/typeDefinitions';
import {TwoLinerCard2} from '../componentLibrary/reusableCards/twoLinerCard2';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Link} from '@remix-run/react';
import {KeenCarousel} from '../reusableComponents/keenCarousel';
import {VerticalSpacer} from '../reusableComponents/verticalSpacer';
import {OneLinerCard} from '../componentLibrary/reusableCards/oneLinerCard/oneLinerCard';

export function CardsInARow({
    cardType,
    data,
    sectionHeadingId,
    background,
    ctaLinkId,
    ctaTextId,
    subHeadingId,
}: {
    cardType: string;
    data: Array<{imgLink: string, title: string, text: string}>;
    sectionHeadingId: string;
    background?: boolean;
    ctaLinkId?: string;
    ctaTextId?: string;
    subHeadingId?: string;
}) {
    const contentData = useContext(ContentProviderContext);
    // const jsonData = contentData.getContent(dataId);
    // const data = jsonData ? JSON.parse(jsonData) : [];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'xl:sc-px-screen-edge tw-bg-secondary-400-light tw-py-10 lg:tw-py-20  tw-overflow-hidden',
                background ? 'tw-bg-secondary-400' : '',
            )}>
            <div className="tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-grid tw-gap-4 lg:tw-gap-6 sc-px-screen-edge">
                    <div className="tw-text-center sc-text-headline">
                        {contentData.getContent(sectionHeadingId)}
                    </div>

                    {subHeadingId && (
                        <div className="tw-text-center sc-text-body">
                            {contentData.getContent(subHeadingId)}
                        </div>
                    )}
                </div>

                <VerticalSpacer className='tw-h-6 lg:tw-h-8'/>

                <div className="tw-hidden xl:tw-grid tw-gap-4 tw-grid-flow-col tw-w-fit tw-mx-auto">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div key={itemIndex}>
                                    {cardType == CardType.TwoLinerCard ? (
                                        <TwoLinerCard
                                            // key={itemIndex}
                                            image={item.imgLink}
                                            title={item.title}
                                            text={item.text}
                                            className="tw-w-[17.25rem]"
                                            background={background? false : true}
                                        />
                                    ) : cardType ==
                                      CardType.TwoLinerCardWithNumber ? (
                                        <TwoLinerCard2
                                            // key={itemIndex}
                                            img={item.imgLink}
                                            title={item.title}
                                            text={item.text}
                                            cardNumber={`0${itemIndex + 1}/0${
                                                data.length
                                            }`}
                                            className="tw-w-[17.25rem]"
                                        />
                                    ) : CardType.OneLinerCardWithChevron? (
                                        <OneLinerCard title={item.title} imgClassName='tw-w-12 tw-h-12 tw-rounded-full  tw-bg-primary-500 tw-opacity-30' img=""/>
                                    ): null
                                }
                                </div>
                            );
                        }}
                    />
                </div>
                <div className="xl:tw-hidden">
                    <KeenCarousel
                        items={data}
                        multiplicationFactor={2}
                        itemBuilder={(
                            item,
                            itemIndex,
                            // activeItemIndex,
                            // scrollToPrevSlide,
                            // scrollToNextSlide,
                        ) => (
                            <div key={itemIndex}>
                                    {cardType == CardType.TwoLinerCard ? (
                                        <TwoLinerCard
                                            // key={itemIndex}
                                            title={item.title}
                                            text={item.text}
                                            className=""
                                            background={background? false : true}
                                        />
                                    ) : cardType ==
                                      CardType.TwoLinerCardWithNumber ? (
                                        <TwoLinerCard2
                                            // key={itemIndex}
                                            title={item.title}
                                            text={item.text}
                                            cardNumber={`0${(itemIndex + 1) % data.length == 0? data.length :(itemIndex + 1)%data.length}/0${
                                                data.length
                                            }`}
                                            className=""
                                        />
                                    ) : null}
                                </div>
                        )}
                        slideClassName="tw-max-w-[17.25rem] tw-px-2 tw-pb-4"
                        // sliderButtonsPosition="tw-absolute tw-top-0 tw-w-full tw-px-4 tw-h-full tw-flex tw-items-center tw-justify-between max-md:tw-hidden"
                        // disablePrevButton
                    />{' '}
                </div>

                {ctaTextId && (
                    <Link
                        to={ctaLinkId ? contentData.getContent(ctaLinkId) : '#'}
                        className="sc-cta-button tw-w-fit tw-justify-self-center">
                        {ctaTextId ? contentData.getContent(ctaTextId) : ''}
                    </Link>
                )}
            </div>
        </div>
    );
}
