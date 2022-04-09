import React from 'react'

const Todo = (props) => {

  const completeHandler = () => {
    props.setTodos(prev => (
      prev.map(item => {
        if(item.id === props.todo.id) {
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      }
      )
    ))
  }
  const deleteTodoHandler = () => {
    props.setTodos(props.todos.filter((el) => props.todo.id !== el.id))
  }

  return (
    <div className='todo'>
        <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>{props.text}</li>
        <button onClick={completeHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteTodoHandler} className='trash-btn'>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default Todo