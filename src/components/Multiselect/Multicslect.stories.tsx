import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Multiselect from './mutiselect'

const meta: Meta<typeof Multiselect> = {
  title: 'Components/Multiselect',
  component: Multiselect,
}

export default meta

type Story = StoryObj<typeof Multiselect>

export const Basic: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState<string[]>(['react'])

      return (
        <Multiselect
          value={value}
          onChange={setValue}
          options={[
            { label: '蒲熠星', value: 'pyx' },
            { label: '赵卫中', value: 'zwz' },
            { label: '臭老太', value: 'badbad' },
          ]}
          placeholder="搜素你最讨厌|喜欢的某人"
        />
      )
    }

    return <Demo />
  },
}
