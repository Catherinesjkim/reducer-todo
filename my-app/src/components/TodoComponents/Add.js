import React, { useState } from 'react';

export const AddForm = props => {
  const [todoInput, handleChange ] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(todoInput);
    handleChange('');
  }

  const handleClear = event => {
    event.preventDefault();
    props.clearCompleted();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={(e) => {handleChange(e.target.value)}} 
        name="todoInput" 
        value={todoInput} 
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  )
}