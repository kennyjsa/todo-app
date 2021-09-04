import React from 'react'

import styles from './styles.module.css'

export const TodoForm: React.FC = () => {
  return (
    <form>
      <div className={styles.todoForm}>
        <div className={styles.icon}></div>
        <input type="text" placeholder="Create a new todo..." />
      </div>
    </form>
  )
}
