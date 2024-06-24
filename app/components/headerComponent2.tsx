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

export function HeaderComponent2({
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
    const headerMenuItems = [
        {
            contentId: 'Home Loan',
            link: '#',
            chevron: true,
        },
        {
            contentId: 'LAP',
            link: '/product/loan-against-property',
            chevron: false,
        },
        {
            contentId: 'Calculator',
            link: '#',
            chevron: true,
        },
        {
            contentId: 'Contact Us',
            link: '#',
            chevron: true,
        },
        {
            contentId: 'Become a Partner',
            link: '/become-a-partner',
            chevron: false,
        },
    ];

    const quickSearches = [
        {
            name: 'Loan Against  Property',
            link: '/product/loan-against-property',
        },
        {
            name: 'New Home Loan',
            link: '/product/home-loan',
        },
        {
            name: 'Home Loan For NRI',
            link: '#',
        },
        {
            name: 'Rural Home Loan',
            link: '#',
        },
        {
            name: 'Home Extension Loan',
            link: '#',
        },
        {
            name: 'Home Renovation Loan',
            link: '#',
        },
        {
            name: 'EMI Calculator',
            link: '/emi-calculator',
        },
        {
            name: 'Eligibility Calculator',
            link: '#',
        },
    ];

    const languages = [
        {
            name: 'English',
            link: "#"
        },
        {
            name: 'Hindi',
            link: "#"
        },
        {
            name: 'Punjabi',
            link: "#"
        },
    ];

    const topMenu = [
        {
            title: 'About us',
            link: '/about-us/overview',
        },
        {
            title: 'Management Team',
            link: '/about-us/management-team',
        },
        {
            title: 'Board of Directors',
            link: '/about-us/board-of-directors',
        },
        {
            title: 'ESG Profile',
            link: '#',
        },
        {
            title: 'WhatsApp - +91-8929899391',
            link: 'https://wa.me/8929899391',
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
                                                        Lorem ipsum dolor sit amet. Et ipsa sunt non dolores libero et maxime velit
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
                                                                placeholder='What are you looking for'
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
                                                        Quick Searches
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
                        Login
                            <ChevronDown className="tw-w-4 tw-h-4" />
                        </button>

                        <button className="sc-cta-button tw-flex tw-gap-1 tw-items-center">
                        Apply Now
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
                        En
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
                            Login
                            </div>
                            <ChevronDown />
                        </button>
                    </div>
                ) : (
                    <div className="tw-grid tw-gap-8">
                        <div className="tw-grid tw-gap-6">
                            <div className="sc-text-body tw-text-secondary-600 tw-pt-6">
                            Lorem ipsum dolor sit amet. Et ipsa sunt non dolores libero et maxime velit
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
                                    placeholder='What are you looking for'
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
                            Quick Searches
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
