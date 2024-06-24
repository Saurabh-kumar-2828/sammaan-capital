import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {LocationCard} from './locationCard';

const meta = {
    title: 'Components/ReusableCards/LocationCard/LocationCard',
    component: LocationCard,
    args: {
        heading: "Location 1",
        address: "5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001",
        phoneNo: "9857454657",
        linkText: "Get Direction",
        link: "/"
    },
} satisfies Meta<typeof LocationCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        heading: "Location 1",
        address: "5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001",
        phoneNo: "9857454657",
        linkText: "Get Direction",
        link: "/"
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




