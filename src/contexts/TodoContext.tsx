import { FC, createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ITodo } from '../interfaces/ITodo'
import { addItem } from '../services/addItem'
import { toogleStatusCompleted } from '../services/toogleStatusCompleted'
import { deleteItem } from '../services/deleteItem'
import { listTodos } from '../services/listTodos'

type TodoContextProps = {
  todos: ITodo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  toggleCompleted: (id: string) => void
  clearCompleted: () => void
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
)

export const TodoContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const loadTodos = async () => {
    const todos = await listTodos()
    setTodos(todos)
  }
  useEffect(() => {
    loadTodos()
  }, [])

  const addTodo = async (text: string) => {
    const todo: ITodo = {
      id: uuidv4(),
      completed: false,
      text
    }
    await addItem(todo)

    loadTodos()
  }

  const toggleCompleted = async (id: string) => {
    await toogleStatusCompleted(id)

    loadTodos()
  }

  const deleteTodo = async (id: string) => {
    await deleteItem(id)

    loadTodos()
  }

  const clearCompleted = async () => {
    const completedList = todos.filter((x) => x.completed)

    await Promise.all(
      completedList.map(async (x) => {
        await deleteItem(x.id)
      })
    )

    loadTodos()
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleCompleted, clearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  )
}
