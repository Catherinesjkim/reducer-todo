// Reducer: Set an initial state value through a reducer and render a list of errands from that state
// Reducer functions in React take in 2 objects - currentState and an action object - and "reduce" them down to a single object (new state). IOW it updates the state object by reducing the two given objects to new state object.

// Make  your state updates are very predictable. 

import React from 'react';
import Todo from './components/TodoComponents/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

// Reducer functions in React take in 2 objects - currentState and an action object - and "reduce" them down to a single object (new state). IOW it updates the state object by reducing the two given objects to a new state object. 

// Make your state updates very predictable. 
