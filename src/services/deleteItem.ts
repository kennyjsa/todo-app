import { ITodo } from '../interfaces/ITodo'
import { database } from './database'

export async function deleteItem(id: string) {
  await database.deleteValue(id)
}
