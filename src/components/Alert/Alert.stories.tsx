import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    args: {
        type: 'info',
        title: '提示信息',
        description: '仅仅展示。',
        closable: true,
    },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {}

export const Success: Story = {
    args: {
        type: 'success',
        title: '操作成功',
        description: '操作已经成功！！',
    },
}

export const Warning: Story = {
    args: {
        type: 'warning',
        title: '警告信息',
        description: 'Warning！Warning！Warning！',
    },
}

export const Error: Story = {
    args: {
        type: 'error',
        title: '错误信息',
        description: '臭狗屎！失！败！',
    },
}
