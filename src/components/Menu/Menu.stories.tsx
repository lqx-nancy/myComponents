import type { Meta, StoryObj } from '@storybook/react'
import Menu from './Menu'

const meta: Meta<typeof Menu> = {
    title: 'Components/Menu',
    component: Menu,
    args: {
        mode: 'horizontal',
        activeKey: 'home',
        items: [
            { key: 'home', label: '首页' },
            { key: 'xxxxxxxxeg', label: 'xxxxxxx' },
            { key: 'disabled', label: 'warning', disabled: true },
        ],
    },
}

export default meta

type Story = StoryObj<typeof Menu>

export const Horizontal: Story = {}

export const Vertical: Story = {
    args: {
        mode: 'vertical',
    },
}
