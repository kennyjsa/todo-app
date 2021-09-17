import React, { useState } from 'react'
import Image from 'next/image'

import MoonIcon from '../../assets/images/icon-moon.svg'
import SunIcon from '../../assets/images/icon-sun.svg'

import styles from './styles.module.css'
import { useTheme } from '../../hooks/useTheme'
import { Theme } from '../../contexts/ThemeContext'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()
  
  const isDark = theme === Theme.dark

  return (
    <div>
      {!isDark && (
        <button className={styles.button} onClick={() => setTheme(Theme.dark)}>
          <MoonIcon />
        </button>
      )}

      {isDark && (
        <button className={styles.button} onClick={() => setTheme(Theme.light)}>
          <SunIcon />
        </button>
      )}
    </div>
  )
}

export default ThemeSwitcher
