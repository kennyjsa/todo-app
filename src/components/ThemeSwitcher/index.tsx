import React, { useState } from 'react'
import Image from 'next/image'

import MoonIcon from '../../assets/images/icon-moon.svg'
import SunIcon from '../../assets/images/icon-sun.svg'

import styles from './styles.module.css'

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div>
      {!isDark && (
        <button className={styles.button}>
          <MoonIcon />
        </button>
      )}

      {isDark && (
        <button className={styles.button}>
          <SunIcon />
        </button>
      )}
    </div>
  )
}

export default ThemeSwitcher
