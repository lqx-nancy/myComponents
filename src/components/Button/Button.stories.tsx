import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: '按钮',
    type: 'default',
    size: 'middle',
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Primary: Story = {
  args: {
    type: 'primary',
    children: '主要按钮',
  },
}

export const Danger: Story = {
  args: {
    type: 'danger',
    children: '危险按钮',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: '大按钮',
  },
}
