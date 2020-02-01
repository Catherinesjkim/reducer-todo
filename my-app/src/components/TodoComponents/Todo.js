import React, { useState, useReducer } from 'react';

const initialState = {
  todo: "I am from the reducer!",
  adding: false
};

// Take in 2 object and turns into 1 single object
const todoReducer = (state, action) => {
  // shorter swtich statement instae of the long if else statement 
  switch(action.type) {
    case "TOGGLE_ADD": 
      return {
        ...state, 
        adding: !state.adding
      };
    case "UPDATE_TODO":
      return {
        ...state, 
        todo: action.payload, 
        adding: false
      };
    // case "TOGGLE_TODO":
    //   return {
    //     ...state,
    //     todos: state.todos.map()
    //   }
    // case "FILTER_TODOS":
    //   return {
    //     ...state,
    //     todos: state.todos.filter()
    //   }
    default:
      return state;
  }
};
// What's happening under the hood: 
// const dispatch = action => {
//   currentState = reducer(currentState, action);
// }
// dispatch funciton takes in an "action object" and (under the hood) calles the reducer with the current state and the passed in action object. 
// Action objects are special objects -> actions must have a "type" property to tell the reducer what action just occured 
// actions may also have a "payload" property, if the reducer needs any data to update state for that particular action
const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newErrandText, setNewErrandText] = useState('');
  
  const handleChanges = e => {
    setNewErrandText(e.target.value);
  };

  return (
    <div>
      {!state.adding ? (
        <h1>
          {state.todo} 
          <i 
            className="far fa-edit" 
            onClick={() => dispatch({ type: "TOGGLE_ADD" })}
          />
        </h1>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newErrandText"
            onChange={handleChanges}
          />
          <button 
            onClick={() => 
              dispatch({ type: 'UPDATE_TODO', payload: newErrandText })
            }
          >
            Update Todo Item
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;