export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1,
    },
    {
      item: "Become a react developer",
      completed: false,
      id: 2,
    },
    {
      item: "Study React",
      completed: false,
      id: 3,
    },
  ],
};
// 1. Reducers are pure functions! - no side effects, always return the same output for the same input
// 2. Take in 2 objects, reduce them down to a single object and return that new object
// I need a let variable with the current state - global scope. 
// request 'type' key and an optional payload
// action object that describes to our reducer function what to do with the state. 
// required 'type' key// const todoReducer = (state, action) => {
// shorter swtich statement instead of the long if else statement
  export const todoReducer = (state, action) => {
    switch(action.type) {
      case "CREATE_TODO":
        return { 
          ...state, 
          todos: [...state.todos, {item: action.payload,
          completed: false,
          id: Date.now()}]  
      };
      case "TOGGLE_DELETE":
        return {
          ...state, 
          todos: state.todos.map(item => {
            return item.id === action.payload ? {
              ...item, completed: !item.completed
            } : item
          })
        };
      case "CLEAR_COMPLETED":
        return {
          ...state, 
          todos: state.todos.filter(todo => !todo.completed)
        };
    default:
        return state;
    }
};
