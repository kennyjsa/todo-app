import { ITodo } from '../interfaces/ITodo'
import { database } from './database'

export async function listTodos() {
  const todos = await database.getAllValue()
  return todos
}
