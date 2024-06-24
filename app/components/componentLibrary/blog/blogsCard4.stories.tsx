import type {Meta, StoryObj} from '@storybook/react';
import {BlogsCard4} from '~/components/componentLibrary/blog/blogsCard4';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/Blog/BlogCard4',
    component: BlogsCard4,
    args: {
        image: '',
        title: 'Ranked 20th among India’s Best Companies to Work For 2019',
        text: 'A study by Economic Times & Great Place to Work ® Institute',
        date: '28 June',
    },
} satisfies Meta<typeof BlogsCard4>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: '',
        title: 'Ranked 20th among India’s Best Companies to Work For 2019',
        text: 'A study by Economic Times & Great Place to Work ® Institute',
        date: '28 June',
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
