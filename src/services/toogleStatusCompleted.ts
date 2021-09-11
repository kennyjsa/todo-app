import { database } from './database'

export async function toogleStatusCompleted(id: string) {
  const todo = await database.getValue(id)
  if (!todo) return

  todo.completed = !todo.completed
  await database.putValue(todo)
}
