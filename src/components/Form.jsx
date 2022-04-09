import { nanoid } from 'nanoid'
import React from 'react'

const TodoList = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos((prev) => (
        [...prev, { text: inputText, completed: false, id: nanoid() }]
    ))
    setInputText('')
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
     
        <input 
              onChange={inputTextHandler} 
              type='text' 
              className='todo-input' 
              value={inputText}
          />
          <button 
              onClick={submitTodoHandler} 
              className='todo-button' 
              type='submit'
          >
              <i className='fas fa-plus-square'></i>
          </button>
     
      
        <div className='select'>
            <select onChange={statusHandler} name='todos' className='filter-todo'>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default TodoList