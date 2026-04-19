import "./Button.scss"

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'primary' | 'default' | 'danger'
    size?: 'small' | 'middle' | 'large'
    disabled?: boolean
    onClick?: () => void
}

export default function Button({
  children,
  type = 'default',
  size = 'middle',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`z-button z-button--${type} z-button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}