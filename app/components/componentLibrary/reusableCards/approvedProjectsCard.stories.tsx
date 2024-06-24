import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {ApprovedProjectsCard} from './approvedProjectsCard';
const meta = {
    title: 'Components/reusableCards/approvedProjects',
    component: ApprovedProjectsCard,
    args: {
        projectName: 'Greater Kailash Luxury Rooms',
        typeOfFlat: '3, 4 BHK Flats',
        price: '₹ 48 Lac onwards',
        buttonText: 'Contact Now',
        buttonLink: '#',
    },
} satisfies Meta<typeof ApprovedProjectsCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        projectName: 'Greater Kailash Luxury Rooms',
        typeOfFlat: '3, 4 BHK Flats',
        price: '₹ 48 Lac onwards',
        buttonText: 'Contact Now',
        buttonLink: '#',
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
