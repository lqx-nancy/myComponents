import './Multicslect.scss'
import { useState, useMemo } from 'react'

export interface OptionsItem {
    value: string,
    label: string
}

export interface MultiselectProps {
    options: OptionsItem[],
    onChange: (value: string[]) => void
    placeholder?: string
    value?: string[]
}

export default function Multiselect({
    options,
    onChange,
    placeholder = '请做出选择',
    value = []
}: MultiselectProps) {
    const [keyword, setKeyword] = useState('')
    const filterItems = useMemo(() => {
        return options.filter((item) =>
            item.label.toLowerCase().includes(keyword.toLowerCase()))
    }, [keyword, options])
    const toggleOption = (optionValue: string) => {
        const exists = value.includes(optionValue)
        const nextValue = exists ? value.filter((item) => item !== optionValue) : [...value, optionValue]
        onChange?.(nextValue)
    }
    return (
        <div className='multiSelect'>
            <input
                className='input'
                placeholder={placeholder}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <div className='Tags'>
                {value.map((item) =>{
                    const currentOption = options.find((option) => option.value === item)
                    return(
                        <span className='tag' key={item}>
                            {currentOption?.label}
                        </span>
                    )
                })}
            </div>
            <div className='list'>
                {filterItems.map((item) => {
                    const checked = value.includes(item.value)
                    return(
                        <li 
                        className={`item ${checked ? 'active' : ''}`}
                        key={item.value}
                        onClick={() => toggleOption(item.value)}
                        // onClick={() => toggleOption}
                        //你只是返回了 toggleOption 函数，没有真正执行，所以点击后 value 不会更新，active 样式当然也不会保持。
                        >
                            <span>{item.label}</span>
                            {checked && <span>✓</span>}
                        </li>
                    )
                })}
            </div>
        </div>
    )
}