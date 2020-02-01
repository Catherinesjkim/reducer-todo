// Reducer: Set an initial state value through a reducer and render a list of errands from that state
// Reducer functions in React take in 2 objects - currentState and an action object - and "reduce" them down to a single object (new state). IOW it updates the state object by reducing the two given objects to new state object.
// Make  your state updates are very predictable. 
import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/Reducer';
import './App.css';
import { AddForm } from './components/TodoComponents/Add';
import { List } from './components/TodoComponents/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = todo => {
    dispatch({
      type: "CREATE_TODO",
      todo: todo
    });
  }

  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_DELETE",
      id: id
    });
  }

  const clearCompleted = id => {
    dispatch({
      type: "CLEAR_COMPLETED",
      id: id
    });
  }

  return (
    <div className="App">
      <AddForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <List todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;

// Reducer functions in React take in 2 objects - currentState and an action object - and "reduce" them down to a single object (new state). IOW it updates the state object by reducing the two given objects to a new state object. 

// Make your state updates very predictable. 
