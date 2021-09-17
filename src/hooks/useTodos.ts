import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

export function useTodos() {
  const value = useContext(TodoContext)

  return value
}
