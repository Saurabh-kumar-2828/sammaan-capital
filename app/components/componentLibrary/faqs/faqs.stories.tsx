import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {FaqsSectionComponent} from './faqsComponent';

const meta = {
    title: 'Components/Faqs/faqs',
    component: FaqsComponent,
    args: [
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
    ],
} satisfies Meta<typeof FaqsComponent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: [
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        },
        {
            question: 'How Are You?',
            answer: 'I am fine.',
        }
    ],
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
