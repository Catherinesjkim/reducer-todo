// Uncontrolled component - Input Field
// 1. Implement a state variable for the input component
  // 2. Update the input component with the state variable
  // 3. Implement handleChanges to recognize typing in the input component

// import React from "react";
// import { render } from "@testing-library/react";

// clss TodoForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: ""
//     }
//   }

//   changeHandler = event => {
//     this.ListeningStateChangedEvent({userInput: event.target.value})
//   }

//   submitHandler = event => {
//     event.preventDefault();
//     this.props.addTodoList(this.state.userInput)
//     this.ListeningStateChangedEvent({userInput: ""})
//   }

//   render() {
//     console.log(this.state.userInput);
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <input
//            type="text"
//            name="userInput"
//            value={this.state.userInput}
//            onChange={this.changeHandler}
//           />
//           <button type="submit">Add Todo Here</button
//         </form>
//       </div>
//     );
//   };
// };

// export default TodoForm;