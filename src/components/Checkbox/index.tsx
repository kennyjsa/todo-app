import Image from 'next/image'
import React from 'react'

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
      {checked && (
        <Image
          className={styles.icon}
          src="/assets/images/icon-check.svg"
          alt="Check"
          layout="fill"
        />
      )}
    </div>
  )
}
