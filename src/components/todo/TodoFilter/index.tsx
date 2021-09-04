import React from 'react'

import styles from './styles.module.css'

export const TodoFilter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.link}>All</div>
      <div className={styles.link}>Active</div>
      <div className={styles.link}>Completed</div>
    </div>
  )
}
