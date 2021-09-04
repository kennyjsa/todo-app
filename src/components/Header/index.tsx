import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'

import styles from './styles.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <ThemeSwitcher />{' '}
    </header>
  )
}
