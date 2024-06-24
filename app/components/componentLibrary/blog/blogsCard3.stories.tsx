import type {Meta, StoryObj} from '@storybook/react';
import {BlogsCard3} from '~/components/componentLibrary/blog/blogsCard3';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/Blog/BlogCard3',
    component: BlogsCard3,
    args: {
        image: '',
        title: 'Sheoratan Mundra',
        text: 'Vice-Chairman, Managing Director Know more about leader',
        linkText: 'Know more',
        linkUrl: '/',
    },
} satisfies Meta<typeof BlogsCard3>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: '',
        title: 'Sheoratan Mundra',
        text: 'Vice-Chairman, Managing Director Know more about leader',
        linkText: 'Know more',
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
