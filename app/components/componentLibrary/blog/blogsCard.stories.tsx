import type {Meta, StoryObj} from '@storybook/react';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/Blog/BlogCard',
    component: BlogsCard,
    args: {
        img: "",
        title: "How It Works",
        text: "Learn about the process of getting a home loan.",
        date: "22 june",
    },
} satisfies Meta<typeof BlogsCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        img: "",
        title: "How It Works",
        text: "Learn about the process of getting a home loan.",
        date: "22 june",
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




