import './Select.scss'
import { useEffect, useMemo, useRef, useState } from 'react'
import Alert from '../Alert/Alert'

export interface SelectOption {
    label: string
    value: string | number
    disabled?: boolean
}

export interface SelectProps {
    value?: string | number
    defaultValue?: string | number
    options: SelectOption[]
    placeholder?: string
    disabled?: boolean
    onChange?: (value: string | number) => void
    className?: string
}


export default function Select({
    value,
    defaultValue,
    options,
    placeholder = 'Please select',
    disabled = false,
    onChange,
    className = '',
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    //非受控模式下，组件自己保存的值
    const [innerValue, setInnerValue] = useState<string | number | undefined>(defaultValue)  // 内部状态值（非受控模式）
    const rootRef = useRef<HTMLDivElement>(null)
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : innerValue
    // 根据当前值查找对应的选项
    //只有 options 或 currentValue 变化时，才重新查找当前选项
    const currentOption = useMemo(() => {
        return options.find((option) => option.value === currentValue)
    }, [options, currentValue])
    const [showBigStar, setShowBigStar] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    // 切换下拉框的展开/收起状态
    const handleToggle = () => {
        if (disabled) return
        setIsOpen((prev) => !prev)
    }

    // 处理选项选择
    const handleSelect = (option: SelectOption) => {
        if (disabled || option.disabled) return
        // 如果非受控，更新内部状态
        if (!isControlled) {
            setInnerValue(option.value)
        }
        onChange?.(option.value)
        setIsOpen(false)

        if (option.value === 'star') {
            setShowBigStar(true)
            setTimeout(() => setShowBigStar(false), 1200)
        }

        if(option.value === '臭狗屎'){
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 1200)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!rootRef.current) return
            //rootRef.current.contains(点击的东西)
            if (!rootRef.current.contains(event.target as Node)) {
                setIsOpen(false)
                //点了按钮 → event.target = 按钮
                //点了下拉框 → event.target = 下拉框
                //contains() 要求括号里必须是 DOM 节点。
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={rootRef}
            className={`select ${disabled ? 'select--disabled' : ''} ${className}`.trim()}
        // .trim() 去掉前后空格
        >
            {/* 选择器部分 */}
            <div
                className={`select__selector ${isOpen ? 'select__selector--open' : ''}`}
                onClick={handleToggle}
                role="button"
                aria-expanded={isOpen}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
            >
                {/* 显示当前选中的值*/}
                <span className={`select__value ${currentOption ? '' : 'select__placeholder'}`.trim()}>
                    {currentOption?.value === 'star' ? '🌟' : currentOption?.label || placeholder}
                </span>
                {/* 下拉箭头 */}
                <span className={`select__arrow ${isOpen ? 'select__arrow--open' : ''}`}>▾</span>
            </div>

            {/* 下拉选项列表 */}
            {isOpen && (
                <div className="select__dropdown" role="listbox">
                    {options.map((item) => {
                        const isActive = item.value === currentValue

                        return (
                            <div
                                key={item.value}
                                className={[
                                    'select__option',
                                    item.disabled ? 'select__option--disabled' : '',
                                    isActive ? 'select__option--active' : '',
                                ]
                                    .filter(Boolean)
                                    //把空字符串删掉，避免出现多余空格
                                    .join(' ')}
                                //把数组拼成："select__option select__option--active"
                                onClick={() => handleSelect(item)}
                                //role="option" 给无障碍读屏软件用的，告诉设备：这是一个选项，不用管，不影响功能。
                                aria-selected={isActive}
                                aria-disabled={item.disabled}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
            )}
            {showBigStar && <div className="star">★</div>}
            {showAlert && (
                <Alert
                title='WARNING!!!!!'
                description='别选高数！快跑！💩'
                type='warning'
                />)}
        </div>

    )
}
