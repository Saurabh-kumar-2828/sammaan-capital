import {Link} from '@remix-run/react';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    List,
    Search,
    X,
} from 'react-bootstrap-icons';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {SearchableSelect} from './componentLibrary/form/searchableSelect';
import {VerticalSpacer} from './reusableComponents/verticalSpacer';

export function HeaderComponent({
    showList,
    setShowList,
    options,
    pagesOptions,
}: {
    showList: Array<boolean>;
    setShowList: React.Dispatch<Array<boolean>>;
    options: Array<{
        optionList: Array<{
            title: string;
            link: string;
            text: string;
            img: string;
        }>;
        sideContent: {image: string; title: string; buttonText: string};
    }>;
    pagesOptions: Array<{name: string; link: string}>;
}) {
    const contentData = useContext(ContentProviderContext);
    const headerMenuItems = [
        {
            contentId: contentData.getContent(
                '3a5e1f9c-db8a-44a5-8a38-7ea5a0d76333',
            ),
            link: contentData.getContent(
                'daa2c91d-1a3e-4268-997f-183501da9303',
            ),
            chevron: true,
        },
        {
            contentId: contentData.getContent(
                '980c425d-e5c4-4caf-8448-b1c2c8debe8f',
            ),
            link: contentData.getContent(
                'a929479b-f37c-4d6f-8a17-dd756d813ecb',
            ),
            chevron: false,
        },
        {
            contentId: contentData.getContent(
                '21ae9c09-8a3a-4355-807c-38cb168b5331',
            ),
            link: contentData.getContent(
                '8c32fffb-d873-487d-ab81-e07c51f8f25f',
            ),
            chevron: true,
        },
        {
            contentId: contentData.getContent(
                '9abd122e-a285-4007-b9c1-89b41ed5c3f4',
            ),
            link: contentData.getContent(
                'f5dabef1-70da-4ed7-aa58-72f7a9cdb9ef',
            ),
            chevron: true,
        },
        {
            contentId: contentData.getContent(
                '5c42a5aa-9d4e-4fb3-9c75-a9eba168be3f',
            ),
            link: contentData.getContent(
                'eaa51450-6402-43bc-89e0-9631d4a9915f',
            ),
            chevron: false,
        },
    ];

    const quickSearches = [
        {
            name: contentData.getContent(
                'b0bbc4ea-43a5-4f17-b5e0-7ba000c30345',
            ),
            link: contentData.getContent(
                '908649cd-fbac-40b1-99a7-2d3acf87cc2e',
            ),
        },
        {
            name: contentData.getContent(
                '6cf3b32b-7320-4ae3-846c-ac757af68d86',
            ),
            link: contentData.getContent(
                'cecfbedc-d44e-48ce-9423-dd27d4c27b0e',
            ),
        },
        {
            name: contentData.getContent(
                '01a05870-41e2-480e-b244-3d8b3cd593ae',
            ),
            link: contentData.getContent(
                'acc709f0-bf92-4369-9a91-ac4502435bf4',
            ),
        },
        {
            name: contentData.getContent(
                '6d02fba7-487a-4313-bce8-b003ae471945',
            ),
            link: contentData.getContent(
                'b86b6c5d-49df-442f-ba69-d320d0d234ad',
            ),
        },
        {
            name: contentData.getContent(
                '7baa48b3-df82-46dc-8df5-0f5b168b35be',
            ),
            link: contentData.getContent(
                'a4f99a4e-e436-45fd-9ec8-060af2a79aba',
            ),
        },
        {
            name: contentData.getContent(
                '7bc359bc-061b-444e-9ff3-644e19314ae3',
            ),
            link: contentData.getContent(
                'f6e3e960-a6e1-4b91-b708-ab2ae78f7cb3',
            ),
        },
        {
            name: contentData.getContent(
                '92638394-ec9a-4d79-8903-34a0f5c5c12d',
            ),
            link: contentData.getContent(
                '0b6da32f-168e-4c00-a51a-b1b244d4cd6d',
            ),
        },
        {
            name: contentData.getContent(
                '2a86175b-1b2a-4390-833f-5e6f1bec8320',
            ),
            link: contentData.getContent(
                'cf39411c-2eca-4fec-abec-ef59818bf047',
            ),
        },
    ];

    const languages = [
        {
            name: contentData.getContent(
                '48056ad6-9f3e-4e2b-9279-1abad7cf4d69',
            ),
            link: contentData.getContent(
                '6b142d16-8fa3-427a-8347-ec6cb3f9d61c',
            ),
        },
        {
            name: contentData.getContent(
                '02f16f8e-dcfc-4494-897e-fa65309b31ee',
            ),
            link: contentData.getContent(
                'a58b1604-35a2-4ec7-9be9-845c001d6353',
            ),
        },
        {
            name: contentData.getContent(
                '6d102708-6337-4d7d-8b39-b2248bc21802',
            ),
            link: contentData.getContent(
                'f2b029bb-9056-427d-9bdd-d4c9bb535526',
            ),
        },
    ];

    const topMenu = [
        {
            title: contentData.getContent(
                'd0e02010-0361-4b1c-95a0-38c79a433c12',
            ),
            link: contentData.getContent(
                'af150078-09fa-4d47-b032-4d853902def7',
            ),
        },
        {
            title: contentData.getContent(
                '88cf5cb8-3b80-4458-a7a2-549867a9c151',
            ),
            link: contentData.getContent(
                'bc2e691a-bf5a-4970-9d30-c380a1d974af',
            ),
        },
        {
            title: contentData.getContent(
                '5764ad99-f008-428e-9987-1f1101898d6c',
            ),
            link: contentData.getContent(
                '5bf42cb8-fda5-40f8-8342-5c71ce8e5633',
            ),
        },
        {
            title: contentData.getContent(
                'a3e284d1-8773-4868-b61b-736e6b68bcae',
            ),
            link: contentData.getContent(
                '85288d0f-deec-446c-908b-47b05da71c9a',
            ),
        },
        {
            title: contentData.getContent(
                '04082d5d-2725-4c8b-a8f5-57a454fd9129',
            ),
            link: contentData.getContent(
                'ea019036-6e15-4fd5-8a43-db78d1d7e278',
            ),
        },
    ];

    return (
        <div className="tw-flex tw-flex-col tw-items-stretch tw-sticky tw-top-0 tw-z-[60] lg:tw-border-b lg:tw-border-secondary-800">
            <DesktopTopHeader
                className="xl:tw-grid tw-hidden"
                languages={languages}
                topMenu={topMenu}
            />
            <DesktopHeader
                className="xl:tw-flex tw-hidden"
                showList={showList}
                setShowList={setShowList}
                options={options}
                pagesOptions={pagesOptions}
                headerMenuItems={headerMenuItems}
                quickSearches={quickSearches}
            />
            <MobileHeader
                className="tw-block xl:tw-hidden tw-bg-secondary-200"
                showList={showList}
                setShowList={setShowList}
                options={options}
                pagesOptions={pagesOptions}
                headerMenuItems={headerMenuItems}
                topMenu={topMenu}
                languages={languages}
                quickSearches={quickSearches}
            />
        </div>
    );
}

export function DesktopTopHeader({
    className,
    languages,
    topMenu,
}: {
    className: string;
    languages: Array<{
        name: string;
        link: string;
    }>;
    topMenu: Array<{
        title: string;
        link: string;
    }>;
}) {
    const [showList, setShowList] = useState(false);
    return (
        <div
            className={`sc-bg-secondary-100 tw-grid tw-grid-flow-col tw-justify-end tw-gap-12 tw-px-16 tw-py-3 ${className}`}>
            <div className="tw-grid tw-gap-8 tw-grid-flow-col tw-justify-end">
                {topMenu.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <Link to={item.link}>{item.title}</Link>
                    </div>
                ))}
            </div>
            <div className="tw-flex tw-gap-2 tw-items-center tw-relative tw-z-50">
                <div>En</div>
                <div
                    className="tw-cursor-pointer"
                    onClick={() => setShowList(!showList)}>
                    {showList ? <ChevronUp /> : <ChevronDown />}
                </div>
                {showList && (
                    <div className="tw-absolute tw-top-[100%] tw-right-0 tw-w-fit tw-rounded-lg tw-overflow-hidden">
                        <ItemBuilder
                            items={languages}
                            itemBuilder={(item, itemIndex) => {
                                return (
                                    <div
                                        key={itemIndex}
                                        className="tw-border-b tw-border-b-primary-500 tw-px-5 tw-py-2 tw-bg-secondary-200 tw-cursor-pointer"
                                        onClick={() => {
                                            setShowList(false);
                                        }}>
                                        <a href={item.link}>{item.name}</a>
                                    </div>
                                );
                            }}
                        />
                    </div>
                )}
            </div>
            {/* <div className="tw-flex tw-justify-end tw-items-center tw-gap-1">
                English <ChevronDown className="tw-w-4 tw-h-4" />
            </div> */}
        </div>
    );
}

export function DesktopHeader({
    className,
    showList,
    setShowList,
    options,
    pagesOptions,
    headerMenuItems,
    quickSearches,
}: {
    className: string;
    showList: Array<boolean>;
    setShowList: React.Dispatch<Array<boolean>>;
    options: Array<{
        optionList: Array<{
            title: string;
            link: string;
            text: string;
            img: string;
        }>;
        sideContent: {image: string; title: string; buttonText: string};
    }>;
    pagesOptions: Array<{name: string; link: string}>;
    headerMenuItems: Array<{
        contentId: string;
        link: string;
        chevron: boolean;
    }>;
    quickSearches: Array<{
        name: string;
        link: string;
    }>;
}) {
    const contentData = useContext(ContentProviderContext);
    const [selectedPage, setSelectedPage] = useState('');
    const hitUrlRef = useRef(null);
    const [selectedPageIndex, setSelectedPageIndex] = useState<null | number>(
        null,
    );

    useEffect(() => {
        hitUrlRef.current?.click();
    }, [selectedPage]);

    function handelShowItem(index: number) {
        const newShowList = [...showList];
        newShowList.map((item, itemIndex) => {
            if (index == itemIndex) {
                return (newShowList[itemIndex] = !newShowList[itemIndex]);
            } else {
                return (newShowList[itemIndex] = false);
            }
        });
        setShowList(newShowList);
    }

    function makeListFalse() {
        const newShowList = [...showList];
        // console.log("initialList", newShowList);
        newShowList.map((item, itemIndex) => (newShowList[itemIndex] = false));
        setShowList(newShowList);
        // console.log('Hii>>>>>', showList, 'new', newShowList);
    }
    return (
        <div className="tw-bg-secondary-200 tw-px-16 ">
            <div
                className={`tw-flex tw-justify-between tw-relative tw-max-w-[1536px] tw-w-full tw-mx-auto ${className}`}>
                <Link className="tw-py-6" to="/">
                    <img
                        className="tw-w-[126px]"
                        src="/sammaan_capital_logo.png"
                        alt="logo"
                    />
                </Link>
                <div className="sc-text-body tw-flex tw-gap-6">
                    <div className="tw-flex">
                        {headerMenuItems.map((item, itemIndex) => (
                            <div
                                className="tw-px-3"
                                key={itemIndex}
                                onMouseEnter={() =>
                                    !showList[options.length]
                                        ? handelShowItem(itemIndex)
                                        : null
                                }
                                onMouseLeave={() =>
                                    !showList[options.length]
                                        ? makeListFalse()
                                        : null
                                }>
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-flex tw-gap-2 tw-items-center tw-cursor-pointer tw-py-3 tw-h-full tw-box-border tw-relative',
                                    )}>
                                    {item.chevron ? (
                                        <div>
                                            <div className='hover:tw-text-primary-500'>{item.contentId}</div>
                                            {showList[itemIndex] && (
                                                <div className="tw-absolute tw-h-1 tw-bottom-0 tw-left-0 tw-w-full tw-bg-primary-500"></div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link to={item.link} className='hover:tw-text-primary-500'>
                                            {item.contentId}
                                        </Link>
                                    )}
                                    {item.chevron &&
                                        (showList[itemIndex] ? (
                                            <ChevronUp className='hover:tw-text-primary-500' />
                                        ) : (
                                            <ChevronDown className='hover:tw-text-primary-500' />
                                        ))}
                                </div>
                                {(showList[itemIndex] ||
                                    showList[options.length]) &&
                                    (item.chevron ||
                                        showList[options.length]) && (
                                        <div
                                            className="tw-absolute tw-top-[100.7%] tw-w-full tw-left-0 tw-rounded-b tw-p-8 tw-bg-secondary-200 sc-medium-shadow tw-border tw-border-secondary-100 tw-z-10"
                                            onClick={() =>
                                                showList[options.length]
                                                    ? null
                                                    : makeListFalse()
                                            }>
                                            {!showList[options.length] ? (
                                                <div className="tw-grid tw-gap-8 tw-grid-cols-[1.3fr_1fr]">
                                                    <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                                                        <ItemBuilder
                                                            items={
                                                                options[
                                                                    itemIndex
                                                                ].optionList
                                                            }
                                                            itemBuilder={(
                                                                i,
                                                                iIndex,
                                                            ) => {
                                                                return (
                                                                    <Link
                                                                        to={
                                                                            i.link
                                                                        }
                                                                        key={
                                                                            iIndex
                                                                        }
                                                                        className="tw-grid tw-gap-3 tw-grid-cols-[auto,minmax(0,1fr)]">
                                                                        <div className="tw-bg-[#001CA8] tw-rounded-full tw-w-10 tw-aspect-square tw-h-fit"></div>
                                                                        <div>
                                                                            <div className="sc-text-title2">
                                                                                {
                                                                                    i.title
                                                                                }
                                                                            </div>
                                                                            <div className="sc-text-body tw-text-secondary-600">
                                                                                {
                                                                                    i.text
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="tw-relative tw-w-full tw-h-full tw-rounded-lg tw-overflow-hidden">
                                                        <div className="tw-m-8 tw-grid tw-gap-2">
                                                            <div className="sc-text-title1 tw-max-w-[230px] tw-font-semibold">
                                                                {
                                                                    options[
                                                                        itemIndex
                                                                    ]
                                                                        .sideContent
                                                                        .title
                                                                }
                                                            </div>
                                                            <button className="sc-cta-button tw-w-fit">
                                                                {
                                                                    options[
                                                                        itemIndex
                                                                    ]
                                                                        .sideContent
                                                                        .buttonText
                                                                }
                                                            </button>
                                                        </div>
                                                        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-secondary-400 -tw-z-10"></div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="tw-grid tw-gap-8">
                                                    <div className="tw-grid tw-gap-6">
                                                        <div className="sc-text-title2 tw-text-secondary-600 tw-pt-6">
                                                            {contentData.getContent(
                                                                'ad890c17-1d54-4730-941b-5818dee32576',
                                                            )}
                                                        </div>
                                                        <div className="tw-relative">
                                                            <SearchableSelect
                                                                items={
                                                                    pagesOptions ==
                                                                    null
                                                                        ? []
                                                                        : pagesOptions.map(
                                                                              (
                                                                                  page,
                                                                                  pageIndex,
                                                                              ) => {
                                                                                  return {
                                                                                      name: page.name,
                                                                                      index: pageIndex,
                                                                                  };
                                                                              },
                                                                          )
                                                                }
                                                                selectedItem={
                                                                    pagesOptions ==
                                                                        null ||
                                                                    selectedPageIndex ==
                                                                        null
                                                                        ? null
                                                                        : {
                                                                              name: pagesOptions[
                                                                                  selectedPageIndex
                                                                              ]
                                                                                  .name,
                                                                              index: selectedPageIndex,
                                                                          }
                                                                }
                                                                placeholder={contentData.getContent(
                                                                    '4ea5f527-4a58-4404-a7a3-9b2da34102df',
                                                                )}
                                                                setSelectedItem={item => {
                                                                    if (
                                                                        item ==
                                                                        null
                                                                    ) {
                                                                        return null;
                                                                    }
                                                                    setSelectedPageIndex(
                                                                        item.index,
                                                                    );
                                                                    setSelectedPage(
                                                                        item.name,
                                                                    );
                                                                    return {
                                                                        name: item.name,
                                                                    };
                                                                }}
                                                                filterFunction={(
                                                                    items,
                                                                    query,
                                                                ) =>
                                                                    items.filter(
                                                                        item =>
                                                                            item.name
                                                                                .toLowerCase()
                                                                                .startsWith(
                                                                                    query.toLowerCase(),
                                                                                ),
                                                                    )
                                                                }
                                                                renderFunction={item => {
                                                                    if (
                                                                        item ==
                                                                        null
                                                                    ) {
                                                                        return '';
                                                                    }
                                                                    return `${item.name}`;
                                                                }}
                                                                disabled={
                                                                    pagesOptions ==
                                                                    null
                                                                }
                                                                inputClassName="disabled:tw-opacity-[0.6] disabled:!tw-bg-secondary-100 disabled:dark:tw-opacity-1 disabled:dark:!tw-bg-secondary-300 disabled:dark:!tw-text-secondary-900 sc-text-input"
                                                            />
                                                            <Link
                                                                className="tw-hidden"
                                                                to={
                                                                    selectedPage
                                                                        ? pagesOptions.filter(
                                                                              item =>
                                                                                  item.name ==
                                                                                  selectedPage,
                                                                          )[0]
                                                                              .link
                                                                        : '#'
                                                                }
                                                                ref={hitUrlRef}>
                                                                Hit
                                                            </Link>
                                                            <div className="tw-absolute tw-top-0 tw-right-5 tw-h-full tw-flex tw-items-center">
                                                                <Search />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tw-grid tw-gap-4">
                                                        <div className="sc-text-title2 tw-font-semibold">
                                                            {contentData.getContent(
                                                                'c32993b8-787c-4a32-9be2-d92b7ae7fb2c',
                                                            )}
                                                        </div>
                                                        <div className="tw-flex tw-gap-4 tw-flex-wrap">
                                                            <ItemBuilder
                                                                items={
                                                                    quickSearches
                                                                }
                                                                itemBuilder={(
                                                                    item,
                                                                    itemIndex,
                                                                ) => {
                                                                    return (
                                                                        <Link
                                                                            to={
                                                                                item.link
                                                                            }
                                                                            key={
                                                                                itemIndex
                                                                            }
                                                                            className="tw-p-2 tw-rounded-lg tw-bg-secondary-100 sc-text-body">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </Link>
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                    <div className="tw-flex tw-gap-6 tw-items-center">
                        <div
                            className="tw-cursor-pointer"
                            onClick={() => handelShowItem(options.length)}>
                            <Search />
                        </div>

                        <button className="sc-cta-outline-button tw-flex tw-gap-1 tw-items-center tw-h-fit">
                            {contentData.getContent(
                                '2019a034-396c-4e92-b276-27d71267228b',
                            )}{' '}
                            <ChevronDown className="tw-w-4 tw-h-4" />
                        </button>

                        <button className="sc-cta-button tw-flex tw-gap-1 tw-items-center">
                            {contentData.getContent(
                                'a0358400-d94e-46e9-8005-543bb2f5cd77',
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MobileHeader({
    className,
    showList,
    setShowList,
    options,
    pagesOptions,
    headerMenuItems,
    languages,
    topMenu,
    quickSearches,
}: {
    className: string;
    showList: Array<boolean>;
    setShowList: React.Dispatch<Array<boolean>>;
    options: Array<{
        optionList: Array<{
            title: string;
            link: string;
            text: string;
            img: string;
        }>;
        sideContent: {image: string; title: string; buttonText: string};
    }>;
    pagesOptions: Array<{name: string; link: string}>;
    headerMenuItems: Array<{
        contentId: string;
        link: string;
        chevron: boolean;
    }>;
    languages: Array<{
        name: string;
        link: string;
    }>;
    topMenu: Array<{
        title: string;
        link: string;
    }>;
    quickSearches: Array<{
        name: string;
        link: string;
    }>;
}) {
    const [isOpen, setOpen] = useState(false);
    const [showLanguageList, setShowLanguageList] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const contentData = useContext(ContentProviderContext);
    const [selectedPage, setSelectedPage] = useState('');
    const hitUrlRef = useRef(null);
    const [selectedPageIndex, setSelectedPageIndex] = useState<null | number>(
        null,
    );
    useEffect(() => {
        hitUrlRef.current?.click();
    }, [selectedPage]);

    function handelShowItem(index: number) {
        const newShowList = [...showList];
        newShowList.map((item, itemIndex) => {
            if (index == itemIndex) {
                return (newShowList[itemIndex] = !newShowList[itemIndex]);
            }
        });
        setShowList(newShowList);
    }
    return (
        <div className={`tw-z-50 ${className}`}>
            <div className="sc-card tw-w-full tw-px-6 tw-flex tw-gap-5 tw-justify-between tw-z-[64] tw-items-center tw-py-3">
                <div className="tw-flex tw-gap-4 tw-items-center">
                    <button
                        className="tw-h-10 tw-w-10 tw-cursor-pointer"
                        onClick={() => setOpen(!isOpen)}>
                        <List className="tw-h-10 tw-w-10" />
                    </button>
                    <Link to="/" className="tw-py-3">
                        <img
                            className="tw-w-[126px]"
                            src="/sammaan_capital_logo.png"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="tw-flex tw-gap-4 md:tw-gap-10 tw-items-center">
                    <div
                        className="tw-flex tw-gap-1 tw-items-center tw-relative tw-p-2 tw-rounded sc-xsmall-shadow tw-cursor-pointer"
                        onClick={() => setShowLanguageList(!showLanguageList)}>
                        <div>
                            {contentData.getContent(
                                '1229fb51-37c4-4a9f-8d9b-26cb1d559da7',
                            )}
                        </div>
                        <div className="tw-cursor-pointer">
                            {showLanguageList ? <ChevronUp /> : <ChevronDown />}
                        </div>
                        {showLanguageList && (
                            <div className="tw-absolute tw-top-[100%] tw-right-0 tw-w-fit tw-rounded-lg tw-overflow-hidden">
                                <ItemBuilder
                                    items={languages}
                                    itemBuilder={(item, itemIndex) => {
                                        return (
                                            <div
                                                key={itemIndex}
                                                className="tw-border-b tw-border-b-primary-500 tw-px-5 tw-py-2 tw-bg-secondary-200 tw-cursor-pointer"
                                                onClick={() => {
                                                    setShowLanguageList(false);
                                                }}>
                                                <a href={item.link}>
                                                    {item.name}
                                                </a>
                                            </div>
                                        );
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div
                        className="tw-cursor-pointer"
                        onClick={() => {
                            setOpen(true);
                            setShowSearchBar(true);
                        }}>
                        <Search className="tw-h-7 tw-w-7" />
                    </div>
                </div>
            </div>
            <div
                className={`tw-fixed tw-top-0 tw-transition tw-duration-500 tw-w-[360px] tw-max-w-[100%] tw-bg-secondary-200 tw-h-[100vh] tw-overflow-y-auto tw-z-10 tw-px-4 ${
                    isOpen ? 'tw-translate-x-0' : 'tw-translate-x-[-100%]'
                }`}>
                <div className="tw-flex tw-justify-between tw-gap-5 tw-items-center tw-pt-10 tw-pb-4 tw-border-b tw-border-b-secondary-100">
                    <div className="tw-py-3">
                        <img
                            className="tw-w-[126px]"
                            src="/sammaan_capital_logo.png"
                            alt="logo"
                        />
                    </div>
                    <div
                        className="tw-cursor-pointer"
                        onClick={() => {
                            setOpen(false);
                            setShowSearchBar(false);
                        }}>
                        <X className="tw-w-10 tw-h-10" />
                    </div>
                </div>
                {!showSearchBar ? (
                    <div>
                        <ItemBuilder
                            items={headerMenuItems}
                            itemBuilder={(item, itemIndex) => {
                                return (
                                    <div
                                        key={itemIndex}
                                        className="tw-py-4 tw-border-b tw-border-b-secondary-100">
                                        <div
                                            className={concatenateNonNullStringsWithSpaces(
                                                'tw-flex tw-gap-2 tw-justify-between tw-items-center tw-cursor-pointer tw-h-full tw-box-border tw-relative tw-text-[16px]',
                                            )}
                                            onClick={() =>
                                                handelShowItem(itemIndex)
                                            }>
                                            {item.chevron ? (
                                                <div>
                                                    <div>{item.contentId}</div>
                                                </div>
                                            ) : (
                                                <Link to={item.link}>
                                                    {item.contentId}
                                                </Link>
                                            )}
                                            {item.chevron &&
                                                (showList[itemIndex] ? (
                                                    <ChevronLeft />
                                                ) : (
                                                    <ChevronRight />
                                                ))}
                                        </div>
                                        {showList[itemIndex] &&
                                            item.chevron && (
                                                <div
                                                    className="tw-w-full"
                                                    // onClick={() => makeListFalse()}
                                                >
                                                    <div className="">
                                                        <ItemBuilder
                                                            items={
                                                                options[
                                                                    itemIndex
                                                                ].optionList
                                                            }
                                                            itemBuilder={(
                                                                i,
                                                                iIndex,
                                                            ) => {
                                                                return (
                                                                    <div className="tw-text-[14px] tw-p-2 tw-text-secondary-600">
                                                                        <Link
                                                                            to={
                                                                                i.link
                                                                            }
                                                                            key={
                                                                                iIndex
                                                                            }
                                                                            className="">
                                                                            {
                                                                                i.title
                                                                            }
                                                                        </Link>
                                                                    </div>
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                );
                            }}
                        />
                        <ItemBuilder
                            items={topMenu}
                            itemBuilder={(topMenuItem, topMenuIndex) => {
                                return (
                                    <div
                                        key={topMenuIndex}
                                        className={concatenateNonNullStringsWithSpaces(
                                            'tw-text-[16px] tw-py-4',
                                            topMenuIndex == topMenu.length - 1
                                                ? ''
                                                : 'tw-border-b tw-border-b-secondary-100',
                                        )}>
                                        <Link
                                            to={topMenuItem.link}
                                            key={topMenuIndex}>
                                            {topMenuItem.title}
                                        </Link>
                                    </div>
                                );
                            }}
                        />
                        <VerticalSpacer className="tw-h-6" />
                        <button className="sc-cta-outline-button tw-flex tw-justify-between tw-gap-3 tw-w-full tw-mb-10">
                            <div>
                                {contentData.getContent(
                                    '2019a034-396c-4e92-b276-27d71267228b',
                                )}
                            </div>
                            <ChevronDown />
                        </button>
                    </div>
                ) : (
                    <div className="tw-grid tw-gap-8">
                        <div className="tw-grid tw-gap-6">
                            <div className="sc-text-body tw-text-secondary-600 tw-pt-6">
                                {contentData.getContent(
                                    'ad890c17-1d54-4730-941b-5818dee32576',
                                )}
                            </div>
                            <div className="tw-relative">
                                <SearchableSelect
                                    items={
                                        pagesOptions == null
                                            ? []
                                            : pagesOptions.map(
                                                  (page, pageIndex) => {
                                                      return {
                                                          name: page.name,
                                                          index: pageIndex,
                                                      };
                                                  },
                                              )
                                    }
                                    selectedItem={
                                        pagesOptions == null ||
                                        selectedPageIndex == null
                                            ? null
                                            : {
                                                  name: pagesOptions[
                                                      selectedPageIndex
                                                  ].name,
                                                  index: selectedPageIndex,
                                              }
                                    }
                                    placeholder={contentData.getContent(
                                        '4ea5f527-4a58-4404-a7a3-9b2da34102df',
                                    )}
                                    setSelectedItem={item => {
                                        if (item == null) {
                                            return null;
                                        }
                                        setSelectedPageIndex(item.index);
                                        setSelectedPage(item.name);
                                        return {
                                            name: item.name,
                                        };
                                    }}
                                    filterFunction={(items, query) =>
                                        items.filter(item =>
                                            item.name
                                                .toLowerCase()
                                                .startsWith(
                                                    query.toLowerCase(),
                                                ),
                                        )
                                    }
                                    renderFunction={item => {
                                        if (item == null) {
                                            return '';
                                        }
                                        return `${item.name}`;
                                    }}
                                    disabled={pagesOptions == null}
                                    inputClassName="disabled:tw-opacity-[0.6] disabled:!tw-bg-secondary-100 disabled:dark:tw-opacity-1 disabled:dark:!tw-bg-secondary-300 disabled:dark:!tw-text-secondary-900 sc-text-input"
                                />
                                <Link
                                    className="tw-hidden"
                                    to={
                                        selectedPage
                                            ? pagesOptions.filter(
                                                  item =>
                                                      item.name == selectedPage,
                                              )[0].link
                                            : '#'
                                    }
                                    ref={hitUrlRef}>
                                    Hit
                                </Link>
                                <div className="tw-absolute tw-top-0 tw-right-5 tw-h-full tw-flex tw-items-center">
                                    <Search />
                                </div>
                            </div>
                        </div>
                        <div className="tw-grid tw-gap-4">
                            <div className="sc-text-body tw-font-semibold">
                                {contentData.getContent(
                                    'c32993b8-787c-4a32-9be2-d92b7ae7fb2c',
                                )}
                            </div>
                            <div className="tw-flex tw-gap-4 tw-flex-wrap">
                                <ItemBuilder
                                    items={quickSearches}
                                    itemBuilder={(item, itemIndex) => {
                                        return (
                                            <Link
                                                to={item.link}
                                                key={itemIndex}
                                                className="tw-p-2 tw-rounded-lg tw-bg-secondary-100 sc-text-body">
                                                {item.name}
                                            </Link>
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isOpen && (
                <div
                    className="tw-absolute tw-top-0 tw-left-0 tw-h-[100vh] tw-w-[100vw] tw-bg-secondary-800 tw-opacity-70"
                    onClick={() => {
                        setOpen(false);
                        setShowSearchBar(false);
                    }}
                />
            )}
        </div>
    );
}
