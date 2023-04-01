import { useState } from 'react';
import InputToDo from './components/InputToDo';
import './css/App.css';
import ToDoList from './components/ToDoList';

function App() {
  const [list, setList] = useState([]);
  // setInterval(() => {console.log(list)}, 10)
  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputToDo list={list} setList={setList} />
      <ToDoList list={list} setList={setList} />
    </div>
  );
}

export default App;
