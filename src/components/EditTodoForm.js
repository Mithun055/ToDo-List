import React,{useState} from 'react';

export const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue]=useState(task.task);
    const handleSub=e=>{
        e.preventDefault();

        editTodo(value,task.id);
    }
  return (
    <form className='TodoForm' onSubmit={handleSub}>
        <input type="text" className='todo-input'
        value={value}
        placeholder='Update Task' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button></form>
  )
}
