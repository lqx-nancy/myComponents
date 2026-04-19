import './Menu.scss'

export interface MenuItem {
  key: string
  label: string
  disabled?: boolean
}

export interface MenuProps {
  items: MenuItem[]
  activeKey?: string
  mode?: 'horizontal' | 'vertical'
  onSelect?: (key: string) => void
}

export default function Menu({
  items,
  activeKey,
  mode = 'horizontal',
  onSelect,
}: MenuProps) {
  return (
    <ul className={`z-menu z-menu--${mode}`}>
      {items.map((item) => (
        <li
          key={item.key}
          className={[
            'z-menu__item',
            activeKey === item.key ? 'is-active' : '',
            item.disabled ? 'is-disabled' : '',
          ].join(' ')}
          onClick={() => {
            if (!item.disabled) {
              onSelect?.(item.key)
            }
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
}
