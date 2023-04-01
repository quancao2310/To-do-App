import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import '../css/ToDoList.css';


function ToDoList(props) {
  const { list } = props;
  return (
    <div>
      <ul className="list-todos">
        {list.map((item) => <ToDoItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}

export default ToDoList;