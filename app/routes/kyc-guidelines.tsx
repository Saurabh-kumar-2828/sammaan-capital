import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {type LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {Link, useLoaderData} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('kycGuidelines');

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
                        <KycGuidelinesPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function KycGuidelinesPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},

                    {contentId: 'KYC Guidelines', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <KycGuidelines />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function KycGuidelines() {
    const contentData = useContext(ContentProviderContext);
    const kycData = [
        {
            title: 'KYC & AML Policy English...',
            link: '#',
        },
        {
            title: 'KYC & AML Policy Hindi...',
            link: '#',
        },
        {
            title: 'KYC Declaration non Individual...',
            link: '#',
        },
        {
            title: 'KYC & AML Policy English...',
            link: '#',
        },
        {
            title: 'Online KYC Updation...',
            link: '#',
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '6bc5d08e-0284-4d29-9377-ee26d314f5c6',
                    )}
                </div>

                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                <div className="tw-grid tw-grid-cols-2 tw-gap-2 md:tw-gap-4 lg:tw-gap-8">
                    <ItemBuilder
                        items={kycData}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <Link
                                    to={item.link}
                                    download
                                    key={itemIndex}
                                    className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-bg-secondary-200 tw-border-[0.727px] tw-border-secondary-100 sc-medium-shadow tw-p-3 tw-rounded-lg tw-items-center tw-gap-2">
                                    <div className="sc-text-caption">
                                        {item.title}
                                    </div>
                                    <div className="tw-bg-[#FF8D28] tw-w-12 tw-h-16 sm:tw-justify-self-end tw-row-start-1 sm:tw-col-start-2 tw-rounded-lg"></div>
                                </Link>
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
