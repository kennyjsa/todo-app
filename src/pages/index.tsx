import type { NextPage } from 'next'

import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { Header } from '../components/layout/Header'
import ThemeSwitcher from '../components/ThemeSwitcher'

import { TodoForm } from '../components/todo/TodoForm'
import { TodoList } from '../components/todo/TodoList'
import { ImageWrapper } from '../components/layout/ImageWrapper'
import { TodoFilter } from '../components/todo/TodoFilter'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <ImageWrapper />
        <Main>
          <Header>
            <h1>TODO</h1>
            <ThemeSwitcher />
          </Header>
          <TodoForm />
          <TodoList />
          <TodoFilter />
        </Main>
      </Container>
    </>
  )
}

export default Home
