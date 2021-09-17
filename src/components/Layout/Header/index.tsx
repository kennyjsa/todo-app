import React from 'react'
import getConfig from 'next/config'

import ThemeSwitcher from '../../ThemeSwitcher'
import bgMobileLight from '../../../assets/images/bg-mobile-light.jpg'
import bgDesktopLight from '../../../assets/images/bg-desktop-light.jpg'

import bgMobileDark from '../../../assets/images/bg-mobile-dark.jpg'
import bgDesktopDark from '../../../assets/images/bg-desktop-dark.jpg'

import styles from './styles.module.css'
import { useTheme } from '../../../hooks/useTheme'
import { Theme } from '../../../contexts/ThemeContext'

export const Header: React.FC = () => {
  const { theme } = useTheme()

  const {
    publicRuntimeConfig: { basePath }
  } = getConfig()
  let imgMobileSource = bgMobileLight.src
  let imgDesktopSource = bgDesktopLight.src
  if (theme === Theme.dark) {
    imgMobileSource = bgMobileDark.src
    imgDesktopSource = bgDesktopDark.src
  }

  return (
    <header className={styles.container}>
      <img
        src={`${basePath}${imgMobileSource}`}
        className={`${styles.mobile}`}
      />
      <img
        src={`${basePath}${imgDesktopSource}`}
        className={`${styles.desktop}`}
      />

      <div className={styles.header}>
        <h1 className={styles.title}>TODO</h1>
        <ThemeSwitcher />{' '}
      </div>
    </header>
  )
}
