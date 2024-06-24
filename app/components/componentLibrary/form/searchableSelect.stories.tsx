import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {SearchableSelect} from './searchableSelect';

const meta = {
    title: 'Components/Form/SearchableSelect',
    component: SearchableSelect,
    args: {
        items: ["Rahul", "Sunny", "Govind"],
    },
} satisfies Meta<typeof SearchableSelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        items: ["Rahul", "Sunny", "Govind"],
    },
};
export const Resizable: Story = {
    args: {
        showBackground: false,
        className: 'tw-max-w-[21rem]',
    },
    decorators: [
        withBorder,
        withBackground,
        withResizableBox('20rem', '20rem'),
    ],
};




