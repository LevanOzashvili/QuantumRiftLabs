import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ type, value, onChange, ...rest }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
      className={styles.customInput}
    />
  )
}

export default Input
