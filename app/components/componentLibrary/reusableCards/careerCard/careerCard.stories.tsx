import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {CareerCard} from './careerCard';

const meta = {
    title: 'Components/ReusableCards/CareerCard/CareerCard',
    component: CareerCard,
    args: {
        title: "Relationship Manager - Customer Success",
        text: "Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.",
        location: "New Delhi",
        linkText: "Read More",
        link: "/"
    },
} satisfies Meta<typeof CareerCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        title: "Relationship Manager - Customer Success",
        text: "Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.",
        location: "New Delhi",
        linkText: "Read More",
        link: "/",
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




