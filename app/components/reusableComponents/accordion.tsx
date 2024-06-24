import {Disclosure, Transition} from '@headlessui/react';
import {Dash, Plus} from 'react-bootstrap-icons';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function Accordion({
    title,
    panelItem,
    className,
    defaultOpen,
    accordionPanelClassName,
    disclosurePanelContainerClassName,
}: {
    title: string;
    panelItem: JSX.Element;
    className?: string;
    defaultOpen?: boolean;
    accordionPanelClassName?: string;
    disclosurePanelContainerClassName?: string;
}) {
    return (
        <Disclosure defaultOpen={defaultOpen ?? false}>
            {({open}) => (
                <div
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-bg-secondary-200 tw-border tw-border-secondary-100 sc-xsmall-shadow tw-rounded-lg',
                        className,
                    )}>
                    <Disclosure.Button
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-text-left tw-p-5 tw-flex tw-justify-between tw-items-center tw-w-full tw-gap-x-4',
                            `${open ? 'tw-rounded-t-lg' : 'tw-rounded-lg'}`,
                        )}>
                        <div className="sc-text-secondary-900 tw-flex-1 sc-text-body">
                            {title}
                        </div>
                        <div className="tw-h-6 tw-w-6 sc-bg-background-500 tw-rounded-lg tw-flex-0">
                            {open ? <Dash className='tw-bg-secondary-100'/> : <Plus className='tw-bg-secondary-100'/>}
                        </div>
                    </Disclosure.Button>

                    <Transition
                        show={open}
                        enter="tw-transition-all tw-ease-in-out tw-duration-200 tw-overflow-hidden"
                        enterFrom="tw-max-h-0 tw-opacity-0"
                        enterTo={concatenateNonNullStringsWithSpaces(
                            'tw-opacity-full',
                            disclosurePanelContainerClassName,
                        )}
                        leave="tw-transition-all tw-ease-in-out tw-duration-200 tw-overflow-hidden"
                        leaveFrom="tw-opacity-full"
                        leaveTo="tw-max-h-0 tw-opacity-0">
                        <Disclosure.Panel
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-p-5 tw-rounded-b-lg tw-border-t tw-border-secondary-300 tw-flex tw-flex-col tw-gap-6',
                                accordionPanelClassName,
                            )}>
                            {panelItem}
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    );
}
