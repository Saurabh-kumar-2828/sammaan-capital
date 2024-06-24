import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {type LoaderFunction} from '@remix-run/node';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {AccordionComponents} from '~/components/reusableComponents/accordionComponents';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {TextWithCardSection} from '~/components/reusableSection/textWithCardLoanSection';
import {CardsInARow} from '~/components/reusableSection/cardsInARow';
import {CardType} from '~/typeDefinitions';
import {PerksSection} from '~/components/reusableSection/perksSection';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {ApprovedProjectsSection} from '~/components/reusableSection/approvedProjectsSection';
import {OurBlogSection} from '~/components/reusableSection/ourBlogSection';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request, params}) => {
    const pageIds = contentDataLatest.homeLoanInDelhi;
    const vernacularData = await getData(pageIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
    };
    return loaderData;
};

// export type ActionData = {
//     error: string | null;
// };

// export const action: ActionFunction = async ({request, params}) => {
//     const body = await request.formData();

//     const fullName = safeParse(getNonEmptyStringFromUnknown, body.get('name'));
//     const phoneNo = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('phoneNumber'),
//     );
//     // const otp = safeParse(getNonEmptyStringFromUnknown, body.get("otp"));
//     const pinCode = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('pinCode'),
//     );
//     const state = safeParse(getNonEmptyStringFromUnknown, body.get('state'));
//     const city = safeParse(getNonEmptyStringFromUnknown, body.get('city'));

//     // console.log(fullName, phoneNo, pinCode, state, city, "<<<<<>>>>>>>>>>>>>>>>>>");

//     if (
//         fullName == null ||
//         phoneNo == null ||
//         state == null ||
//         pinCode == null ||
//         city == null
//     ) {
//         const actionData: GenericActionData = {
//             error: 'Error in submitting form! Error code: 2a355407-ecbf-446d-9e00-96957d90592b',
//         };
//         return json(actionData);
//     }

//     const actionData: GenericActionData = {
//         error: null,
//     };

//     return json(actionData);
// };

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
                        <HomeLoanInDelhi />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function HomeLoanInDelhi() {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <HeroSection
                imgId="956035a8-8a98-42c7-9f6d-3c401e961ea1"
                bannerHeadingId="479e88c5-edbd-445c-a3e5-90c1a0b49ba9"
                ctaTextId="2166b39f-c403-487c-8eb3-ee3e96a7d11c"
            />

            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Home Loan', link: '#'},
                    {contentId: 'Home Loan in Delhi', link: '#'},
                ]}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <TextWithCardSection
                heading="f4483ffd-d0bf-4526-be3c-a74f9ea39b32"
                description="6c64efd5-074d-4318-ae8d-dc65556941a4"
                cardText="b12a7600-71f0-49bd-b9e2-db1802c4c9a9"
                cardIntrestRate="0f415ec3-9c08-4ff8-af69-a03afb3cfb15"
                buttonText="04fceaf5-6e5f-47da-a9cf-552e8d6c28ad"
                condition1="cd9f5856-fe89-4c93-907c-0e97a4086961"
                condition2="066dc516-05e7-449b-97f3-cc5b95b11f1e"
                buttonLink="/product/loan-against-property"
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <CardsInARow
                cardType={CardType.TwoLinerCard}
                sectionHeadingId="82a919d8-c9b4-4fc5-9986-cb437ca052b5"
                dataId="17c18f74-6ac3-4bb1-8d67-c64fce269411"
                background={true}
            />

            <PerksSection
                dataId="3be3763f-3e36-4fe5-b50b-9976f7b7d589"
                headingId="9ae91a08-3e2d-481e-9a89-c7a89d590d89"
            />

            {/* <StepsToTakeHomeLoan /> */}
            <CardsInARow
                cardType={CardType.TwoLinerCardWithNumber}
                sectionHeadingId="fbd15115-0442-4cd2-9e90-2396c2f80432"
                dataId="7ae93250-573b-45b0-b50b-4c034102fc69"
                background={true}
                ctaTextId="00899fd2-25a6-4614-bbdb-382502387e57"
                ctaLinkId="#"
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <ApprovedProjects />

            <div className="lg:tw-h-20 tw-h-10" />

            <ResourceCenter />

            <div className="lg:tw-h-20 tw-h-10" />

            <FaqSection />

            <div className="lg:tw-h-20 tw-h-10" />

            <OurBlogs />

            <div className="lg:tw-h-20 tw-h-10" />

            <HelpSection
                className="sc-px-screen-edge"
                heading={contentData.getContent(
                    '067e8cff-3da6-4629-8ad6-c2e5a82532ee',
                )}
                subHeading={contentData.getContent(
                    '625a8751-ab4e-48a4-aec5-ad351c23ab3c',
                )}
                contentData={contentData}
            />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function ResourceCenter() {
    const contentData = useContext(ContentProviderContext);
    const data = [
        {
            title: contentData.getContent(
                '0eefbde7-05ed-4088-911e-2ff41d5228b4',
            ),
            description: contentData.getContent(
                'f8b03914-ae9f-46bc-a9b6-41ba1bbce434',
            ),
        },
        {
            title: contentData.getContent(
                '8f2efaeb-a3d3-4ff9-891d-c14cd536483f',
            ),
            description: contentData.getContent(
                'b9cce67b-677e-42e8-ac6b-d737534077ad',
            ),
        },
        {
            title: contentData.getContent(
                'cf56a411-8190-4384-9d00-f0eeda6f969f',
            ),
            description: contentData.getContent(
                '7eeb2ae4-db50-4966-a1fa-fc5403104ecc',
            ),
        },
        {
            title: contentData.getContent(
                '6229d63a-3605-4382-a232-f4383f94f763',
            ),
            description: contentData.getContent(
                '98e1f4db-0683-48b5-ac68-d63f2f04e619',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge tw-bg-secondary-400 tw-py-10 lg:tw-py-20">
            <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'b645d628-70db-4b78-acd9-62b5dee662c9',
                    )}
                </div>

                <AccordionComponents items={data} />
            </div>
        </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                '664cd778-b7a0-47ce-80b4-b22b25e0a579',
            ),
            answer: contentData.getContent(
                'dfeac806-514a-43d8-8b89-53d97fc76d5e',
            ),
        },
        {
            question: contentData.getContent(
                '646d9eb9-942f-4295-adc5-6d24580c06b1',
            ),
            answer: contentData.getContent(
                '00e53335-498e-4cfb-9902-2c8a14030323',
            ),
        },
        {
            question: contentData.getContent(
                'b1e4d7bb-efba-4d56-8a12-78288e89c022',
            ),
            answer: contentData.getContent(
                '38f35026-ff5f-4a23-a521-767c241a8aba',
            ),
        },
        {
            question: contentData.getContent(
                '6ff5a1a2-bf01-4120-90c4-7bfc95ed106a',
            ),
            answer: contentData.getContent(
                '9f779e4b-033d-4e33-a76e-fc22a20e0740',
            ),
        },
        {
            question: contentData.getContent(
                '2d1126a4-4c41-4525-99b6-685b5f9c6f78',
            ),
            answer: contentData.getContent(
                'ce8e51ef-85ea-4dc6-9e84-d6da47c561b3',
            ),
        },
        {
            question: contentData.getContent(
                '9763de9f-3446-443a-a1aa-9a77e4ce38b1',
            ),
            answer: contentData.getContent(
                'bdef1636-34d2-4f02-807b-6443d3b12c4e',
            ),
        },
        {
            question: contentData.getContent(
                '678904ef-a977-468a-a4b7-94fc324d6f57',
            ),
            answer: contentData.getContent(
                '8e8eba95-12be-486e-9285-903015a8b002',
            ),
        },
        {
            question: contentData.getContent(
                'db770619-f1ea-499f-a4c4-8d5dc7e54a73',
            ),
            answer: contentData.getContent(
                '6d2104cc-ac28-4162-8de1-9ca089d8951a',
            ),
        },
        {
            question: contentData.getContent(
                '32504637-d982-4a3b-bcd8-67d1ff49f519',
            ),
            answer: contentData.getContent(
                'a7a5e38a-9f96-4cf3-bcae-fd711ea62829',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent
                items={faqs}
                sectionHeading={contentData.getContent(
                    '2cb75c1d-b221-4178-8a23-dbeedaf59cdd',
                )}
            />
        </div>
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            img: contentData.getContent('1e6b763a-b897-44a7-ba5a-d570bc51e146'),
            title: contentData.getContent(
                '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            ),
            text: contentData.getContent(
                '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            ),
            date: contentData.getContent(
                '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            ),
        },
        {
            img: contentData.getContent('1e6b763a-b897-44a7-ba5a-d570bc51e146'),
            title: contentData.getContent(
                '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            ),
            text: contentData.getContent(
                '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            ),
            date: contentData.getContent(
                '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            ),
        },
        {
            img: contentData.getContent('1e6b763a-b897-44a7-ba5a-d570bc51e146'),
            title: contentData.getContent(
                '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            ),
            text: contentData.getContent(
                '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            ),
            date: contentData.getContent(
                '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            ),
        },
        {
            img: contentData.getContent('1e6b763a-b897-44a7-ba5a-d570bc51e146'),
            title: contentData.getContent(
                '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            ),
            text: contentData.getContent(
                '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            ),
            date: contentData.getContent(
                '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            ),
        },
        {
            img: contentData.getContent('1e6b763a-b897-44a7-ba5a-d570bc51e146'),
            title: contentData.getContent(
                '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            ),
            text: contentData.getContent(
                '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            ),
            date: contentData.getContent(
                '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            ),
        },
        {
            img: contentData.getContent('1e6b763a-b897-44a7-ba5a-d570bc51e146'),
            title: contentData.getContent(
                '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            ),
            text: contentData.getContent(
                '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            ),
            date: contentData.getContent(
                '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            ),
        },
    ];
    return (
        <OurBlogSection heading={contentData.getContent("0fdeb70d-9b47-447b-bbed-31f867e82281")} items={blogs}/>
    );
}

function ApprovedProjects({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const projects = [
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'Gurugaon',
            imageUrl: '',
            title: 'Dlf Crest',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5t',
        },
        {
            location: 'New Delhi',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'New Delhi',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'New Delhi',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'New Delhi',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'New Delhi',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'Mumbai',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'Mumbai',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'Mumbai',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'Mumbai',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'Mumbai',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
        {
            location: 'Mumbai',
            imageUrl: '',
            title: 'chintels India Ltd.',
            address: 'The Crest, Zone 11 & 12, DLF City Phase-5.',
        },
    ];
    return (
        <ApprovedProjectsSection
            headingId="44409371-bfd5-4c70-975b-cdf2e6bce5d9"
            projects={projects}
            contentData={contentData}
        />
    );
}
