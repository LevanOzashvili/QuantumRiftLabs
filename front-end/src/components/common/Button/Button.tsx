import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
}) => {
  return (
    <button type={type} onClick={onClick} className={styles.customButton}>
      {children}
    </button>
  )
}

export default Button
