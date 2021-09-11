import type { NextPage } from 'next'

import { TodoContextProvider } from '../contexts/TodoContext'

import { TodoForm } from '../components/todo/TodoForm'
import { TodoList } from '../components/todo/TodoList'

const Home: NextPage = () => {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  )
}

export default Home
