import React, { FormEvent, useState } from 'react'
import { useTodos } from '../../../hooks/useTodos'

import styles from './styles.module.css'

export const TodoForm: React.FC = () => {
  const { addTodo } = useTodos()
  const [text, setText] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (text.trim() === '') {
      alert('You need to enter the task')
      return
    }

    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.todoForm}>
        <div className={styles.icon}></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </form>
  )
}
