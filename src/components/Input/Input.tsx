import './Input.scss'
import { useState } from 'react';

export interface InputProps {
    value?: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    onChange?: (value: string) => void;
    rightIcon?:'check'|'close'|'warning'
    defaultValue?: string;
}

export default function Input({
    value,
    placeholder,
    onChange,
    defaultValue = ''
}: InputProps)  
{
    const [innerValue, setInnerValue] = useState<string>(defaultValue);
    const currentValue = value !== undefined ? value : innerValue;

    const handleChange = (val: string) => {
    if (value === undefined) {
      setInnerValue(val);
    }
    onChange?.(val);
  };

    return (
        <div className='input-wrapper'>
            <input 
            className='input-inner'
            value={currentValue}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
            />

        </div>
    )
}

