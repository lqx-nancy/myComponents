import './Alert.scss'

export interface AlertProps {
    type?: 'success' | 'info' | 'warning' | 'error'
    title: string
    description?: string
    closable?: boolean
    onClose?: () => void
}

export default function Alert({
    type = 'info',
    title,
    description,
    closable = false,
    onClose,
}: AlertProps) {
    return (
        <div className={`alert alert--${type}`}>
            <div className="alert__content">
                <div className="alert__title">{title}</div>
                {description ? (
                    <div className="alert__description">{description}</div>
                ) : null}
            </div>

            {closable ? (
                <button
                    className="alert__close"
                    type="button"
                    onClick={onClose}
                >
                    ×
                </button>
            ) : null}
        </div>
    )
}
