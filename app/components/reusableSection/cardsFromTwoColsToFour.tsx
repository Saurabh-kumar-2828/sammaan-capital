import {useContext} from 'react';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {TwoLinerCard} from '../componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {CardType} from '~/typeDefinitions';
import {TwoLinerCard2} from '../componentLibrary/reusableCards/twoLinerCard2';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Link} from '@remix-run/react';
import {VerticalSpacer} from '../reusableComponents/verticalSpacer';
import {OneLinerCard} from '../componentLibrary/reusableCards/oneLinerCard/oneLinerCard';

export function CardsFromTwoColsToFour({
    cardType,
    dataId,
    sectionHeadingId,
    background,
    ctaLinkId,
    ctaTextId,
    subHeadingId,
}: {
    cardType: string;
    dataId?: string;
    sectionHeadingId: string;
    background?: boolean;
    ctaLinkId?: string;
    ctaTextId?: string;
    subHeadingId?: string;
}) {
    const contentData = useContext(ContentProviderContext);
    const jsonData = dataId ? contentData.getContent(dataId): "";
    const data = dataId? JSON.parse(jsonData) :  [
        {
            imgLink: '',
            text: 'Know your Application Status',
        },
        {
            imgLink: '',
            text: 'Request for repayment details ',
        },
        {
            imgLink: '',
            text: 'Get Loan Interest Certificate',
        },
        {
            imgLink: '',
            text: 'Request to change your contact details',
        },
    ];
    // const jsonData = contentData.getContent(dataId);
    // const data = jsonData ? JSON.parse(jsonData) : [];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge tw-bg-secondary-400-light tw-py-10 lg:tw-py-20 tw-overflow-hidden',
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

                <div className="tw-grid tw-gap-2 lg:tw-gap-8 tw-grid-cols-2 md:tw-grid-cols-4 tw-w-fit tw-mx-auto">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div key={itemIndex}>
                                    {cardType == CardType.TwoLinerCard ? (
                                        <TwoLinerCard
                                            // key={itemIndex}
                                            title={item.title}
                                            text={item.text}
                                            className="tw-w-[17.25rem]"
                                            background={background? false : true}
                                        />
                                    ) : cardType ==
                                      CardType.TwoLinerCardWithNumber ? (
                                        <TwoLinerCard2
                                            // key={itemIndex}
                                            title={item.title}
                                            text={item.text}
                                            cardNumber={`0${itemIndex + 1}/0${
                                                data.length
                                            }`}
                                            className="tw-w-[17.25rem]"
                                        />
                                    ) : CardType.OneLinerCardWithChevron? (
                                        <OneLinerCard title={item.text} className='tw-max-w-[16.5rem]' imgClassName='tw-w-12 tw-h-12 tw-rounded-full' img={item.imgLink} showChevron/>
                                    ): null
                                }
                                </div>
                            );
                        }}
                    />
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
