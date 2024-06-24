import {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useEffect, useState} from 'react';
import {
    contentData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {PdfDownloadCard} from '~/components/componentLibrary/reusableCards/pdfDownloadCard';
import {PdfDownloadWithDateCard} from '~/components/componentLibrary/reusableCards/pdfDownloadWithDateCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

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
    // const userPreferences =
    //     await getUserPreferencesFromCookiesAndUrlSearchParameters(request);
    // if (userPreferences instanceof Error) {
    //     throw userPreferences;
    // }

    const vernacularData = getVernacularFromBackend('saleNotice');

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
                        <SaleNotice />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function SaleNotice() {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: "Home",
                        link: "/",
                    },
                    {
                        contentId: "Sales Notice",
                        link: "#",
                    },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <SaleNoticeSection />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function SaleNoticeSection() {
    const contentData = useContext(ContentProviderContext);

    const states = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Lakshadweep',
        'Delhi',
        'Puducherry',
    ];

    const years = [
        '2015',
        '2016',
        '2017',
        '2018',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const [selectedStates, setSelectedStates] = useState('');
    const [selectedYears, setSelectedYears] = useState('');
    const [selectedMonths, setSelectedMonths] = useState('');

    const [filteredNotices, setFilteredNotices] = useState(notices);

    useEffect(() => {
        const filteredData = notices.filter(item => {
            const selectedState = item.state;
            const selectedYear = item.year;
            const selectedMonth = item.month;
            return (
                selectedState.toLocaleLowerCase() ===
                    selectedStates.toLocaleLowerCase() &&
                selectedYear === selectedYears &&
                selectedMonth.toLocaleLowerCase() ===
                    selectedMonths.toLocaleLowerCase()
            );
        });

        setFilteredNotices(filteredData);
    }, [selectedStates, selectedMonths, selectedYears]);

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="sc-text-headline tw-text-center tw-text-secondary-800">
                    {contentData.getContent(
                        'de6b3a39-7ebd-4716-85a1-53161ca8eb46',
                    )}
                </div>
                <VerticalSpacer className="lg:tw-h-4 tw-h-6" />
                <div className="sc-text-title2 tw-text-center tw-text-secondary-600">
                    {contentData.getContent(
                        '415fd990-4dfc-4711-856b-09d7a98314b6',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid lg:tw-grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] tw-grid-cols-1 tw-gap-4 lg:tw-gap-6">
                    <SelectComponent
                        items={states}
                        placeholderClassName="sc-text-title2 tw-text-secondary-600"
                        itemBuilder={item => {
                            return item == '' ? 'Selection State' : item;
                        }}
                        value={selectedStates}
                        setValue={item => {
                            if (item != '') {
                                setSelectedStates(item);
                                return;
                            }

                            setSelectedStates('');
                        }}
                        buttonClassName="max-sm:tw-min-w-[unset] sc-small-shadow"
                        className="lg:tw-justify-self-end tw-w-full lg:tw-w-fit"
                    />
                    <SelectComponent
                        items={years}
                        placeholderClassName="sc-text-title2 tw-text-secondary-600"
                        itemBuilder={item => {
                            return item == '' ? 'Selection Year' : item;
                        }}
                        value={selectedYears}
                        setValue={item => {
                            if (item != '') {
                                setSelectedYears(item);
                                return;
                            }

                            setSelectedYears('');
                        }}
                        buttonClassName="max-sm:tw-min-w-[unset] sc-small-shadow"
                        className="tw-w-full lg:tw-w-fit"
                    />
                    <SelectComponent
                        items={months}
                        placeholderClassName="sc-text-title2 tw-text-secondary-600"
                        itemBuilder={item => {
                            return item == '' ? 'Selection Month' : item;
                        }}
                        value={
                            selectedMonths
                                ? months.filter(item =>
                                      item.includes(selectedMonths),
                                  )[0]
                                : ''
                        }
                        setValue={item => {
                            if (item != '') {
                                setSelectedMonths(item.slice(0, 3));
                                return;
                            }

                            setSelectedMonths('');
                        }}
                        buttonClassName="max-sm:tw-min-w-[unset] sc-small-shadow"
                        className="tw-justify-self-start tw-w-full lg:tw-w-fit"
                    />
                </div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <div className="tw-grid tw-grid-cols-2 md:tw-gap-x-10 md:tw-gap-y-8 tw-gap-x-2 tw-gap-y-4">
                    <ItemBuilder
                        items={filteredNotices}
                        itemBuilder={(item, itemIndex) => (
                            <PdfDownloadWithDateCard
                                key={itemIndex}
                                date={item.date}
                                year={item.year}
                                month={item.month}
                                text={item.text}
                                link={item.link}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

const notices = [
    {
        date: '14',
        month: 'Nov',
        year: '2023',
        text: 'Loan Application Form - For Resident Indian...',
        link: '#',
        state: 'Andhra Pradesh',
    },
    {
        date: '14',
        month: 'Nov',
        year: '2018',
        text: 'Loan Application Form - For Resident Indian...',
        link: '#',
        state: 'Goa',
    },
    {
        date: '22',
        month: 'May',
        year: '2023',
        text: 'Loan Application Form - For Resident Indian...',
        link: '#',
        state: 'Goa',
    },
    {
        date: '22',
        month: 'May',
        year: '2020',
        text: 'Loan Application Form - For Resident Indian...',
        link: '#',
        state: 'Goa',
    },
    {
        date: '22',
        month: 'Aug',
        year: '2020',
        text: 'Loan Application Form - For Resident Indian...',
        link: '#',
        state: 'Delhi',
    },
    {
        date: '26',
        month: 'Nov',
        year: '2023',
        text: 'Loan Application Form - For Resident Indian...',
        link: '#',
        state: 'Delhi',
    },
];
