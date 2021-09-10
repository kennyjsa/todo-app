import { ITodo } from '../interfaces/ITodo'
import { database } from './database'

export function deleteItem(id: number) {
  database.deleteValue(id)
}
