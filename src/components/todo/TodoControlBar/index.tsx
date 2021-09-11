import React from 'react'

import styles from './styles.module.css'

type TodoControlBarProps = {
  count: number
  onClearCompleted: () => void
}

export const TodoControlBar: React.FC<TodoControlBarProps> = ({
  count,
  onClearCompleted
}) => {
  return (
    <div className={styles.container}>
      <div>
        {count} {count > 1 ? 'items' : 'item'} left
      </div>
      <button onClick={onClearCompleted} className={styles.clear}>
        Clear Completed
      </button>
    </div>
  )
}
