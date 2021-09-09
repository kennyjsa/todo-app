import type { NextPage } from 'next'

import { TodoForm } from '../components/todo/TodoForm'
import { TodoList } from '../components/todo/TodoList'
import { TodoFilter } from '../components/todo/TodoFilter'

const Home: NextPage = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </>
  )
}

export default Home
