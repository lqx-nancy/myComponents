import { useMemo, useState } from 'react';
import './Tabs.scss';

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

export default function Tabs({
  items,
  activeKey,
  defaultActiveKey,
  onChange,
}: TabsProps) {
  const firstAvailableKey = useMemo(() => {
    return items.find((item) => !item.disabled)?.key || items[0]?.key || '';
  }, [items]);

  const [innerActiveKey, setInnerActiveKey] = useState(
    defaultActiveKey || firstAvailableKey,
  );

  const currentActiveKey = activeKey ?? innerActiveKey;

  const currentTab = items.find((item) => item.key === currentActiveKey) || items[0];

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return;

    if (activeKey === undefined) {
      setInnerActiveKey(key);
    }

    onChange?.(key);
  };

  return (
    <div className="z-tabs">
      <div className="z-tabs__nav">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            className={[
              'z-tabs__tab',
              currentActiveKey === item.key ? 'is-active' : '',
              item.disabled ? 'is-disabled' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => handleTabClick(item.key, item.disabled)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="z-tabs__content">{currentTab?.content}</div>
    </div>
  );
}
