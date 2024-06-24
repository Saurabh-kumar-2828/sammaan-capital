import {Link} from '@remix-run/react';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: Array<{contentId: string; link: string}>;
}) {
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-flex tw-flex-row tw-items-center tw-text-secondary-600 sc-footer-text">
                <ItemBuilder
                    items={breadcrumbs}
                    itemBuilder={(item, itemIndex) => (
                        <Link className={concatenateNonNullStringsWithSpaces(itemIndex == breadcrumbs.length-1 ? "" : "")} to={item.link} key={itemIndex}>
                            {/* {contentData.getContent(item.contentId)} */}
                            {item.contentId}
                        </Link>
                    )}
                    spaceBuilder={spaceIndex => (
                        <div className="tw-px-2" key={spaceIndex}>
                            {'>'}
                        </div>
                    )}
                />
            </div>
        </div>
    );
}
