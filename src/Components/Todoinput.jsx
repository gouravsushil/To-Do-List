import React from 'react'

const Todoinput = (props) => {
  const {addTodos,todoValue,setTodoValue} = props
  return (
    <div>
      <header>
        <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} placeholder="Enter Todo..." />
        <button onClick={() => {addTodos(todoValue);setTodoValue('')}}>Add</button>
      </header>
    </div>
  )
}

export default Todoinput
