import { ITodo } from '../interfaces/ITodo'
import { database } from './database'

export async function checkCompleted(id: number) {
  const todo = await database.getValue(id)
  if (!todo) return

  todo.completed = true
  database.putValue(todo)
}
