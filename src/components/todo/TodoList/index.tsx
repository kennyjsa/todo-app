import React, { useEffect, useState } from 'react'
import { useTodos } from '../../../hooks/useTodos'
import { ITodo } from '../../../interfaces/ITodo'
import { TodoControlBar } from '../TodoControlBar'
import { TodoFilter } from '../TodoFilter'
import TodoItem from '../TodoItem'

import styles from './styles.module.css'

export const TodoList: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const { todos, toggleCompleted, deleteTodo, clearCompleted } = useTodos()

  useEffect(() => {
    switch (filter) {
      case 'all':
        setFilteredTodos(todos)
        break

      case 'active':
        setFilteredTodos(todos.filter((x) => !x.completed))
        break

      case 'completed':
        setFilteredTodos(todos.filter((x) => x.completed))
        break
    }
  }, [filter, todos])

  const handleToggleComplete = (id: string) => {
    toggleCompleted(id)
  }

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }
  const handleClearCompleted = () => {
    clearCompleted()
  }

  return (
    <>
      <div className={styles.todoList}>
        {filteredTodos.map((x) => (
          <TodoItem
            key={x.id}
            id={x.id}
            completed={x.completed}
            text={x.text}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
        <TodoControlBar
          count={todos.filter((x) => !x.completed).length}
          onClearCompleted={handleClearCompleted}
        />
      </div>
      <TodoFilter
        filter={filter}
        onChangeFilter={(filter) => setFilter(filter)}
      />
    </>
  )
}

const __todos = [
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
