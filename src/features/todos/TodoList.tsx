import { useDispatch, useSelector } from 'react-redux'
import { Todo, removeTodo, selectTodoList } from './todosSlice'
import Button from '../../components/Button';
import Container from '../../components/Container';

import type { AppDispatch } from '../../store/store';

const TodoItem = ({ info }: { info: Todo; }) => {
  const { id, title, datetime} = info;
  const dispatch = useDispatch<AppDispatch>();
  const formDate = new Date(datetime).toUTCString();

  return (
    <li>
      <Container>
        <section>
          <h4 className='text-lg font-bold'>{title}</h4>
          <p className='text-sm font-light text-gray-400'>{formDate}</p>
        </section>

        <div className='h-6'/>
        
        <div className='flex justify-end'>
          <Button onClick={() => dispatch(removeTodo(id))}>Remove</Button>
        </div>
      </Container>
    </li>
  )
}

const TodoList = () => {
  const { ids, entities: list } = useSelector(selectTodoList);

  return (
    <Container>
      <ul className='h-96 overflow-auto flex flex-col gap-2'>
      {ids.map((id) => (
        <TodoItem key={id} info={list[id]} />
      ))}
      </ul>
    </Container>
  )
}

export default TodoList