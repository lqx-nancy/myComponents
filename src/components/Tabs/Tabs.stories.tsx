import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const items = [
  {
    key: 'overview',
    label: '概览',
    content: <div>总</div>,
  },
  {
    key: 'xxx',
    label: 'xxx',
    content: <div>依旧臭狗屎</div>,
  },
  
  {
    key: 'disabled',
    label: '禁用项',
    content: <div>这里不会被点击到。</div>,
    disabled: true,
  },
];

export const Basic: Story = {
  args: {
    items,
    defaultActiveKey: 'overview',
  },
};

export const Controlled: Story = {
  render: () => {
    const Demo = () => {
      const [activeKey, setActiveKey] = useState('docs');

      return (
        <div style={{ display: 'grid', gap: 12 }}>
          <Tabs items={items} activeKey={activeKey} onChange={setActiveKey} />
          <div>激活：{activeKey}</div>
        </div>
      );
    };

    return <Demo />;
  },
};
