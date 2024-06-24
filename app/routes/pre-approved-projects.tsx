import {useContext, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {Search} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {ApprovedProjectsCard} from '~/components/componentLibrary/reusableCards/approvedProjectsCard';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('preApprovedProjects');

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
                        <PreApprovedProjectsPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function PreApprovedProjectsPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Home Loan', link: '/product/home-loan'},
                    {contentId: 'Pre Approved Projects', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <PreApprovedProjects />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function PreApprovedProjects() {
    const contentData = useContext(ContentProviderContext);
    const [query, setQuery] = useState('');
    const approvedProjects = [
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Greater Kailash Luxury Rooms',
            typeOfFlat: '3, 4 BHK Flats',
            price: '₹ 48 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Greater Kailash, New Delhi',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
        {
            projectName: 'Haryana Luxury Rooms',
            typeOfFlat: '2, 3 BHK Flats',
            price: '₹ 35 Lac onwards',
            buttonText: 'Contact Now',
            buttonLink: '#',
            address: 'Jindal Chowk, Hisar',
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '69b05378-455e-4637-96c6-f9b4540d12c8',
                    )}
                </div>

                <div className="tw-grid tw-gap-6">
                    <div className="tw-relative">
                        <input
                            className="sc-text-input"
                            placeholder={contentData.getContent('')}
                            type="text"
                            onChange={e => setQuery(e.target.value)}
                        />
                        <div className="tw-absolute tw-top-0 tw-right-5 tw-h-full tw-flex tw-items-center">
                            <Search />
                        </div>
                    </div>

                    <div className='tw-grid tw-gap-3 md:tw-gap-5 xl:tw-gap-8 tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
                        <ItemBuilder
                            items={approvedProjects}
                            itemBuilder={(item, itemIndex) => {
                                return <ApprovedProjectsCard key={itemIndex} projectName={item.projectName} typeOfFlat={item.typeOfFlat} price={item.price} buttonText={item.buttonText} buttonLink={item.buttonLink} />;
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
