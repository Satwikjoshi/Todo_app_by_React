import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,SetValue] = useState("")

    const handlesubmit = (e) =>{
        e.preventDefault();
        addTodo(value)
        SetValue("")
    }
  return (
   <form className='TodoForm' onSubmit={handlesubmit}>
      <input
      type='text'
      placeholder='What is the task today?'
      value={value}
      onChange={(e)=> SetValue(e.target.value)}
      className='todo-input'
      />
      <button type='submit' className='todo-btn'>Add Task</button>
     </form>
  )
}



