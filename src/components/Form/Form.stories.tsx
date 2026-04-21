import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Form, FormItem } from './Form';
import type { FormRules } from './Form';
import Multiselect from '../Multiselect/mutiselect'
const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: false },
    model: { control: false },
    rules: { control: false },
    onSubmit: { action: 'submit' },
    onReset: { action: 'reset' },
  }
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;


function DemoInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ padding: '6px 8px', border: '1px solid #ccc' }} />;
}

export const Basic: Story = {
  args: {
    children: null,
    model: {},
    rules: {},
    onSubmit: () => { },
    onReset: () => { },
  },
  render: () => {
    const [model, setModel] = useState({
      username: '',
      password: '',
      choose:[] as string[]
    });

    const rules: FormRules = {
      username: [
        { required: true, message: '用户名不能为空' },
        { min: 3, message: '用户名至少 3 位' },
      ],
      password: [
        { required: true, message: '密码不能为空' },
        { min: 6, message: '密码至少 6 位' },
      ],
      choose:[
        { required: true, message: '请选择' },
      ]
    };

    return (
      <div style={{ width: 360 }}>
        <Form
          model={model}
          rules={rules}
          onSubmit={(value) => {
            alert(JSON.stringify(value, null, 2));
          }}
          onReset={() => {
            setModel({ username: '', password: '',choose:[] });
          }}
        >
          <FormItem name="username" label="用户名">
            <DemoInput
              value={model.username}
              onChange={(e) =>
                setModel((prev) => ({ ...prev, username: e.target.value }))
              }
              placeholder="请输入用户名"
            />
          </FormItem>

          <FormItem name="password" label="密码">
            <DemoInput
              type="password"
              value={model.password}
              onChange={(e) =>
                setModel((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="请输入密码"
            />
          </FormItem>

          <FormItem name='choose' label='选择'>
            <Multiselect
              options={[
                { value: '蒲熠星', label: '蒲熠星' },
                { value: '明日方舟', label: 'arcknights' },
                { value: '终末地', label: '终末地' },
                { value: '维啥戴尔', label: '维啥戴尔' },
                { value: '维什戴尔', label: '维什戴尔' },
              ]}
              value={model.choose}
              onChange={(val) =>
                setModel((prev) => ({ ...prev, choose: val }))
              }
            />


          </FormItem>

          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <button type="submit">提交</button>
            <button type="reset">重置</button>
          </div>
        </Form>
      </div>
    );
  },
};
