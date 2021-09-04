import React from 'react'

import styles from './styles.module.css'

export const TodoControlBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>5 items left</div>
      <div className={styles.clear}>Clear Completed</div>
    </div>
  )
}
