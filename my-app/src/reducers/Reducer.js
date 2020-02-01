export const intialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  {
    item: "Become a react developer",
    completed: false,
    id: 3892987590,
  },
  {
    item: "Learn how to have a mental model for JS",
    completed: false,
    id: 3892987591,
  },
]
  export const todoReducer = (state, action) => {
    switch(action.type) {
      case "ADD_TODO":
        return { 
          ...state, 
          completed: false 
      }
  default:
      return state;
  }
};