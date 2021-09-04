import Image from 'next/image'
import React from 'react'

import styles from './styles.module.css'

interface CheckboxProps {
  checked: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <div className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
      {checked && (
        <Image src="/assets/images/icon-check.svg" width="9px" height="8px" />
      )}
    </div>
  )
}
