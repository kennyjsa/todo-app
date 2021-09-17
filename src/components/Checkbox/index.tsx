import React from 'react'
import CheckIcon from '../../assets/images/icon-check.svg'
import styles from './styles.module.css'

interface CheckboxProps {
  checked: boolean
  onClick: () => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {
  return (
    <div
      className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
      role="checkbox"
      //aria-checked={styles.checked}
      onClick={onClick}
    >
      {checked && <CheckIcon className={styles.icon} />}
    </div>
  )
}
