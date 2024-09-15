import React from 'react'

const TodoCard = (props) => {
  const {children,deleteTodos,index,editTodos} = props
  return (
    <li className="todoItem">
      {children}
      <div className='actionsContainer'>
          <button onClick={()=>{
            editTodos(index)
          }}>
            <i className="fa-solid fa-pen-to-square"></i>  
          </button>
          <button onClick={() => {deleteTodos(index)}}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
      </div>
    </li>
  )
}

export default TodoCard
