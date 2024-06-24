import {GooglePlay} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {VerticalSpacer} from '../reusableComponents/verticalSpacer';
import {Link} from '@remix-run/react';
import {useContext} from 'react';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export function DownloadAppSection({
    background,
}: {
    background?: boolean;
}) {
    const contentData = useContext(ContentProviderContext);
    // console.log("heading id >>>>", contentData.getContent(headingId));
    // const userAgent = navigator.userAgent ;
    const items = [
        {
            title: contentData.getContent("8817b542-af7a-4ca8-be67-7d50d9632f28"),
            text: contentData.getContent("c5bc92aa-66d9-4102-80ef-e4980ba6fcd1"),
        },
        {
            title: contentData.getContent("acead166-4c2c-484e-a463-dff4f1f46e9e"),
            text: contentData.getContent("9e1abca9-ca47-4ed4-8a10-4a3801d45016"),
        },
        {
            title: contentData.getContent("3b06322c-1d05-44e1-bbba-620e84e8dc41"),
            text: contentData.getContent("f5f5a508-c205-43c6-8971-d4c5e3771c6e"),
        },
        {
            title: contentData.getContent("6fde484e-cb6c-44f8-ba06-0d38fc0dadde"),
            text: contentData.getContent("d09b1745-78aa-4fba-b030-e8afd45d7812"),
        },
    ];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge tw-py-10 lg:tw-py-20',
                background ? 'tw-bg-secondary-400' : '',
            )}>
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-grid tw-grid-cols-1 tw-grid-rows-[auto_1.5rem_minmax(0,1fr)] lg:tw-grid-rows-[auto_1.5rem_minmax(0,1fr)] lg:tw-grid-cols-2 max-lg:tw-bg-secondary-400">
                    <div
                        className="tw-row-start-1 sc-text-headline tw-text-center"
                        dangerouslySetInnerHTML={{
                            __html: contentData.getContent("750d9db7-8c90-40da-b561-fcf2d932cedb"),
                        }}
                    />
                    <div className="tw-grid tw-row-start-3 tw-col-start-1 tw-z-10">
                        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-rows-2 tw-grid-rows-[auto_1.4rem_auto_auto] lg:tw-gap-6 tw-gap-x-10 max-lg:tw-self-end tw-justify-self-center">
                            <ItemBuilder
                                items={items}
                                itemBuilder={(item, itemIndex) => (
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            'sc-small-shadow tw-bg-secondary-200 lg:tw-p-12 tw-px-2 tw-py-3 tw-rounded-lg tw-grid tw-text-center tw-content-center tw-max-w-[15rem]',
                                            itemIndex === 0
                                                ? 'tw-row-start-1 lg:tw-row-start-1 tw-col-start-1 max-lg:tw-mt-4'
                                                : itemIndex === 1
                                                ? 'tw-row-start-1 lg:tw-row-start-1 tw-col-start-2 max-lg:tw-mb-4'
                                                : itemIndex === 2
                                                ? 'tw-row-start-4 lg:tw-row-start-2 tw-col-start-1'
                                                : itemIndex === 3
                                                ? 'tw-row-start-3 lg:tw-row-start-2 tw-col-start-2'
                                                : '',
                                        )}
                                        key={itemIndex}>
                                        <div className="sc-text-body">
                                            {item.title}
                                        </div>
                                        <div className="sc-text-body">
                                            {item.text}
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                        <VerticalSpacer className="tw-h-4" />
                        <div className="tw-text-title2 tw-text-secondary-800 tw-text-center tw-hidden lg:tw-block">
                            {contentData.getContent("1086512a-398b-4ffc-ad2e-9e81ef0379ca")}
                        </div>
                        <VerticalSpacer className="tw-h-3 tw-hidden lg:tw-block" />
                        <div className="lg:tw-grid tw-grid-cols-2 tw-gap-4 tw-hidden">
                            <Link
                                to=""
                                className="tw-grid tw-justify-self-end tw-h-[2.8rem] tw-w-[9.9rem] tw-bg-slate-300">
                                {/* <img src="" /> */}
                            </Link>
                            <Link
                                to=""
                                className="tw-h-[2.8rem] tw-w-[9.9rem] tw-bg-slate-300">
                                {/* <img src="" /> */}
                            </Link>
                        </div>
                    </div>
                    <div className="tw-col-start-1 lg:tw-col-start-2 lg:tw-row-start-1 tw-row-start-3 tw-row-span-full tw-grid tw-justify-self-center lg:tw-justify-self-end">
                        <div className="lg:tw-w-[16.6rem] tw-w-[9.8rem] tw-h-[20rem] lg:tw-h-full tw-bg-primary-400 tw-rounded-3xl">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <VerticalSpacer className="tw-h-4" />
                <div className="sc-cta-button lg:tw-hidden tw-grid tw-grid-cols-[minmax(0,1fr)_auto] tw-justify-items-center tw-items-center">
                    {contentData.getContent("7f0f81ce-a277-4206-bac7-b789b987bc61")}
                    {/* {
                        (/android/i.test(userAgent)) ? <GooglePlay className="tw-text-end tw-h-4 tw-w-4" /> : <div>hi</div>
                    } */}
                    <GooglePlay className="tw-text-end tw-h-4 tw-w-4" />
                </div>
            </div>
        </div>
    );
}
