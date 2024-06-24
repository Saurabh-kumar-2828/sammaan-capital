import type {Meta, StoryObj} from '@storybook/react';
import {TestimonialsCard} from '~/components/componentLibrary/reusableCards/testimonialsCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {EmbeddedYoutubeVideo} from '~/components/embeddedYoutubeVideo';
const meta = {
    title: 'Components/reusableCards/testimonialsCard',
    component: TestimonialsCard,
    args: {
        video: (
            <EmbeddedYoutubeVideo
                id="b4o3OPUM8Yg"
                style={{aspectRatio: '560/315'}}
                className="tw-rounded-lg"
            />
        ),
        name: "Sameer Gehlauti",
        rating: Number(
            5,
        ),
        state: "Kota",
        message: "Lorem ipsum dolor sit amet consectetur. Rhoncus nulla eleifend consectetur id. Tellus eget sit in vitae",
    },
} satisfies Meta<typeof TestimonialsCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        video: (
            <EmbeddedYoutubeVideo
                id="b4o3OPUM8Yg"
                style={{aspectRatio: '560/315'}}
                className="tw-rounded-lg"
            />
        ),
        name: "Sameer Gehlauti",
        rating: Number(
            5,
        ),
        state: "Kota",
        message: "Lorem ipsum dolor sit amet consectetur. Rhoncus nulla eleifend consectetur id. Tellus eget sit in vitae",
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




