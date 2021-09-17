import React from 'react'
import getConfig from 'next/config'

import ThemeSwitcher from '../../ThemeSwitcher'
import bgMobileLight from '../../../assets/images/bg-mobile-light.jpg'
import bgDesktopLight from '../../../assets/images/bg-desktop-light.jpg'

import styles from './styles.module.css'

export const Header: React.FC = () => {
  const {publicRuntimeConfig: {basePath}} = getConfig();
  
  console.log('config', basePath)

  return (
    <header className={styles.container}>
      <img
        src={`${basePath}${bgMobileLight.src}`}
        className={`${styles.mobile} ${styles.light}`}
      />
      <img
        src={`${basePath}${bgDesktopLight.src}`}
        className={`${styles.desktop} ${styles.light}`}
      />

      <div className={styles.header}>
        <h1 className={styles.title}>TODO</h1>
        <ThemeSwitcher />{' '}
      </div>
    </header>
  )
}
