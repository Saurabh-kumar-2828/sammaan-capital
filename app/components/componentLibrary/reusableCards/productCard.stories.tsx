import type {Meta, StoryObj} from '@storybook/react';
import {ProductCard} from '~/components/componentLibrary/reusableCards/productCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/productCard',
    component: ProductCard,
    args: {
        img: '',
        title: 'Home Loan Balance Transfer',
        linkText: 'Apply Now',
        linkUrl: '/',
    },
} satisfies Meta<typeof ProductCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        img: '',
        title: 'Home Loan Balance Transfer',
        linkText: 'Apply Now',
        linkUrl: '/',
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




