import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useEffect, useState} from 'react';
import {Download} from 'react-bootstrap-icons';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {PdfDownloadWithDateCard} from '~/components/componentLibrary/reusableCards/pdfDownloadWithDateCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

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

    const vernacularData = getVernacularFromBackend('downloadsPage');

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
                        <DownloadsPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function DownloadsPage() {
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
                        contentId: "Downloads",
                        link: "#",
                    },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <DownloadSection />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function DownloadSection() {
    const contentData = useContext(ContentProviderContext);

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
    const [selectedYears, setSelectedYears] = useState('');
    const [selectedMonths, setSelectedMonths] = useState('');

    const [filteredDownloadsPdf, setFilteredDownloadsPdf] =
        useState(downloadspdf);

    useEffect(() => {
        const filteredData = downloadspdf.filter(item => {
            const selectedYear = item.year;
            const selectedMonth = item.month;
            return (
                selectedYear === selectedYears &&
                selectedMonth.toLocaleLowerCase() ===
                    selectedMonths.toLocaleLowerCase()
            );
        });

        setFilteredDownloadsPdf(filteredData);
    }, [selectedMonths, selectedYears]);

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '02247a9e-15cf-4c38-a0ec-d339ec44c993',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-4 lg:tw-gap-6">
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
                        buttonClassName="max-sm:tw-min-w-[unset]"
                        className="md:tw-justify-self-end tw-w-full lg:tw-w-fit"
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
                        buttonClassName="max-sm:tw-min-w-[unset]"
                        className="tw-justify-self-start tw-w-full lg:tw-w-fit"
                    />
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid tw-grid-cols-2 md:tw-gap-x-10 md:tw-gap-y-8 tw-gap-2">
                    <ItemBuilder
                        items={filteredDownloadsPdf}
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

const downloadspdf = [
    {
        date: '14',
        month: 'Nov',
        year: '2023',
        text: 'NACH Mandate',
        link: '#',
    },
    {
        date: '14',
        month: 'Nov',
        year: '2023',
        text: 'NACH Mandate',
        link: '#',
    },
    {
        date: '14',
        month: 'Nov',
        year: '2023',
        text: 'NACH Mandate',
        link: '#',
    },
    {
        date: '14',
        month: 'Nov',
        year: '2023',
        text: 'NACH Mandate',
        link: '#',
    },
    {
        date: '14',
        month: 'Nov',
        year: '2018',
        text: 'Model Loan Against',
        link: '#',
    },
    {
        date: '22',
        month: 'May',
        year: '2023',
        text: 'Loan Application Form - For Resident Indian',
        link: '#',
    },
    {
        date: '22',
        month: 'May',
        year: '2020',
        text: 'Request to change EMI cycle date',
        link: '#',
    },
    {
        date: '22',
        month: 'Aug',
        year: '2020',
        text: 'Request to change EMI cycle date',
        link: '#',
    },
];
