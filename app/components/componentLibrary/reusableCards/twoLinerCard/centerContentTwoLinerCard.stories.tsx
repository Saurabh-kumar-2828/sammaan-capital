import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {CenterContentTwoLinerCard} from './centerContentTwoLinerCard';

const meta = {
    title: 'Components/ReusableCards/CenterContentTwoLinerCard/CenterContentTwoLinerCard',
    component: CenterContentTwoLinerCard,
    args:  {
        title: "Attractive Interest Rates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
} satisfies Meta<typeof CenterContentTwoLinerCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:  {
        title: "Attractive Interest Rates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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




