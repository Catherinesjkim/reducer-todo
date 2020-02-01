import React from "react";

export const ToDo = props => {
  console.log(props);

  return (
    <div className="id">
      <li 
        onClick={() => props.toggleCompleted(props.todo.id)} 
        id={props.todo.id} 
        style={{textDecoration: props.todo.completed ? "line-through" : "none"}}
      >{props.todo.todo}
      </li>
    </div>
  )
}




