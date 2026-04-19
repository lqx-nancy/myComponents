import './Icon.scss'

export interface IconProps {
    name:
    | 'search'
    | 'warning'
    | 'close';
    size?: number
    className?: string
}

export default function Icon({
    name,
    size = 24,
    className = ''
}: IconProps) {
    const renderIcon = () => {
        switch (name) {
            case 'search':
                return(
                    <>
                        {/* <circle cx="11" cy="11" r="6" strokeWidth="2" fill="none" />
                        <path d="M16 16L21 21" strokeWidth="2" strokeLinecap="round" /> */}
                        <span>🔍</span>
                    </>
                )
            case 'warning':
                return(
                    <>
                        {/* <path d="M12 4L21 20H3L12 4Z"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            fill="none" /> */}
                            <span>⚠️</span>
                    </>
                )
            case 'close':
                return(
                    <>
                        {/* <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" />
                        <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" /> */}
                        <span>❌</span>
                    </>
                )

        }
    }
    return (
            <span
                className={`icon ${className}`.trim()}
                style={{ width: size, height: size }}
                aria-hidden="true"
                //给读屏软件用的：这是图标，不用读出来
            >
                {renderIcon()}
                {/* <svg
                    viewBox="0 0 48 48"
                    width={size}
                    height={size}
                    fill="none"
                    stroke="currentColor"
                >
                {iconType()}
                </svg> */}
                {/*svg是用代码画图的画布  */}
            </span>
        )
}