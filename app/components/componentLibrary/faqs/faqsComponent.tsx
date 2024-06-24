import {Link} from '@remix-run/react';
import {useContext, useState} from 'react';
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Ids} from '~/typeDefinitions';

export function FaqsSectionComponent({
    items,
    showFaqPageLink,
}: {
    items: Array<{question: string; answer: string}>;
    showFaqPageLink?: boolean;
    sectionHeading?: string;
}) {
    const array = Array.from({length: items.length});
    array.fill(false);
    const [showAnswer, setShowAnswer] = useState(array);

    function updateShowAnswer(index: number) {
        const newArray = [...showAnswer];
        newArray[index] = !showAnswer[index];
        setShowAnswer(newArray);
    }

    const contentData = useContext(ContentProviderContext);
    return (
        <div className='sc-px-screen-edge tw-py-10 lg:tw-py-20'>
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-mx-auto tw-w-full">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(Ids.Faqs)}
                </div>
                <div className="tw-grid tw-gap-4">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-grid tw-gap-4 tw-px-4 tw-py-5 tw-border tw-border-secondary-100 tw-bg-secondary-200 tw-rounded-lg tw-cursor-pointer',
                                    )}
                                    onClick={() => updateShowAnswer(itemIndex)}
                                    key={itemIndex}>
                                    <div className="tw-grid tw-grid-cols-[minmax(0,1fr),auto] tw-gap-8 tw-items-center sc-text-title2">
                                        <div>{item.question}</div>
                                        {!showAnswer[itemIndex] ? (
                                            <ChevronDown className="tw-cursor-pointer" />
                                        ) : (
                                            <ChevronUp className="tw-cursor-pointer" />
                                        )}
                                        {/* {showAnswer[itemIndex]? && (

                                    )} */}
                                    </div>
                                    {!showAnswer[itemIndex] == false && (
                                        <div className="sc-text-title2">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        }}
                    />
                    {showFaqPageLink && (
                        <Link
                            to="/faqs"
                            className={concatenateNonNullStringsWithSpaces(
                                'sc-cta-outline-button lg:tw-w-fit lg:tw-justify-self-center tw-text-center',
                            )}>
                            View More FAQs
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
