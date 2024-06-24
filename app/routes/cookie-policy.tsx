import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export const meta: MetaFunction = () => {
    return [
        {title: 'Cookie Policy'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('cookiePolicy');

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData} = useLoaderData() as LoaderData;
    return (
        <>
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <CookiePolicyPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function CookiePolicyPage() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="">
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Cookie Policy', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <div className="sc-text-headline tw-text-center">
                {contentData.getContent('1f9ab273-7183-40a2-91cc-0cc59053e959')}
            </div>
            <VerticalSpacer className="tw-h-10" />
            <div className="sc-px-screen-edge">
                <div className="tw-grid tw-gap-10 tw-max-w-7xl tw-mx-auto">
                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                'e5c76b8f-1aa1-47b5-9dae-25612157e08f',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '33bc0e49-6a77-44c2-ae1a-0bc44c9f295f',
                            )}
                        </div>
                    </div>
                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                '8d993039-249a-4c5e-bbdf-7467aaeeffc8',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '4e0c1fba-e741-49e1-aac9-e9bde3b741ed',
                            )}
                        </div>
                    </div>
                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                'e9182861-1b20-4749-8d04-5dbea9a41f86',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            <div>
                                {contentData.getContent(
                                    'af749d48-63e7-4372-a31f-396bd5a345a8',
                                )}
                            </div>
                            <div>
                                {contentData.getContent(
                                    '292a73d4-2007-404d-a414-fd3d939371c1',
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                '36a46b60-799f-4785-b409-6feb5dbef8ef',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '93169364-fd75-4bd2-968e-ff48cfba5ec4',
                            )}
                        </div>
                    </div>
                    <div className="">
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '33368d71-fb7f-4d09-a8b8-dba3a40c73c9',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '1bd50c4d-5347-41f2-b21f-d978c9353d67',
                            )}
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-2">
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title1 tw-text-secondary-200 tw-border-b tw-border-b-secondary-600 tw-bg-secondary-800">
                            {contentData.getContent(
                                '39de2558-ffab-4771-8a50-31bece243de7',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title1 tw-text-secondary-200 tw-border-b tw-border-b-secondary-600 tw-bg-secondary-800">
                            {contentData.getContent(
                                '986662ff-5e9f-4a8c-a831-9cc538e023f8',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                '8f4b3c1e-134a-42e4-a695-43fa5a5cf7e9',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                '768e86f1-99e7-4e9f-99b2-166bfe1d4b66',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                'e33316c6-6b3a-4ec2-8968-ac554e5a924c',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                '6da059b6-6e44-4322-90c0-e254f67738ae',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                'a425d2dc-f15d-4767-8671-236c47abf897',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                '1000b77c-98ce-4a70-ba9d-94adcfba6427',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                'ddcdd0a8-54bb-494a-90c9-33cafa2cd156',
                            )}
                        </div>
                        <div className="tw-p-3 lg:tw-p-6 sc-text-title2 tw-text-secondary-600 tw-border-b tw-border-b-secondary-600">
                            {contentData.getContent(
                                '3297ea1b-c3bf-4161-ada9-7edb24e7f0fe',
                            )}
                        </div>
                    </div>

                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '9edf98cd-79bc-4da6-8eb7-664faf742f33',
                        )}
                    </div>

                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                '9b1e151f-47c7-4c47-96bc-a6bca369b0f9',
                            )}
                        </div>
                        <div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    'ec9470ec-1d71-42e0-83c5-0da80732d882',
                                )}
                            </div>
                            <ul className="tw-list-disc tw-pl-8">
                                <li>
                                    <div className="sc-text-title2 tw-font-bold tw-text-secondary-600">
                                        {contentData.getContent(
                                            'e479eacc-f726-427d-b2ac-004f4abc211b',
                                        )}
                                    </div>
                                    <div className="sc-text-title2 tw-text-secondary-600">
                                        {contentData.getContent(
                                            'ce13291b-4917-4d40-9266-811de82ca4dc',
                                        )}
                                    </div>
                                </li>
                                <li>
                                    <div className="sc-text-title2 tw-font-bold tw-text-secondary-600">
                                        {contentData.getContent(
                                            '8650d742-31da-4da8-bc72-8ba2939d6109',
                                        )}
                                    </div>
                                    <div className="sc-text-title2 tw-text-secondary-600">
                                        {contentData.getContent(
                                            '1e229514-6c4b-49a5-aa46-8f84d520c673',
                                        )}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                '158cf68b-7848-4bb7-a636-1141ae9e8b20',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '263f44ae-a073-4108-84f0-3de7c9a28e76',
                                )}
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '5bfecde3-0538-483d-a452-bfc2182b4c30',
                                )}
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    'e62e11d9-6592-4acb-9621-65adf460c87b',
                                )}
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '7fb99d9a-159f-4360-8d32-c97a2c255e3e',
                                )}
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    'f292248c-c7d9-41e2-bb67-0a704cb79a87',
                                )}{' '}
                                <a className='tw-underline' href="https://www.facebook.com/policy.php">
                                    {contentData.getContent('1be421d0-f21c-4b49-a890-788af7a58eb0')}
                                </a>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    'bcd1a9b8-559e-4208-b46f-751c5a28ab8c',
                                )}{' '}
                                <a className='tw-underline' href="https://policies.google.com/technologies/ads">
                                    {contentData.getContent('106aff3f-34ea-4d20-b4d4-d466ca6a2ecb')}
                                </a>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '423fd173-253b-4620-bb1e-95907d4e527a',
                                )}{' '}
                                <a className='tw-underline' href="http://www.google.com/analytics/learn/privacy.html">
                                    {contentData.getContent('28ba6ce9-95e5-45ae-8581-ca505836ee33')}
                                </a>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '0e0b25b2-02a1-4860-aff4-96491069d20c',
                                )}{' '}
                                <a className='tw-underline' href="https://www.google.com/analytics/tag-manager/faq/">
                                    {contentData.getContent('59506535-8a10-4e11-9694-e24833b8d884')}
                                </a>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '8c8b36a9-ef55-4527-b929-e82783723b81',
                                )}{' '}
                                <a className='tw-underline' href="https://www.google.com/policies/privacy/">
                                    {contentData.getContent('cf4f915b-137d-4d59-b8df-34f3950962a2')}
                                </a>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '17ca8f82-480b-4289-9f87-9b2d8239c82e',
                                )}{' '}
                                <a className='tw-underline' href="https://twitter.com/en/privacy">
                                    {contentData.getContent('502ca30d-5866-4aa2-8145-e0ca0d7963e9')}
                                </a>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '9371b41c-d886-4101-8f41-414a5758cc54',
                                )}{' '}
                                <a className='tw-underline' href="https://support.google.com/dfp_premium/answer/2839090?hl=en">
                                    {contentData.getContent('a4937708-0546-4fff-af96-48065fd6c8cd')}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="tw-grid tw-gap-3 lg:tw-gap-1">
                        <div className="sc-text-title-bold">
                            {contentData.getContent(
                                'b9120d2b-c9bb-453b-b9f4-8ea24aaed984',
                            )}
                        </div>
                        <div className='tw-grid tw-gap-5'>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                <div>
                                    {contentData.getContent(
                                        '9ca7c6e5-a118-44d5-b254-b66ad1bbd54d',
                                    )}
                                </div>
                                <div>
                                    {contentData.getContent(
                                        '1e2276c3-8c9f-4008-9338-16f618e20403',
                                    )}
                                </div>
                                <div>
                                    {contentData.getContent(
                                        'cfac5dba-3ccc-42e2-b4bb-42af3cb389d7',
                                    )}
                                </div>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                <div>
                                    <span className="tw-font-bold">
                                        {contentData.getContent(
                                            '365c1045-d655-49cc-a008-612159e0a488',
                                        )}
                                    </span>{" "}
                                    {contentData.getContent(
                                        '0127613a-ba26-4359-85a0-1ed86ae70494',
                                    )}
                                </div>
                                <div>
                                    {contentData.getContent(
                                        '92c6f477-7912-4b4a-985f-288365d23736',
                                    )}
                                </div>
                                <div>
                                    {contentData.getContent(
                                        'd43f956a-f0c8-4013-a875-e52a9fb0d05a',
                                    )}
                                </div>
                                <div>
                                    {contentData.getContent(
                                        '7bb6c4b3-d61b-42a1-8849-d3afee04024c',
                                    )}
                                </div>
                                <div>
                                    {contentData.getContent(
                                        'db291f21-8f9e-41d0-b1be-158b6f24f754',
                                    )}
                                </div>
                            </div>
                            <div className="sc-text-title2 tw-text-secondary-600">
                                <span className="tw-font-bold">
                                    {contentData.getContent(
                                        '25683229-7667-41b7-a97b-1ce56386992a',
                                    )}
                                </span>{" "}
                                {contentData.getContent(
                                    '90389afe-f1e7-43cf-a0f3-1d7a3c32f92d',
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VerticalSpacer className='tw-h-10 lg:tw-h-20' />
        </div>
    );
}
