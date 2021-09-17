import { DBSchema, IDBPDatabase, openDB } from 'idb'
import { ITodo } from '../interfaces/ITodo'

interface TodoDB extends DBSchema {
  todos: {
    value: ITodo
    key: string
  }
}

const TABLE_TODOS = 'todos'

class Database {
  private database: string
  private db: IDBPDatabase<TodoDB> | undefined

  constructor(database: string) {
    this.database = database
  }

  private async createDatabase() {
    return await openDB<TodoDB>(this.database, 1, {
      upgrade(db) {
        if (db.objectStoreNames.contains(TABLE_TODOS)) return

        db.createObjectStore(TABLE_TODOS, {
          keyPath: 'id'
        })
      }
    })
  }

  private async getDatabase(): Promise<IDBPDatabase<TodoDB>> {
    if (this.db) {
      return this.db
    } else {
      this.db = await this.createDatabase()
      return this.db
    }
  }

  public async getValue(id: string) {
    const db = await this.getDatabase()

    const tx = db.transaction(TABLE_TODOS, 'readonly')
    const store = tx.objectStore(TABLE_TODOS)
    const result = await store.get(id)

    return result
  }

  public async getAllValue() {
    const db = await this.getDatabase()

    const tx = db.transaction(TABLE_TODOS, 'readonly')
    const store = tx.objectStore(TABLE_TODOS)
    const result = await store.getAll()

    return result
  }

  public async putValue(value: ITodo) {
    const db = await this.getDatabase()

    const tx = db.transaction(TABLE_TODOS, 'readwrite')
    const store = tx.objectStore(TABLE_TODOS)
    const result = await store.put(value)

    return result
  }

  public async deleteValue(id: string) {
    const db = await this.getDatabase()

    const tx = db.transaction(TABLE_TODOS, 'readwrite')
    const store = tx.objectStore(TABLE_TODOS)
    const result = await store.get(id)

    if (!result) {
      return false
    }

    await store.delete(id)
    return true
  }
}

export const database = new Database('todos-db')
