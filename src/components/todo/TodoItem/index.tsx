import React from 'react'
import Image from 'next/image'
import { Checkbox } from '../../Checkbox'

import styles from './styles.module.css'

interface TodoItemProps {
  completed: boolean
  text: string
}

const TodoItem: React.FC<TodoItemProps> = ({ completed, text }) => {
  return (
    <div className={`${styles.todoItem} ${completed ? styles.completed : ''}`}>
      <Checkbox checked={completed} />
      <div className={styles.text}>{text}</div>
      <div className={styles.delete}>
        <Image src="/assets/images/icon-cross.svg" width="12px" height="12px" />
      </div>
    </div>
  )
}

export default TodoItem
