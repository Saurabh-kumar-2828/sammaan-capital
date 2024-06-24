import {Listbox} from '@headlessui/react';
import {Select} from '@mantine/core';
import React from 'react';
import {CaretDownFill, ChevronDown, ChevronUp} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function SelectComponent<T>({
    items,
    placeholder,
    itemBuilder,
    value,
    setValue,
    disabled,
    buttonClassName,
    greyBg,
    className,
    placeholderClassName,
    widthFit,
}: {
    items: Array<string>;
    itemBuilder: (item: T) => string;
    value: T;
    setValue: React.Dispatch<T>;
    disabled?: boolean;
    buttonClassName?: string;
    greyBg?: boolean;
    className?: string;
    placeholderClassName?: string;
    widthFit?: boolean;
    placeholder?: string
}) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Listbox
            value={value}
            onChange={setValue}
            as="div"
            className={concatenateNonNullStringsWithSpaces(
                'tw-relative tw-w-fit tw-rounded-lg',
                className ? className : '',
            )}
            disabled={disabled}>
            <Listbox.Button
                className={concatenateNonNullStringsWithSpaces(
                    'tw-w-full tw-rounded-lg tw-flex tw-gap-5 tw-flex-row tw-items-between sc-text-input tw-bg-secondary-100  tw-h-12',
                    disabled
                        ? 'tw-text-[#272727] tw-bg-neutral-600'
                        : 'tw-text-secondary-600',
                    buttonClassName,
                    widthFit? "tw-w-full tw-min-w-[100%]" : "tw-min-w-[19.5rem]"
                )}
                onClick={() => setIsOpen(!isOpen)}>
                <div className={concatenateNonNullStringsWithSpaces("tw-flex-1 tw-text-left", placeholderClassName)}>
                    <div
                        dangerouslySetInnerHTML={{__html: itemBuilder(value)}}
                    />
                </div>

                <div className="tw-flex-none tw-h-fit tw-my-auto">
                    {isOpen ? (
                        <ChevronUp className="tw-w-4 tw-h-4" />
                    ) : (
                        <ChevronDown className="tw-w-4 tw-h-4" />
                    )}
                </div>
            </Listbox.Button>

            <Listbox.Options className="tw-absolute tw-z-50 tw-top-[100%] tw-left-0 tw-right-0 tw-rounded-lg tw-max-h-60 tw-overflow-y-auto sc-scroll-line-hidden tw-border tw-border-secondary-100 tw-bg-secondary-200">
                <ItemBuilder
                    items={items.filter(item => item != null)}
                    itemBuilder={(item, itemIndex) => (
                        <Listbox.Option
                            value={item}
                            key={itemIndex}
                            as={React.Fragment}>
                            {({active, selected}) => (
                                <div onClick={()=>setIsOpen(!isOpen)}
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-w-full tw-grid tw-grid-cols-[minmax(0,1fr)_auto] tw-items-center tw-gap-x-2 tw-px-4 tw-py-2 tw-cursor-pointer tw-duration-200',
                                        active
                                            ? 'tw-bg-primary-500 tw-text-white'
                                            : 'tw-bg-white tw-text-secondary-900',
                                    )}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: itemBuilder(item),
                                        }}
                                    />

                                    {/* {selected ? <CheckAll className="tw-w-8 tw-h-8" /> : <div className="tw-w-8 tw-h-8" />} */}
                                </div>
                            )}
                        </Listbox.Option>
                    )}
                    spaceBuilder={spaceIndex => (
                        <div className="tw-px-4" key={spaceIndex}>
                            <div className="tw-h-px tw-bg-secondary-100" />
                        </div>
                    )}
                />
            </Listbox.Options>
        </Listbox>
        // <div>
        //     <Select
        //         placeholder={placeholder}
        //         data={items}
        //         rightSection={
        //             <ChevronDown className="tw-w-4 tw-h-4" />
        //         }
        //         classNames={{
        //             input: "!tw-bg-green-bg !tw-min-h-[50px] !tw-rounded-lg !tw-border-none !sc-text-input",
        //             dropdown:
        //                 "tw-border-2 tw-border-secondary-400",
        //             option: "db-text-body hover:tw-bg-secondary-400",
        //         }}
        //     />
        // </div>
    );
}
