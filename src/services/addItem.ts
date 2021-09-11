import { ITodo } from '../interfaces/ITodo'
import { database } from './database'

export async function addItem(todo: ITodo) {
  await database.putValue(todo)
}
