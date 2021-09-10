import { ITodo } from '../interfaces/ITodo'
import { database } from './database'

export function addItem(todo: ITodo) {
  database.putValue(todo)
}
