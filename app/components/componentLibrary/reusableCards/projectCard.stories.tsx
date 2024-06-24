import type {Meta, StoryObj} from '@storybook/react';
import {ProjectCard} from '~/components/componentLibrary/reusableCards/projectCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/projectCard',
    component: ProjectCard,
    args: {
        image: "",
        location: "Noida",
        title: "DLF Crest",
        text: "The Crest, Zone 11 & 12, DLF City Phase-5",
      },
} satisfies Meta<typeof ProjectCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: "",
        location: "Noida",
        title: "DLF Crest",
        text: "The Crest, Zone 11 & 12, DLF City Phase-5",
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




