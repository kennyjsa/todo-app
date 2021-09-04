import React from 'react'
import { TodoControlBar } from '../TodoControlBar'
import TodoItem from '../TodoItem'

import styles from './styles.module.css'

export const TodoList: React.FC = () => {
  const todos = [
    {
      completed: true,
      text: 'Complete online JavaScript course'
    },
    {
      completed: false,
      text: 'Jog around the park 3x'
    },
    {
      completed: false,
      text: '10 minutes meditation'
    },
    {
      completed: false,
      text: 'Read for 1 hour'
    },
    {
      completed: false,
      text: 'Pick up groceries'
    },
    {
      completed: false,
      text: 'Complete Todo App on Frontend Mentor'
    }
  ]

  return (
    <div className={styles.todoList}>
      {todos.map((x) => (
        <TodoItem key={x.text} completed={x.completed} text={x.text} />
      ))}
      <TodoControlBar />
    </div>
  )
}
