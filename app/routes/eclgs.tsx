import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';

export const meta: MetaFunction = () => {
    return [
        {title: 'New Remix App'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('eclgs');
    const pageIds = contentDataLatest.eclgs;

    const vernacularData = await getData(pageIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        // redirectTo: getRedirectToUrlFromRequest(request),
        // pageUrl: getUrlFromRequest(request),
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
                        <Eclgs />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function Eclgs() {
    return (
        <>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: 'Home',
                        link: '/',
                    },
                    {
                        contentId: 'eclgs',
                        link: '#',
                    },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <EclgsSections />

            <VerticalSpacer className="lg:tw-h-40 tw-h-20" />

            <FaqSection />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </>
    );
}

function EclgsSections() {
    const contentData = useContext(ContentProviderContext);

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="sc-text-banner tw-text-secondary-800 tw-text-center">
                    {contentData.getContent(
                        'b27952cf-42e5-4fdc-8bc4-ee402f959c23',
                    )}
                </div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <div className="sc-text-title1 tw-text-secondary-800 tw-text-center">
                    {contentData.getContent(
                        'fcb9ed2a-81ed-493e-be9c-16d8c3bd82c9',
                    )}
                </div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />

                <ReactMarkdown
                    components={reactMarkdownComponents}
                    className={concatenateNonNullStringsWithSpaces(
                        'sc-text-title2 tw-text-secondary-600',
                    )}>
                    {contentData.getContent("50060663-78ac-4577-ae7d-bdd99eb9d79d")}
                </ReactMarkdown>
            </div>
        </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                'e78cff3c-7102-44a0-a442-143671d1915b',
            ),
            answer: contentData.getContent(
                'cd13e9d7-fa97-43a6-9367-14c23683ce82',
            ),
        },
        {
            question: contentData.getContent(
                '3cd6b8ee-d70c-4574-bd16-252dd044e7a5',
            ),
            answer: contentData.getContent(
                'd1d43930-bcda-4d7f-9304-699950ef8c54',
            ),
        },
        {
            question: contentData.getContent(
                '1eb343a4-56e4-4b5f-a011-bf779b3cc10e',
            ),
            answer: contentData.getContent(
                '30f5643a-0b4a-47ce-9c1f-274bbee6dab4',
            ),
        },
        {
            question: contentData.getContent(
                '36a3d7db-78f2-4ebd-bf95-2466eb8d7135',
            ),
            answer: contentData.getContent(
                '4220e1ff-4cf3-48c3-b466-78624490df8b',
            ),
        },
        {
            question: contentData.getContent(
                '0ef7c525-765e-4726-b68e-903aefa28d47',
            ),
            answer: contentData.getContent(
                'acfbe565-32cf-44c4-9f12-7b5115c09596',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} showFaqPageLink={true} />
        </div>
    );
}
