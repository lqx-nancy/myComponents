import './Upload.scss'
import type { ChangeEvent } from 'react'
import { useRef } from 'react'

export interface UploadFileItem {
    uid: string
    file: File
    name: string
    size: number // 文件大小
    type: string // 文件类型
}

export interface UploadProps {
    value?: UploadFileItem[]
    onChange?: (files: UploadFileItem[]) => void
    accept?: string
    multiple?: boolean
    disabled?: boolean
    maxCount?: number
    buttonText?: string
    className?: string
}

function createFileItem(file: File): UploadFileItem {
    return {
        uid: `${file.name}-${file.lastModified}-${Math.random().toString(16).slice(2)}`,
        //Math.random() 随机数 给每个文件生成一个永不重复的身份证号！
        file,
        name: file.name,
        size: file.size,
        type: file.type,
    }
}

function formatFileSize(size: number) {
    if (size < 1024) return `${size} B`
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`
    return `${(size / 1024 / 1024).toFixed(2)} MB`
    //.toFixed(2) = 保留两位小数
}

export default function Upload({
    value = [],
    onChange,
    accept,
    multiple = false,
    disabled = false,
    maxCount,
    buttonText = '上传',
    className = '',
}: UploadProps) {
    const inputRef = useRef<HTMLInputElement>(null)


    const handleClick = () => {
        if (disabled) return
        inputRef.current?.click()
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files // 拿到选中的文件
        if (!fileList) return

        const nextFiles = Array.from(fileList).map(createFileItem)
        let mergedFiles = multiple ? [...value, ...nextFiles] : nextFiles.slice(0, 1)

        if (typeof maxCount === 'number') {
            mergedFiles = mergedFiles.slice(0, maxCount)
        }
        // 清空，保证下次能选同一个文件
        onChange?.(mergedFiles)
        event.target.value = ''
    }

    const handleRemove = (uid: string) => {
        if (disabled) return
        const nextFiles = value.filter((item) => item.uid !== uid)
        onChange?.(nextFiles)
    }

    return (
        <div className={`upload ${disabled ? 'upload--disabled' : ''} ${className}`.trim()}>
            <input
                ref={inputRef}
                className="upload__input"
                type="file"
                accept={accept}
                multiple={multiple}
                disabled={disabled}
                onChange={handleFileChange}
            />

            <button type="button" className="upload__trigger" onClick={handleClick} disabled={disabled}>
                {buttonText}
            </button>
            {/* 条件 && 要显示的内容 */}
            {value.length > 0 && (
                <div className="upload__list">
                    {value.map((item) => (
                        <div className="upload__item" key={item.uid}>
                            <div className="upload__meta">
                                <div className="upload__name">{item.name}</div>
                                <div className="upload__size">{formatFileSize(item.size)}</div>
                            </div>
                            <button
                                type="button"
                                className="upload__remove"
                                onClick={() => handleRemove(item.uid)}
                                disabled={disabled}
                            >
                                删删删
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
