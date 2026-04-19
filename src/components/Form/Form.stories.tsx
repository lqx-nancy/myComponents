import type { Meta, StoryObj } from '@storybook/react'
import Form from './Form'

const meta: Meta<typeof Form> = {
  title: 'Components/Form/DemoForm',
  component: Form,
}

export default meta
type Story = StoryObj<typeof Form>

export const Basic: Story = {}
