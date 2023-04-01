import React, {  } from "react";
import '../css/ToDoItem.css';

function ToDoItem(props) {
  const { key, item } = props;
  return (
    <li key={key} className="item-todo">
      <textarea className="item-textarea" disabled>{item.value}</textarea>
    </li>
  );
}

export default ToDoItem;