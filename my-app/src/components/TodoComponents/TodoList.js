import React from "react";
import { ToDo } from "./Todo";

export const List = props => {
  return <div>{props.todos.map((todo, index) => {
    return <ToDo key={index} todo={todo} toggleCompleted={props.toggleCompleted} />;
  })}</div>;
}