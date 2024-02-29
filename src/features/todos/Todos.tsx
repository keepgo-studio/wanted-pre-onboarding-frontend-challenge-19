import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Container from '../../components/Container'

const Todos = () => {
  return (
    <div className='fcenter w-full h-full'>
      <Container>
        <TodoForm />

        <div className='h-6'/>

        <TodoList />
      </Container>
    </div>
  )
}

export default Todos