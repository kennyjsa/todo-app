import type { NextPage } from 'next'

import { TodoContextProvider } from '../contexts/TodoContext'

import { TodoForm } from '../components/todo/TodoForm'
import { TodoList } from '../components/todo/TodoList'
import { TodoFilter } from '../components/todo/TodoFilter'

const Home: NextPage = () => {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </TodoContextProvider>
  )
}

export default Home
