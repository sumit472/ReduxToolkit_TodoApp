import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()
  return (
    <>
      <div>Todos</div>
      {todos.map((item) => (
        <>
          <li key={item.id}>{item.text}</li>
          <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
        </>
      ))}
    </>
  )
}

export default Todos