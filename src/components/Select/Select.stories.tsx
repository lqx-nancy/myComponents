import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

const options = [
  { label: '数据结构', value: 'zwz' },
  { label: '狗屎高数💩👎👎👎👎👎👎👎', value: '臭狗屎', disabled: true },
  { label: '蒲熠星啊蒲熠星🌟', value: 'star' },
]

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>()

    return (
      <Select
        value={value}
        options={options}
        placeholder="Please select"
        onChange={setValue}
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled select',
    options,
  },
}

export const DefaultValue: Story = {
  args: {
    defaultValue: 'star',
    options,
    placeholder: 'Please select',
  },
}
