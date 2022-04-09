import { useState, useEffect } from 'react'

import './App.css'
// Components 
import TodoList from './components/TodoList'
import Form from './components/Form'

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))
      } else {
        const localTodos = JSON.parse(localStorage.getItem('todos'))
        setTodos(localTodos)
      }
    }
    getLocalTodos()
  }, [])


  useEffect(() => {
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
      }
    }
    filterHandler()
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    saveLocalTodos()
  }, [status, todos])

  

  return (
    <div className="App">
      <header>
        Mahmoud's TodoList
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  )
}

export default App
