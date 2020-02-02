import React from "react";
import { ToDo } from "./Todo";

export const List = props => {
  return (
    <ol>{props.todos.map(todo => (
      <li>
        <ToDo 
          key={todo.id} 
          todo={todo} 
          toggleCompleted={props.toggleCompleted} 
        />
      </li> 
      ))}
    </ol>
  )
};
