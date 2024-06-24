import {Link} from '@remix-run/react';
import {useContext, useState} from 'react';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export function StickyBar() {
    const contentData = useContext(ContentProviderContext);
    const buttons = [
        {
            image: contentData.getContent(''),
            text: contentData.getContent(
                'ea781c08-8ee5-4ad6-a39b-dcbc958a8963',
            ),
            links: '#',
        },
        {
            image: contentData.getContent(''),
            text: contentData.getContent(
                'b171a04d-db3f-4499-b7ff-03c3b7e07c8a',
            ),
            links: '#',
        },
        {
            image: contentData.getContent(''),
            text: contentData.getContent(
                '2868a060-1bd7-4ef5-a416-a037f4a5d205',
            ),
            links: '#',
        },
        {
            image: contentData.getContent(''),
            text: contentData.getContent(
                '9ab125df-21f5-4883-a14b-902851ab1cdf',
            ),
            links: '#',
        },
    ];
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    return (
        <div className="lg:tw-hidden tw-sticky tw-bottom-0 tw-bg-secondary-200 tw-border tw-border-secondary-100 tw-rounded-t-lg tw-grid tw-grid-cols-4 tw-pb-2 tw-text-center tw-px-8 tw-z-[63]">
            {buttons.map((item, itemIndex) => (
                <button
                    key={itemIndex}
                    className={`tw-grid tw-items-center tw-pt-4 tw-pb-2 tw-rounded-b-full ${
                        selectedItemIndex === itemIndex
                            ? 'tw-bg-secondary-400'
                            : ''
                    }`}
                    onClick={() => setSelectedItemIndex(itemIndex)}>
                    <Link
                        to={item.links}
                        className="tw-grid tw-justify-items-center tw-items-center tw-text-center tw-gap-y-2">
                        <div className="tw-h-7 tw-w-7 tw-bg-primary-500" />
                        <div className="sc-text-icon tw-px-5">{item.text}</div>
                    </Link>
                </button>
            ))}
        </div>
    );
}
