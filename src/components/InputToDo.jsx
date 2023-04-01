import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import '../css/InputToDo.css';

function InputToDo(props) {
  const { list, setList } = props;
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo === "") {
      alert("Please enter a task");
      return;
    }
    setList([...list, {id: Math.floor(Math.random() * 1000), value: todo}]);
    setTodo("");
  }
  return (
    <div className="input-todo">
      <input
        type="text"
        className="input-field"
        value={todo}
        placeholder="Enter task"
        onChange={(event) => {setTodo(event.target.value)}}
        onKeyUp={(event) => {event.key === 'Enter' && add()}}
      />
      <button type="button" className="input-submit" onClick={() => add()}>
        <AiOutlinePlusCircle size="3em" />
      </button>
    </div>
  );
}

export default InputToDo;