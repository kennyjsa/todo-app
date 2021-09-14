import React, { useState } from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div>
      {!isDark && (
        <button className={styles.button}>
          <Image
            src="/assets/images/icon-moon.svg"
            alt="icon dark theme"
            layout="fill"
          />
        </button>
      )}

      {isDark && (
        <button className={styles.button}>
          <Image
            src="/assets/images/icon-sun.svg"
            alt="icon light theme"
            layout="fill"
          />
        </button>
      )}
    </div>
  )
}

export default ThemeSwitcher
