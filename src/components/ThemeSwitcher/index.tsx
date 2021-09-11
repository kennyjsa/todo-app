import React from 'react'
import Image from 'next/image'

// import { Container } from './styles';

const ThemeSwitcher: React.FC = () => {
  return (
    <div>
      <Image
        src="/assets/images/icon-moon.svg"
        alt="icon dark theme"
        width="20px"
        height="20px"
      />
    </div>
  )
}

export default ThemeSwitcher
