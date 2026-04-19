import type { Meta, StoryObj } from "@storybook/react-vite";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {

  title: "Components/Icon",
  component: Icon,
  args: {
    name: 'search',
    size: 18
  }
}
export default meta

type Story = StoryObj<typeof Icon>

export const Search: Story = {
  args: {
    name: 'search',
  },

}
export const Close: Story = {
  args: {
    name: 'close',
  },
};
export const Warning: Story = {
  args: {
    name: 'warning',
  },
};

export const AllIcons: Story = {
  render: () => {
    const name = [
      'search',
      'close',
      'warning',
    ] as const
    return (
      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        {
          name.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: 12,
                width: 80,
                background: '#1ad5d2',
                borderRadius: 8,
              }}
            >
              <Icon name={name} size={18} />
              <span style={{ fontSize: 12 }}>{name}</span>
            </div>
          ))
        }
      </div>
    )
  }
}