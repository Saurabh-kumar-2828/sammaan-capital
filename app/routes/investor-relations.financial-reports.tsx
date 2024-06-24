import {useContext, useEffect, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {type LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {FinancialReportsDownloader} from '~/components/reusableComponents/financialReportsDownloader';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('financialReports');

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
                        <FinancialReportsPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function FinancialReportsPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {
                        contentId: 'Investor Relations',
                        link: '/contact-us/investor-media-relations',
                    },
                    {contentId: 'Financial Reports', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <FinancialReports />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function FinancialReports() {
    const contentData = useContext(ContentProviderContext);
    const financialReports = [
        {
            period: '2021-2022',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2021-2022',
            reportDuration: 'Annually',
            createdIn: 'Annually 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2022-2023',
            reportDuration: 'Annually',
            createdIn: 'March 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2022-2023',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2022-2023',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2022-2023',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2023-2024',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2023-2024',
            reportDuration: 'Annually',
            createdIn: 'March 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2023-2024',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2024-2025',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2024-2025',
            reportDuration: 'Quarterly',
            createdIn: 'September 2023',
            resultLink: '#',
            earningsLink: '#',
        },
        {
            period: '2024-2025',
            reportDuration: 'Annually',
            createdIn: 'March 2023',
            resultLink: '#',
            earningsLink: '#',
        },
    ];

    const [filteredReports, setFilteredReports] = useState(financialReports);

    function generateYearRanges() {
        const currentYear = new Date().getFullYear();
        const yearRanges = [];

        for (let i = 0; i < 20; i++) {
            const startYear = currentYear - i;
            const endYear = startYear + 1;
            const yearRange = `${startYear}-${endYear}`;
            yearRanges.push(yearRange);
        }

        return yearRanges;
    }

    const arrayOfYearRanges = generateYearRanges();
    const [selectedPeriod, setSelectedPeriod] = useState(arrayOfYearRanges[0]);

    useEffect(() => {
        setFilteredReports(
            financialReports.filter(item => item.period == selectedPeriod),
        );
    }, [selectedPeriod]);

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className='sc-text-headline tw-text-center'>{contentData.getContent('35888176-b010-435e-b5e0-a3bd41c08aa0')}</div>

                <VerticalSpacer className='tw-h-3 lg:tw-h-4'/>

                <div className='sc-text-body-static tw-text-secondary-600 tw-text-center lg:tw-w-[60%] lg:tw-mx-auto'>{contentData.getContent('645feccb-a75b-444e-9f2c-8519c3f10dd0')}</div>

                <VerticalSpacer className='tw-h-6 lg:tw-h-8'/>

                <div className="tw-grid sm:tw-flex tw-gap-3 lg:tw-gap-6 tw-items-center">
                    <div className='sc-text-caption'>{contentData.getContent('1180673c-fba8-41da-826a-6490dd0fd1c8')}</div>
                    <div>
                        <SelectComponent
                            items={arrayOfYearRanges}
                            itemBuilder={item => {
                                return item == '' ? '' : item;
                            }}
                            value={selectedPeriod}
                            setValue={item => {
                                if (item != '') {
                                    setSelectedPeriod(item);
                                    return;
                                }

                                setSelectedPeriod('');
                            }}
                            buttonClassName="disabled:tw-bg-[#aeaeae]"
                            className="tw-justify-self-center"
                        />
                    </div>
                </div>

                <VerticalSpacer className='tw-h-8'/>


                <div className="tw-pb-4 tw-border-b tw-border-b-secondary-600 sc-text-body-static">
                   <span className='tw-font-bold'>{filteredReports.length > 9 ? filteredReports.length : "0"+filteredReports.length}</span> {contentData.getContent('5a084816-df1a-4e7e-a5e1-ba1d9b2c4071')}
                </div>

                <VerticalSpacer className='tw-h-6 lg:tw-h-12'/>

                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 lg:tw-gap-8">
                    <ItemBuilder
                        items={filteredReports}
                        itemBuilder={item => {
                            return (
                                <FinancialReportsDownloader
                                    reportDuration={item.reportDuration}
                                    createdIn={item.createdIn}
                                    contentData={contentData}
                                    resultLink={item.resultLink}
                                    earningsLink={item.earningsLink}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
