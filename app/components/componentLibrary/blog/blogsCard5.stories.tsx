import type {Meta, StoryObj} from '@storybook/react';
import {BlogsCard5} from '~/components/componentLibrary/blog/blogsCard5';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/Blog/BlogCard5',
    component: BlogsCard5,
    args: {
        img: "",
        title: "How It Works",
        text: "Learn about the process of getting a home loan.",
    },
} satisfies Meta<typeof BlogsCard5>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        img: "",
        title: "How It Works",
        text: "Learn about the process of getting a home loan.",
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




