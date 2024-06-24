import {useContext, useEffect, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {
    contentDataLatest,
    getData,
    getFaqs,
} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {LocationCard} from '~/components/componentLibrary/reusableCards/locationCard/locationCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {statesAndCities} from '~/backend/stateAndCity';
import type {Faqs, StatesAndCities} from '~/typeDefinitions';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import {PageScaffold2} from '~/components/pageScaffold2';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
    statesAndCities: StatesAndCities;
    states: Array<string>;
    faqs: Faqs;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.locateUs;

    const vernacularData = await getData(pageIds);

    const cities: {[state: string]: Array<string>} = statesAndCities;
    const states = Object.keys(cities);

    const faqsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == '0c869f44-abf4-4990-8590-9dc7a717b7ea',
        )[0].text,
    );

    const faqs = await getFaqs(faqsIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        statesAndCities: cities,
        states: states,
        faqs: faqs,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData, statesAndCities, states, faqs} =
        useLoaderData() as LoaderData;
    return (
        <>
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold2>
                        <LocateUsPage
                            states={states}
                            statesAndCities={statesAndCities}
                            faqs={faqs}
                        />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function LocateUsPage({
    statesAndCities,
    states,
    faqs,
}: {
    statesAndCities: StatesAndCities;
    states: Array<string>;
    faqs: Faqs;
}) {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Locate Us', link: '#'},
                ]}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <FindNearestBranch
                states={states}
                statesAndCities={statesAndCities}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <HeadOffice />

            <div className="lg:tw-h-20 tw-h-10" />

            <FaqsSectionComponent items={faqs} showFaqPageLink={true} />

            <div className="lg:tw-h-20 tw-h-10" />

            {/* <PerksAtSammaanCapital /> */}

            {/* <div className="lg:tw-h-20 tw-h-10" /> */}
        </>
    );
}

function FindNearestBranch({
    statesAndCities,
    states,
}: {
    statesAndCities: StatesAndCities;
    states: Array<string>;
}) {
    const contentData = useContext(ContentProviderContext);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [showAll, setShowAll] = useState(false);

    const data = [
        {
            heading: 'Location 1',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 2',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 3',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 4',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 5',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 6',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 7',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 8',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 9',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
        {
            heading: 'Location 10',
            address:
                '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
            phoneNo: '6541254569',
            link: '/',
            state: 'Delhi',
            city: 'New Delhi',
        },
    ];

    const relevantData = data.filter(
        item => item.state == selectedState && item.city == selectedCity,
    );

    const pageCards = showAll ? relevantData : relevantData.slice(0, 6);

    return (
        <div className="tw-w-full sc-px-screen-edge tw-grid tw-gap-10">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,4fr)_minmax(0,3fr)] tw-gap-8 tw-items-center">
                <GoogleMapView />
                <div className="tw-grid tw-gap-6 lg:tw-gap-4">
                    <div className="tw-text-center sc-text-headline">
                        {contentData.getContent(
                            'c920b62b-bdae-4ca8-8c75-c2f0f295c491',
                        )}
                    </div>
                    <div className="tw-grid tw-gap-2 md:tw-flex md:tw-gap-6 tw-w-full">
                        <div className="tw-w-full">
                            <SelectComponent
                                items={states}
                                itemBuilder={item => {
                                    return item == ''
                                        ? contentData.getContent(
                                              '7318d167-990c-42ba-9bb0-a147f99a277a',
                                          )
                                        : item;
                                }}
                                value={selectedState}
                                placeholder="Select State"
                                setValue={item => {
                                    if (item != '') {
                                        setSelectedState(item);
                                        setSelectedCity('');
                                        return;
                                    }

                                    setSelectedState('');
                                }}
                                buttonClassName="tw-rounded-lg sc-small-shadow tw-gap-0 lg:tw-px-[0.5rem]"
                                widthFit={true}
                                className="tw-w-full"
                            />
                        </div>
                        <div className="tw-w-full">
                            <SelectComponent
                                items={
                                    selectedState
                                        ? statesAndCities[selectedState]
                                        : ['']
                                }
                                itemBuilder={item => {
                                    return item == ''
                                        ? contentData.getContent(
                                              '75cd8937-8232-4660-a50d-bca28c922cee',
                                          )
                                        : item;
                                }}
                                value={selectedCity}
                                placeholder="Select City"
                                setValue={item => {
                                    if (item != '') {
                                        setSelectedCity(item);
                                        return;
                                    }

                                    setSelectedCity('');
                                }}
                                disabled={selectedState == ''}
                                buttonClassName="tw-rounded-lg sc-small-shadow tw-gap-0 lg:tw-px-[0.5rem]"
                                widthFit={true}
                                className="tw-w-full"
                            />
                        </div>
                    </div>
                    <div className="sc-text-title2 tw-text-center">
                        {contentData.getContent(
                            '5ec4f853-5003-445f-b2dd-0fb2df5786b0',
                        )}
                    </div>
                    <button className="sc-cta-button tw-grid tw-justify-self-center">
                        {contentData.getContent(
                            '98b682d4-677d-455a-8d73-ee7246897147',
                        )}
                    </button>
                </div>
            </div>
            <div className="tw-grid tw-gird-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 ">
                <ItemBuilder
                    items={pageCards}
                    itemBuilder={(item, itemIndex) => {
                        return (
                            <LocationCard
                                key={itemIndex}
                                heading={item.heading}
                                address={item.address}
                                phoneNo={item.phoneNo}
                                link={item.link}
                                linkText="Get Direction"
                            />
                        );
                    }}
                />
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'sc-cta-button tw-w-fit tw-m-auto tw-px-20',
                    Math.ceil(relevantData.length / 6) > 1 ? '' : 'tw-hidden',
                )}
                onClick={() => setShowAll(!showAll)}>
                {showAll ? 'See Less' : 'See More'}
            </div>
        </div>
    );
}

function HeadOffice() {
    const contentData = useContext(ContentProviderContext);
    const data = [
        {
            heading: contentData.getContent(
                'cd4e15e2-4f38-48db-a3fb-e349c3eb49cf',
            ),
            address: contentData.getContent(
                'e9c2ed29-89a6-4b75-9d5c-ffe51d0d0f6a',
            ),
            phoneNo: contentData.getContent(
                '3e5b1418-e98c-423a-b2ab-bcf9d4c3544e',
            ),
            link: contentData.getContent(
                '7686f795-f464-4f6c-b521-4b2b8d37ce3a',
            ),
        },
        {
            heading: contentData.getContent(
                '86478602-aff8-4dbf-b0dc-002d6db53102',
            ),
            address: contentData.getContent(
                '76d6e279-859d-4a2f-a12c-809305343f21',
            ),
            phoneNo: contentData.getContent(
                '661293a3-776f-48ac-98bc-319efe4c02ff',
            ),
            link: contentData.getContent(
                'b26b54ee-8891-42a3-9fb3-722d5b597c8b',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-m-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'b2f12e97-f95a-4ce1-a73f-1aedc8acd25c',
                    )}
                </div>

                <VerticalSpacer className="tw-h-2 lg:tw-h-4" />

                <div className="tw-text-secondary-600 sc-text-title2 tw-text-center tw-max-w-[750px] tw-mx-auto">
                    {contentData.getContent(
                        '3764919d-2880-4c40-a963-3e69999ee6fe',
                    )}
                </div>

                <VerticalSpacer className="tw-h-4 lg:tw-h-8" />

                <div className="tw-grid tw-gird-cols-1 sm:tw-grid-cols-2 tw-gap-4 lg:tw-gap-8">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <LocationCard
                                    key={itemIndex}
                                    heading={item.heading}
                                    address={item.address}
                                    phoneNo={item.phoneNo}
                                    link={item.link}
                                    linkText="Get Direction"
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function GoogleMapView() {
    const libraries = ['places'];
    const mapContainerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        class: 'tw-rounded-lg',
    };
    const center = {
        lat: 28.964109,
        lng: 77.74144,
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyA0DUwYgpbnSjeUpjDxjUVcNEFTEvur4i4',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }
    return (
        <div className="tw-w-full tw-h-[25rem]">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}>
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}
