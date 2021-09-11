import React from 'react'
import Image from 'next/image'
import { Checkbox } from '../../Checkbox'

import styles from './styles.module.css'
import { ITodo } from '../../../interfaces/ITodo'

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
        <Image
          src="/assets/images/icon-cross.svg"
          alt="delete"
          width="12px"
          height="12px"
        />
      </div>
    </div>
  )
}

export default TodoItem
