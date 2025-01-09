import React from 'react'
import { useState } from 'react'
import Nav from '../Nav'


function TodoSite () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <>
    <Nav/>
    <div className='todolist'>
      <h1>Todo List</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit} style={{fontSize:'20px', marginLeft:'10px',backgroundColor:'green',color:'white'}}>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() =>handleDelete(index)} style={{fontSize:'20px', marginLeft:'10px',backgroundColor:'red',color:'white'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div> 
    </>
  )
}

export default TodoSite