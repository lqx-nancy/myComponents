import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import  type { UploadFileItem } from './Upload'
import Upload from './Upload'

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
}

export default meta
type Story = StoryObj<typeof Upload>

export const Basic: Story = {
  render: () => {
    const [files, setFiles] = useState<UploadFileItem[]>([])

    return (
      <Upload
        value={files}
        onChange={setFiles}
        buttonText="上传单个文件"
      />
    )
  },
}

export const Multiple: Story = {
    //当组件需要 useState / 状态管理时，必须写 render
    //而不需要状态管理的时候arg即可
  render: () => {
    const [files, setFiles] = useState<UploadFileItem[]>([])

    return (
      <Upload
        value={files}
        onChange={setFiles}
        multiple
        maxCount={10}
        buttonText="上传多个"
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: 'No😁',
    value: [],
  },
}
