import React from 'react'
import Todoinput from './Components/Todoinput'
import TodoList from './Components/TodoList'
import {useState,useEffect} from 'react'

const App = () => {
  
  const [todos,setTodos] = useState(['Todo 1','Todo 2','Todo 3'])
  const [todoValue,setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:
      newList
    }))

  }

  function addTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function deleteTodos(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function editTodos(index){
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    deleteTodos(index)
  }

  useEffect(() => {
    if(!localStorage){
      return 
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return 
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>  
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} addTodos={addTodos}/>
      <TodoList editTodos={editTodos} deleteTodos={deleteTodos} todos={todos}/>
    </>
  )
}

export default App
// In a JSX file we can write javascript within a HTML tag