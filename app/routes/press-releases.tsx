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
        {title: 'Press Release'},
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

    const vernacularData = getVernacularFromBackend('pressReleases');

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
                        <PressReleases />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function PressReleases() {
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
                        contentId: "Press Release",
                        link: "#",
                    },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <PressReleasesSection />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function PressReleasesSection() {
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

    const [filteredPressReleases, setFilteredPressReleases] =
        useState(pressReleasesData);

    useEffect(() => {
        const filteredData = pressReleasesData.filter(item => {
            const selectedYear = item.year;
            const selectedMonth = item.month;
            return (
                selectedYear === selectedYears &&
                selectedMonth.toLocaleLowerCase() ===
                    selectedMonths.toLocaleLowerCase()
            );
        });

        setFilteredPressReleases(filteredData);
    }, [selectedMonths, selectedYears]);

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '58f75ae4-371c-4bce-9ccf-18c34c8d72fc',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-4 lg:tw-gap-6">
                    <SelectComponent
                        items={years}
                        placeholderClassName="sc-text-title2 tw-text-secondary-600"
                        itemBuilder={item => {
                            return item == '' ? 'Select Year' : item;
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
                            return item == '' ? 'Select Month' : item;
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
                <div className="tw-grid tw-grid-cols-2 md:tw-gap-x-10 md:tw-gap-y-8 tw-gap-x-2 tw-gap-y-4">
                    <ItemBuilder
                        items={filteredPressReleases}
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

const pressReleasesData = [
    {
        date: '14',
        month: 'Nov',
        year: '2023',
        text: 'Q2 FY24 Press Release',
        link: '#',
    },
    {
        date: '14',
        month: 'Nov',
        year: '2018',
        text: 'Q2 FY24 Press Release',
        link: '#',
    },
    {
        date: '22',
        month: 'May',
        year: '2023',
        text: 'Q2 FY24 Press Release',
        link: '#',
    },
    {
        date: '22',
        month: 'May',
        year: '2020',
        text: 'Q2 FY24 Press Release',
        link: '#',
    },
    {
        date: '22',
        month: 'Aug',
        year: '2020',
        text: 'Q2 FY24 Press Release',
        link: '#',
    },
];
