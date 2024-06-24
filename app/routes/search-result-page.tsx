import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useEffect, useState} from 'react';
import {Search} from 'react-bootstrap-icons';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {CarouselStyle2} from '~/components/carouselStyle2';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {BlogsCard2} from '~/components/componentLibrary/blog/blogsCard2';
import {CalculatorsCard} from '~/components/componentLibrary/reusableCards/calculatorsCards';
import {ProductCard} from '~/components/componentLibrary/reusableCards/productCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import useIsScreenSizeBelow from '~/hooks/useIsScreenSizeBelow';

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

    const vernacularData = getVernacularFromBackend('searchResultPage');

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
                        <SearchResultPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function SearchResultPage() {
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
                        contentId: "Search Result Page",
                        link: "#",
                    },
                ]}
            />

            <VerticalSpacer className="tw-h-14" />

            <SearchHereSection />
        </>
    );
}

function SearchHereSection() {
    const contentData = useContext(ContentProviderContext);

    const tabButton = [
        contentData.getContent('0cd8e74d-128e-4cb4-868b-ecffc40628a7'),
        contentData.getContent('6f90bed2-26bd-484e-889c-db5a83bf5475'),
        contentData.getContent('2558c94e-f93e-457d-8231-336384b7029a'),
        contentData.getContent('15688b65-db11-41b9-9de6-6ef4424c2351'),
        contentData.getContent('55732c05-9b49-43de-b398-1fc67543803e'),
        contentData.getContent('38b1c582-34f6-4364-abd4-317980a4e346'),
    ];

    const [selectedTab, setSelectedTab] = useState(0);

    const [selectedText, setSelectedText] = useState('');
    return (
        <div className="">
            <div className="sc-text-banner tw-text-center">
                {contentData.getContent('c81cf15d-c7a7-4a1a-9093-f9e50985d15f')}
            </div>
            <div className="sc-text-headline tw-text-center">
                {contentData.getContent('637dc778-6472-465a-bdf8-7eb0abac10cb')}
            </div>

            <VerticalSpacer className="tw-h-6" />
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto tw-relative">
                    <input
                        className="sc-text-input"
                        placeholder="Home Loan"
                        type="text"
                        onChange={e => {
                            setSelectedText(e.target.value);
                        }}
                    />
                    <div className="tw-absolute tw-right-5 tw-top-0 tw-h-full tw-flex tw-items-center">
                        <Search className="tw-text-primary-500" />
                    </div>
                </div>
            </div>

            <VerticalSpacer className="tw-h-6" />

            <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 lg:tw-justify-center tw-py-4 tw-overflow-y-scroll sc-px-screen-edge">
                {tabButton.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`lg:tw-p-4 lg:tw-px-5 tw-p-3 tw-rounded-lg sc-text-button tw-h-full ${
                                selectedTab === itemIndex
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() => setSelectedTab(itemIndex)}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            <VerticalSpacer className="tw-h-6" />

            {selectedTab === 0 || selectedTab === 1 ? (
                <Loans selectedText={selectedText} />
            ) : null}

            {selectedTab === 0 || selectedTab === 2 ? (
                <>
                    <Calculators />

                    <VerticalSpacer className="tw-h-20 lg:tw-h-40" />
                </>
            ) : null}

            {selectedTab === 0 || selectedTab === 3 ? (
                <OurBlogs selectedText={selectedText} />
            ) : null}

            {selectedTab === 0 || selectedTab === 4 ? (
                <NewsCorner selectedText={selectedText} />
            ) : null}

            {selectedTab === 0 || selectedTab === 5 ? (
                <Video selectedText={selectedText} />
            ) : null}
        </div>
    );
}

function Loans({selectedText}: {selectedText: string}) {
    const contentData = useContext(ContentProviderContext);

    const items = [
        {
            image: contentData.getContent(
                'c81ba44a-c2cd-4a5c-a125-02769cec3e5c',
            ),
            title: contentData.getContent(
                '281f3e6c-0a70-447a-a951-43ad4bb764f1',
            ),
            linkText: contentData.getContent(
                '6c268635-9838-4140-92a1-8b988d870bd1',
            ),
            linkUrl: contentData.getContent(
                '38317fa8-68ae-4f39-a1ee-37dea95d3f4f',
            ),
        },
        {
            image: contentData.getContent(
                '6f219ad9-1cb2-45fd-8a77-07520d1e25f0',
            ),
            title: contentData.getContent(
                'ddd9f37e-fb55-40cb-838e-c4343bf34210',
            ),
            linkText: contentData.getContent(
                '9be23b22-d6e2-4011-a6a7-df9c4e5dee1f',
            ),
            linkUrl: contentData.getContent(
                '9c30de57-7327-44f5-af9c-e1fe27646927',
            ),
        },
        {
            image: contentData.getContent(
                'd0265d20-4bb3-40d6-8006-92abfdd91d6b',
            ),
            title: contentData.getContent(
                '93882ddb-d96f-4184-9b6a-d89fa4562afc',
            ),
            linkText: contentData.getContent(
                '6661ae28-4d55-44fd-9faa-a2706dad9867',
            ),
            linkUrl: contentData.getContent(
                'a8392a5c-12ea-441c-8cba-1fa9761f2505',
            ),
        },
        {
            image: contentData.getContent(
                '0d3da2a4-c0dc-4deb-aef9-fb2913447061',
            ),
            title: contentData.getContent(
                'fe0cca96-a0ed-446b-96d4-7192ed111ead',
            ),
            linkText: contentData.getContent(
                'a2907cde-b91e-4af0-ba1c-8662be6252e6',
            ),
            linkUrl: contentData.getContent(
                '5c8874bd-d94c-4916-8cfb-0c95fb3b6480',
            ),
        },
        {
            image: contentData.getContent(
                'c81ba44a-c2cd-4a5c-a125-02769cec3e5c',
            ),
            title: contentData.getContent(
                '281f3e6c-0a70-447a-a951-43ad4bb764f1',
            ),
            linkText: contentData.getContent(
                '6c268635-9838-4140-92a1-8b988d870bd1',
            ),
            linkUrl: contentData.getContent(
                '38317fa8-68ae-4f39-a1ee-37dea95d3f4f',
            ),
        },
        {
            image: contentData.getContent(
                '6f219ad9-1cb2-45fd-8a77-07520d1e25f0',
            ),
            title: contentData.getContent(
                'ddd9f37e-fb55-40cb-838e-c4343bf34210',
            ),
            linkText: contentData.getContent(
                '9be23b22-d6e2-4011-a6a7-df9c4e5dee1f',
            ),
            linkUrl: contentData.getContent(
                '9c30de57-7327-44f5-af9c-e1fe27646927',
            ),
        },
        {
            image: contentData.getContent(
                'd0265d20-4bb3-40d6-8006-92abfdd91d6b',
            ),
            title: contentData.getContent(
                '93882ddb-d96f-4184-9b6a-d89fa4562afc',
            ),
            linkText: contentData.getContent(
                '6661ae28-4d55-44fd-9faa-a2706dad9867',
            ),
            linkUrl: contentData.getContent(
                'a8392a5c-12ea-441c-8cba-1fa9761f2505',
            ),
        },
    ];

    const [filteredItems, setFilteredItems] = useState([
        {
            image: '',
            title: '',
            linkText: '',
            linkUrl: '',
        },
    ]);

    useEffect(() => {
        const regex = new RegExp(
            `\\W*${selectedText ? selectedText : 'h'}*\\w`,
            'i',
        );
        const searchText = items.filter(item => regex.test(item.title));
        setFilteredItems(searchText);
    }, [selectedText]);
    return (
        <>
            {filteredItems.length > 0 && (
                <>
                    <div className="sc-px-screen-edge">
                        <div className="tw-max-w-7xl tw-mx-auto">
                            <div className="tw-text-center sc-text-headline">
                                {contentData.getContent(
                                    'ce2f15ae-3152-48d3-a00f-2c7393179c58',
                                )}
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <CarouselStyle2
                                items={filteredItems.map((item, itemIndex) => (
                                    <ProductCard
                                        title={item.title}
                                        linkText={item.linkText}
                                        linkUrl={item.linkUrl}
                                        key={itemIndex}
                                    />
                                ))}
                                keyIndex={filteredItems.length}
                                slideClassName='tw-max-w-[18rem]'
                            />
                        </div>
                    </div>
                    <VerticalSpacer className="tw-h-20 lg:tw-h-40" />
                </>
            )}
        </>
    );
}

function Calculators() {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            image: contentData.getContent(
                '0f263b37-a75c-409e-be29-35ecf06c8610',
            ),
            title: contentData.getContent(
                'a9bc41b8-3f98-40b6-bed9-6938d987bcfe',
            ),
            text: contentData.getContent(
                '23139cce-c235-4bb9-bd8b-484855ad6d40',
            ),
            buttonText: contentData.getContent(
                '720f092a-047e-4df1-8943-734c6686cbec',
            ),
            buttonLink: contentData.getContent(
                '8ec5e07c-34a4-4191-bebf-ac7b29d4aede',
            ),
        },
        {
            image: contentData.getContent(
                '1791cc7c-1b51-4bbf-8dda-3397e61830ce',
            ),
            title: contentData.getContent(
                '5306233b-fdf7-4d72-9a6f-b1e4106e5473',
            ),
            text: contentData.getContent(
                'b8434ac3-6122-4bb8-aa16-6c758583ec92',
            ),
            buttonText: contentData.getContent(
                '5469de18-5b34-41af-9dc5-8ff0dd936415',
            ),
            buttonLink: contentData.getContent(
                'fcdc16d5-f6e7-4eab-9acf-3a0f346e6f62',
            ),
        },
        {
            image: contentData.getContent(
                '029f61dd-0aca-4328-9cf0-00364b06e9d7',
            ),
            title: contentData.getContent(
                'f41f20ea-0f84-4e54-bab5-fdbc54b4a4a8',
            ),
            text: contentData.getContent(
                'c44ea1aa-55a4-4d78-90d1-6e9a2f28ce8a',
            ),
            buttonText: contentData.getContent(
                '17db047d-a0b1-4865-b0ce-ccb93162f7f5',
            ),
            buttonLink: contentData.getContent(
                'ed57c6c8-2e77-4b51-ba0d-d4f4ed560e78',
            ),
        },
        {
            image: contentData.getContent(
                '0f263b37-a75c-409e-be29-35ecf06c8610',
            ),
            title: contentData.getContent(
                'a9bc41b8-3f98-40b6-bed9-6938d987bcfe',
            ),
            text: contentData.getContent(
                '23139cce-c235-4bb9-bd8b-484855ad6d40',
            ),
            buttonText: contentData.getContent(
                '720f092a-047e-4df1-8943-734c6686cbec',
            ),
            buttonLink: contentData.getContent(
                '8ec5e07c-34a4-4191-bebf-ac7b29d4aede',
            ),
        },
        {
            image: contentData.getContent(
                '1791cc7c-1b51-4bbf-8dda-3397e61830ce',
            ),
            title: contentData.getContent(
                '5306233b-fdf7-4d72-9a6f-b1e4106e5473',
            ),
            text: contentData.getContent(
                'b8434ac3-6122-4bb8-aa16-6c758583ec92',
            ),
            buttonText: contentData.getContent(
                '5469de18-5b34-41af-9dc5-8ff0dd936415',
            ),
            buttonLink: contentData.getContent(
                'fcdc16d5-f6e7-4eab-9acf-3a0f346e6f62',
            ),
        },
        {
            image: contentData.getContent(
                '029f61dd-0aca-4328-9cf0-00364b06e9d7',
            ),
            title: contentData.getContent(
                'f41f20ea-0f84-4e54-bab5-fdbc54b4a4a8',
            ),
            text: contentData.getContent(
                'c44ea1aa-55a4-4d78-90d1-6e9a2f28ce8a',
            ),
            buttonText: contentData.getContent(
                '17db047d-a0b1-4865-b0ce-ccb93162f7f5',
            ),
            buttonLink: contentData.getContent(
                'ed57c6c8-2e77-4b51-ba0d-d4f4ed560e78',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'e45450d7-8ae3-4683-b855-4802ca3defd3',
                    )}
                </div>
                <CarouselStyle2
                    items={items.map((item, itemIndex) => (
                        <CalculatorsCard
                            key={itemIndex}
                            title={item.title}
                            text={item.text}
                            buttonText={item.buttonText}
                            buttonLink={item.buttonLink}
                        />
                    ))}
                    keyIndex={items.length}
                    slideClassName='tw-max-w-[22rem]'
                />
            </div>
        </div>
    );
}

function OurBlogs({selectedText}: {selectedText: string}) {
    const contentData = useContext(ContentProviderContext);
    const isScreenSizeBelow = useIsScreenSizeBelow(768);
    const [isViewMore, setIsViewMore] = useState(false);
    const blogs = [
        {
            image: contentData.getContent(
                '2ef5fa59-62bc-4a0b-9e28-e4912ed9e8a2',
            ),
            title: contentData.getContent(
                '5a54d3ba-7d80-4602-9684-c29936628269',
            ),
            text: contentData.getContent(
                '005c8176-4d16-4a10-9bdf-d39002208338',
            ),
            date: contentData.getContent(
                'f18e9683-865b-4e9d-8743-c648e9bac402',
            ),
        },
        {
            image: contentData.getContent(
                '1e067193-41a6-4e17-98d3-e88e9d199f03',
            ),
            title: contentData.getContent(
                '9ad55202-7c44-47fd-afd2-c6bf13cf794a',
            ),
            text: contentData.getContent(
                'f09f08f3-28b3-43c4-9da9-0157d3d24364',
            ),
            date: contentData.getContent(
                '7c5bf21e-34bc-413f-8c84-52e2d6c07b98',
            ),
        },
        {
            image: contentData.getContent(
                '87279ef5-1312-4d0b-991d-3b97fb92e30b',
            ),
            title: contentData.getContent(
                'd0d1d48f-b6fc-4aae-a796-cb76ddc687c2',
            ),
            text: contentData.getContent(
                '534c5808-39ef-4f84-be4f-fe3aede28a16',
            ),
            date: contentData.getContent(
                '0fa2af40-2efb-4f27-a08a-12b2f700b480',
            ),
        },
        {
            image: contentData.getContent(
                'd0ad317d-37bb-4d86-83f5-84a06939e0fb',
            ),
            title: contentData.getContent(
                'b7e3685b-befe-4939-a5a6-7fe000b3081e',
            ),
            text: contentData.getContent(
                '010290fe-e408-40f6-8165-5092d8fca8cd',
            ),
            date: contentData.getContent(
                '3c4076ff-7e29-49b9-9c9e-ab17ad8e5973',
            ),
        },
        {
            image: contentData.getContent(
                'ea094b87-50f7-4248-a207-62b0c1e63593',
            ),
            title: contentData.getContent(
                '02e8cca2-20b6-4a73-9e8f-9f690458721a',
            ),
            text: contentData.getContent(
                'eb1a4e6b-f5b9-4947-bbb4-1c2b77b90c51',
            ),
            date: contentData.getContent(
                '377c3b15-6921-410a-816b-cbb1db10cc78',
            ),
        },
        {
            image: contentData.getContent(
                '71907a48-5b6e-4832-9748-979a31b3fb0c',
            ),
            title: contentData.getContent(
                'f5b773a5-63b7-442f-8161-1d219019635a',
            ),
            text: contentData.getContent(
                '94bd7509-18f3-48be-a279-b8b631d7bcaf',
            ),
            date: contentData.getContent(
                '5e49938c-0f0b-4a75-863a-43609dee6d0c',
            ),
        },
    ];

    const [filteredBlogs, setFilteredBlogs] = useState([
        {
            image: '',
            title: '',
            text: '',
            date: '',
        },
    ]);

    useEffect(() => {
        const regex = new RegExp(
            `\\W*${selectedText ? selectedText : 'h'}*\\w`,
            'i',
        );
        const searchText = blogs.filter(
            item =>
                (item.title && regex.test(item.title)) ||
                (item.date && regex.test(item.date)) ||
                (item.text && regex.test(item.text)),
        );
        setFilteredBlogs(searchText);
    }, [selectedText]);

    return (
        <>
            {filteredBlogs.length > 0 && (
                <>
                    <div className="sc-px-screen-edge">
                        <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-4">
                            <div className="sc-text-headline tw-text-center">
                                {contentData.getContent(
                                    '45b88abb-0d06-4e46-a875-b6ff5d25c98f',
                                )}
                            </div>

                            <div
                                className={concatenateNonNullStringsWithSpaces(
                                    'tw-grid  lg:tw-grid-cols-3 tw-gap-2 lg:tw-gap-x-5 lg:tw-gap-y-6 tw-grid-cols-1',
                                    filteredBlogs.length > 3
                                        ? 'lg:tw-grid-rows-2'
                                        : 'lg:tw-grid-rows-1',
                                )}>
                                {!isViewMore && isScreenSizeBelow ? (
                                    <ItemBuilder
                                        items={filteredBlogs.slice(0, 3)}
                                        itemBuilder={(item, itemIndex) => (
                                            <BlogsCard
                                                key={itemIndex}
                                                title={item.title}
                                                text={item.text}
                                                date={item.date}
                                            />
                                        )}
                                    />
                                ) : (
                                    <ItemBuilder
                                        items={filteredBlogs}
                                        itemBuilder={(item, itemIndex) => (
                                            <BlogsCard
                                                key={itemIndex}
                                                title={item.title}
                                                text={item.text}
                                                date={item.date}
                                            />
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                        {filteredBlogs.length > 4 && (
                            <div className="lg:tw-hidden tw-grid">
                                <VerticalSpacer className="tw-h-6" />
                                <button
                                    className="sc-cta-outline-button "
                                    onClick={() =>
                                        setIsViewMore(prev => !prev)
                                    }>
                                    {!isViewMore
                                        ? 'View More Blogs'
                                        : 'See Less'}
                                </button>
                            </div>
                        )}
                    </div>
                    <VerticalSpacer className="tw-h-20 lg:tw-h-40" />
                </>
            )}
        </>
    );
}

function NewsCorner({selectedText}: {selectedText: string}) {
    const contentData = useContext(ContentProviderContext);
    const news = [
        {
            image: contentData.getContent(
                'cae3d715-6670-4ce8-a1c0-e3755358b6f9',
            ),
            date: contentData.getContent(
                'd9442989-e52a-4548-b7c0-a8c2016b6585',
            ),
            title: contentData.getContent(
                '04023b1e-46f1-4f3f-8d27-53c80860b2d8',
            ),
            text: contentData.getContent(
                'd3bd8a73-4ea8-480d-86bf-49c03bbe792b',
            ),
            linkText: contentData.getContent(
                '9bb24be2-15f0-4124-b94f-63ea767a1145',
            ),
            linkUrl: contentData.getContent(
                '7645803e-d1fc-4988-ad88-bbd88318a620',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
        {
            image: contentData.getContent(
                'e806a99f-5526-44f7-8646-e87327baa292',
            ),
            date: contentData.getContent(
                '358bc9d1-8369-47e9-b170-e7d1470c364e',
            ),
            title: contentData.getContent(
                '35cb00c4-3896-49ac-8f02-9ec475e51490',
            ),
            text: contentData.getContent(
                '661d1703-8d05-4102-bcbc-2afe1b30608b',
            ),
            linkText: contentData.getContent(
                '83dc8825-c6f4-4737-90c9-c81679550485',
            ),
            linkUrl: contentData.getContent(
                'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            ),
        },
    ];

    const [filteredNews, setFilteredNews] = useState([
        {
            image: '',
            date: '',
            title: '',
            text: '',
            linkText: '',
            linkUrl: '',
        },
    ]);

    useEffect(() => {
        const regex = new RegExp(
            `\\W*${selectedText ? selectedText : 'h'}*\\w`,
            'i',
        );
        const searchText = news.filter(
            item =>
                (item.title && regex.test(item.title)) ||
                (item.date && regex.test(item.date)) ||
                (item.text && regex.test(item.text)),
        );
        setFilteredNews(searchText);
    }, [selectedText]);

    return (
        <>
            {filteredNews.length > 0 && (
                <>
                    <div className="tw-grid tw-gap-4">
                        <div className="sc-text-headline tw-text-center">
                            {contentData.getContent(
                                'cd380df9-31bd-41cb-94fc-ef1b2d93517a',
                            )}
                        </div>
                        {filteredNews.length > 3 ? (
                            <CarouselStyle2
                                items={filteredNews.map((item, itemIndex) => {
                                    return (
                                        <BlogsCard2
                                            date={item.date}
                                            title={item.title}
                                            text={item.text}
                                            linkText={item.linkText}
                                            linkUrl={item.linkUrl}
                                            key={itemIndex}
                                        />
                                    );
                                })}
                                keyIndex={filteredNews.length}
                                slideClassName='tw-max-w-[35rem]'
                            />
                        ) : (
                            <div className="sc-px-screen-edge">
                                <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-grid-cols-3 tw-grid-cols-1 tw-gap-6">
                                    <ItemBuilder
                                        items={filteredNews}
                                        itemBuilder={(item, itemIndex) => (
                                            <BlogsCard2
                                                date={item.date}
                                                title={item.title}
                                                text={item.text}
                                                linkText={item.linkText}
                                                linkUrl={item.linkUrl}
                                                key={itemIndex}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <VerticalSpacer className="tw-h-20 lg:tw-h-40" />
                </>
            )}
        </>
    );
}

function Video({selectedText}: {selectedText: string}) {
    const contentData = useContext(ContentProviderContext);

    const items = [
        {
            video: '',
            title: contentData.getContent(
                'da808c2f-564e-4d74-b13a-4b5c9f0fb905',
            ),
        },
        {
            video: '',
            title: contentData.getContent(
                'b129204a-48ad-4c46-9512-3901d56ba4eb',
            ),
        },
        {
            video: '',
            title: contentData.getContent(
                'ff9afd2a-2494-4dd0-9668-79e45c98d394',
            ),
        },
        {
            video: '',
            title: contentData.getContent(
                'b129204a-48ad-4c46-9512-3901d56ba4eb',
            ),
        },
        {
            video: '',
            title: contentData.getContent(
                'ff9afd2a-2494-4dd0-9668-79e45c98d394',
            ),
        },
    ];

    const [filteredItems, setFilteredItems] = useState([
        {
            video: '',
            title: '',
        },
    ]);

    useEffect(() => {
        const regex = new RegExp(
            `\\W*${selectedText ? selectedText : 'h'}*\\w`,
            'i',
        );
        const searchText = items.filter(item => regex.test(item.title));
        setFilteredItems(searchText);
    }, [selectedText]);

    return (
        <>
            {filteredItems.length > 0 && (
                <>
                    <div className="tw-max-w-7xl tw-mx-auto">
                        <div className="sc-text-headline tw-text-center">
                            {contentData.getContent(
                                '5c9c5ce8-f3f6-4f5e-bff0-59f7b406a424',
                            )}
                        </div>
                        <VerticalSpacer className="tw-h-4" />
                        {filteredItems.length > 3 ? (
                            <div className="tw-hidden lg:tw-block">
                                <CarouselStyle2
                                    items={filteredItems.map(
                                        (item, itemIndex) => (
                                            <div
                                                className="tw-grid tw-gap-4"
                                                key={itemIndex}>
                                                <div className="tw-bg-primary-500 tw-w-full tw-aspect-square">
                                                    {item.video}
                                                </div>
                                                <div className="sc-text-body2 tw-text-secondary-900">
                                                    {item.title}
                                                </div>
                                            </div>
                                        ),
                                    )}
                                    keyIndex={filteredItems.length}
                                    slideClassName='tw-max-w-[22rem]'
                                />
                            </div>
                        ) : (
                            <div className="sc-px-screen-edge">
                                <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid tw-grid-cols-3 tw-hidden tw-gap-6">
                                    <ItemBuilder
                                        items={filteredItems}
                                        itemBuilder={(item, itemIndex) => (
                                            <div
                                                className="tw-grid tw-gap-4"
                                                key={itemIndex}>
                                                <div className="tw-bg-primary-500 tw-w-[21.8rem] tw-aspect-square">
                                                    {item.video}
                                                </div>
                                                <div className="sc-text-body2 tw-text-secondary-900">
                                                    {item.title}
                                                </div>
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="sc-px-screen-edge">
                            <div className="lg:tw-hidden tw-grid tw-grid-cols-1 tw-grid-rows-5 tw-gap-4">
                                <ItemBuilder
                                    items={filteredItems}
                                    itemBuilder={(item, itemIndex) => (
                                        <div
                                            className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-gap-4"
                                            key={itemIndex}>
                                            <div className="tw-w-[6rem] tw-h-[3.5rem] tw-bg-primary-500 tw-rounded-lg">
                                                {item.video}
                                            </div>
                                            <div className="sc-text-caption tw-text-secondary-900">
                                                {item.title}
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
                </>
            )}
        </>
    );
}
