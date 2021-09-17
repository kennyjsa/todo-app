import React from 'react'
import { Checkbox } from '../../Checkbox'
import CrossIcon from '../../../assets/images/icon-cross.svg'

import styles from './styles.module.css'

interface TodoItemProps {
  id: string
  completed: boolean
  text: string
  onToggleComplete: (id: string) => void
  onDelete: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  completed,
  text,
  onToggleComplete,
  onDelete
}) => {
  const handleClick = () => {
    onToggleComplete(id)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <div className={`${styles.todoItem} ${completed ? styles.completed : ''}`}>
      <Checkbox checked={completed} onClick={handleClick} />
      <div className={styles.text}>{text}</div>
      <div className={styles.delete} role="button" onClick={handleDelete}>
        <CrossIcon />
      </div>
    </div>
  )
}

export default TodoItem
