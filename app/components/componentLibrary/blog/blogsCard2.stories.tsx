import type {Meta, StoryObj} from '@storybook/react';
import {BlogsCard2} from '~/components/componentLibrary/blog/blogsCard2';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/Blog/BlogCard2',
    component: BlogsCard2,
    args: {
        img: '',
        date: '22 june',
        title: 'Ranked 20th among India’s Best Companies to Work For 2019',
        text: 'A study by Economic Times & Great Place to Work ® Institute',
        linkText: 'Know more',
        linkUrl: '/',
    },
} satisfies Meta<typeof BlogsCard2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        img: '',
        date: '22 june',
        title: 'Ranked 20th among India’s Best Companies to Work For 2019',
        text: 'A study by Economic Times & Great Place to Work ® Institute',
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
