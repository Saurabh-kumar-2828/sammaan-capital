import {useContext, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {Link, useLoaderData} from '@remix-run/react';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {OneLinerCard} from '~/components/componentLibrary/reusableCards/oneLinerCard/oneLinerCard';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {AffordabilityCalculatorCard} from '~/components/reusableComponents/affordabilityCalculatorCard';
import {PmayCalculatorCard} from '~/components/reusableComponents/pmayCalculatorCard';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {EmiCalculator} from '~/components/reusableComponents/emiCalculatorCard';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('homeLoanInIndia');

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData} = useLoaderData() as LoaderData;
    return (
        <>
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <HomeLoanInIndiaPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function HomeLoanInIndiaPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Home Loan Locations in India', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <HomeLoanLocations />

            <div className="lg:tw-h-16 tw-h-10" />

            <WhyChooseUs />

            <div className="lg:tw-h-20 tw-h-10" />

            <CalculateHomeLoan />

            <div className="lg:tw-h-40 tw-h-20" />

            <FaqSection/>

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function HomeLoanLocations() {
    const contentData = useContext(ContentProviderContext);
    const locations = [
        {
            imageSrc: contentData.getContent(
                '7772df1e-23a4-4b50-810c-462ab9700978',
            ),
            text: contentData.getContent(
                '90e892be-1f50-469a-91c1-333afde81a4c',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '4062aef5-efcd-4b34-ad50-ce2a4e8897fa',
            ),
            text: contentData.getContent(
                '8000a456-5e95-4e39-bd5a-fc0ed96d7e84',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '46216c55-c496-4ae0-8069-f7e09fe9755a',
            ),
            text: contentData.getContent(
                'b228316a-d3b9-4785-9f1b-9ef6ff2c3c26',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                'b1f1435b-92a1-4d7c-a0a4-8f523078d68b',
            ),
            text: contentData.getContent(
                'a4a2bf8a-e10f-4e63-b5bb-af10ba64ff3d',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                'd4b985c3-1a93-4742-8367-0e8ddff1f5e2',
            ),
            text: contentData.getContent(
                '6b7c8abe-ef66-4bb5-8bd5-3ddbd462ac89',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                'cb987d6e-5fe5-4a8a-a05f-fc174f71a591',
            ),
            text: contentData.getContent(
                '9ee21e1a-fefb-412d-b350-d44e07f02f38',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '3a09b43e-e31f-402d-b091-0c28c9eb1a5c',
            ),
            text: contentData.getContent(
                '4c8941b7-5cb7-4d40-b2a0-9613bc4f11fe',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '3955a798-0c07-43ca-86c2-ca12c71a5fa6',
            ),
            text: contentData.getContent(
                'bb49479f-2918-442e-a108-a234daeaa7e3',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '55b54584-3bf1-4dfe-8d3b-0c2664fc0087',
            ),
            text: contentData.getContent(
                '75288607-bf85-408b-9544-dba1d8124c1b',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                'c191f588-dc16-4761-a21b-b6c53d31e177',
            ),
            text: contentData.getContent(
                '43892388-96ee-4f3b-b72a-a749beab264d',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '57abf295-27e6-47de-90b6-3adb941035a4',
            ),
            text: contentData.getContent(
                '8c23f73d-60ec-4bfc-bc63-cbe9413d1206',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '64f8aac7-82f2-4512-b099-a1992ceb497f',
            ),
            text: contentData.getContent(
                '13f04b6d-c815-4d31-9c66-f4f698c6c2c5',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '1d1a9c4a-62d8-4cb9-b7a2-7820aa963201',
            ),
            text: contentData.getContent(
                'af29d9d8-b9f3-4118-bb62-ae69b2d2edba',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '064c9fc2-0a14-41b5-8019-2facdc1e0ab9',
            ),
            text: contentData.getContent(
                '67caeb94-a487-4fa2-a377-5eaf0587ce0f',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                'bcac28c5-6a09-4fb6-8976-39cafa683391',
            ),
            text: contentData.getContent(
                'b8b1f6a7-8c39-452d-9302-4e3fe4fb789a',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '1d613142-38d4-4497-b6ab-afe1b392b618',
            ),
            text: contentData.getContent(
                '473bbbe0-3615-4bd6-8546-a04e69126a35',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                '4889dc09-00f7-4746-b703-f3119027a992',
            ),
            text: contentData.getContent(
                '7b58d2e3-423a-4218-9665-1197af85f278',
            ),
            linkTo: '',
        },
        {
            imageSrc: contentData.getContent(
                'f045a94a-10b9-42fe-89db-8a705069dece',
            ),
            text: contentData.getContent(
                '9d4f370a-5d32-4467-918c-1749d6946fb4',
            ),
            linkTo: '',
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '5a131174-4eb5-4cb7-a2f2-e82f01abad76',
                    )}
                </div>

                <div className="tw-grid tw-grid-cols-2 tw-gap-x-3 tw-gap-y-6 sm:tw-gap-6 sm:tw-grid-cols-3 lg:tw-grid-cols-4 lg:tw-gap-8">
                    <ItemBuilder
                        items={locations}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <Link to={item.linkTo}>
                                    <OneLinerCard
                                        key={itemIndex}
                                        img={item.imageSrc}
                                        title={item.text}
                                        className="sc-medium-shadow"
                                        textClass="tw-text-center"
                                    />
                                </Link>
                            );
                        }}
                    />
                </div>

                <div className="tw-hidden md:tw-grid tw-gap-6">
                    <div className="sc-text-title1">
                        {contentData.getContent(
                            '081ee6e9-c27e-4380-9821-7a7e14ecaa1d',
                        )}
                    </div>
                    <Link
                        to="/contact-us/locate-us"
                        className="sc-cta-button tw-w-fit">
                        {contentData.getContent(
                            '23ef4ae5-f24f-4c58-b054-8d5c482cf675',
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
}

function WhyChooseUs() {
    const contentData = useContext(ContentProviderContext);
    const data = [
        {
            imageSrc: contentData.getContent(
                '5e3a2c66-0b24-4984-a9bd-5a66b2c3daf3',
            ),
            title: contentData.getContent(
                'dce1f17a-14f9-4004-84e9-3e448902fc35',
            ),
            text: contentData.getContent(
                '0bcb8643-fc90-4a36-bc09-aa0ee7a953b6',
            ),
        },
        {
            imageSrc: contentData.getContent(
                'ef52f295-6e5f-4d3e-99d6-1bca84aaf993',
            ),
            title: contentData.getContent(
                '66c491e7-1b10-483a-a255-cdcc396fe8ae',
            ),
            text: contentData.getContent(
                'c111f42b-2578-40c4-8ba1-75f537a31bac',
            ),
        },
        {
            imageSrc: contentData.getContent(
                '5e16f94e-00c2-44a5-aacf-e92b42de9d95',
            ),
            title: contentData.getContent(
                '4c80d503-cc55-4ef5-9485-768ca87dc4df',
            ),
            text: contentData.getContent(
                'fca2f187-d797-4e4f-8378-ccde8398a21e',
            ),
        },
        {
            imageSrc: contentData.getContent(
                '6a8ff847-1994-45c7-9558-9bc1b6017a37',
            ),
            title: contentData.getContent(
                '93384b23-822f-44ce-9c75-9841c759d44c',
            ),
            text: contentData.getContent(
                'db1aef4f-67da-46f2-a904-c622c0fabf61',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge tw-bg-secondary-400 tw-py-10 lg:tw-py-20">
            <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'a32ae2b8-0405-4f50-bfa2-24e298fbdd3c',
                    )}
                </div>

                <div className="tw-grid tw-gap-4 tw-grid-flow-col tw-overflow-auto tw-py-6 tw-px-4">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <TwoLinerCard
                                    key={itemIndex}
                                    title={item.title}
                                    text={item.text}
                                    className="tw-w-[276px]"
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function CalculateHomeLoan({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const categories = [
        contentData.getContent('b8201b12-dba2-431b-8359-3ef4d39972cf'),
        contentData.getContent('14cd7ae9-79aa-41bd-9d49-d8a68129d0f3'),
        contentData.getContent('a7eb30f6-c8a0-41f2-a3cf-f2c93e47c1a8'),
        contentData.getContent('ff1dfcf5-072a-4665-948d-3c0ea870cf88'),
        contentData.getContent('cc8b619f-ab2f-484d-9241-2f948922936b'),
        contentData.getContent('a578ca87-0c37-4c54-9df1-58e281c22fd3'),
    ];
    const [selectedcategories, setSelectedCategories] = useState(categories[0]);
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-gap-4',
                className ? className : '',
            )}>
            <div className="tw-text-center sc-text-headline">
                {contentData.getContent('f9895948-5821-4fa2-8e8f-f7699c5fd848')}
            </div>
            <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 tw-justify-center tw-py-4">
                {categories.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`lg:tw-p-4 lg:tw-px-5 tw-p-3 tw-rounded-lg sc-text-button tw-h-full ${
                                selectedcategories === item
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() => setSelectedCategories(item)}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>
            <div className="sc-text-body tw-text-center sc-px-screen-edge">
                {contentData.getContent('c8e732e8-f66d-4f94-a2e3-c7ceecb312d4')}
            </div>
            <div className="sc-px-screen-edge">
                {selectedcategories === categories[0] ? (
                    <EmiCalculator />
                ) : selectedcategories === categories[1] ? (
                    <AffordabilityCalculatorCard />
                ) : selectedcategories === categories[2] ? (
                    ''
                ) : selectedcategories === categories[3] ? (
                    <PmayCalculatorCard />
                ) : selectedcategories === categories[4] ? (
                    ''
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent('3fd65bd1-a871-4e01-be79-93862786093b'),
            answer: contentData.getContent('643a170d-8fc8-45be-94b7-aac8fbd0bad9'),
        },
        {
            question: contentData.getContent('39d70b00-28b6-4985-8ed4-a34a734b4fd3'),
            answer: contentData.getContent('be28ed44-88ed-4733-9185-29cc42f76190'),
        },
        {
            question: contentData.getContent('9a077fd5-4eec-4400-b8ec-eac1f7c85f88'),
            answer: contentData.getContent('81ed7ee0-4807-44d6-86c0-e0687afff46a'),
        },
        {
            question: contentData.getContent('a974bbbe-da4b-4417-a7cc-a38953886533'),
            answer: contentData.getContent('c0ce2757-2d2c-4f95-9bdc-e4089dd22b3d'),
        },
        {
            question: contentData.getContent('63949015-a45d-4d25-8708-005d2974ddda'),
            answer: contentData.getContent('25d4b99e-6b8a-413c-a374-49f09bdc96e5'),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
