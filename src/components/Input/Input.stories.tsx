import type { Meta,StoryObj } from "@storybook/react-vite";
import Input from "./Input"

const meta:Meta<typeof Input> = {
    title:'Components/Input',
    component:Input,
}

export default meta;

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: '请输入内容',
  },
};

// 2. 受控模式（有默认值）
// export const Controlled: Story = {
//   args: {
//     value: '我是初始值',
//     placeholder: '受控输入框',
//   },
// };

// // 3. 非受控模式
// export const Uncontrolled: Story = {
//   args: {
//     defaultValue: '非受控初始值',
//     placeholder: '非受控输入框',
//   },
// };