// import logo from './logo.svg';
// import './App.css';
import { React, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completeTaskCount, setCompleteTaskCount] = useState(0);
  
  const handleClear = ()=>{
    setTodoList([])
    setCompleteTaskCount(0)
    setInput("")
  }
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          setCompleteTaskCount(completeTaskCount + 1);
        } else {setCompleteTaskCount(completeTaskCount -1 )}
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };
  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("");
  };
  return (
    <div>
      <h2>Todo list</h2>
      <input
        value={input}
        onInput={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>
      <div>
      <b>Pending Tasks: </b> {todoList.length - completeTaskCount}

      </div>
      <div>
      <b>Completed Tasks: </b>{completeTaskCount}

      </div>
      <div>
        <ul>
          {todoList.map((todo) => {
            return (
              <li
                complete={todo.complete}
                id={todo.id}
                onClick={() => handleComplete(todo.id)}
                style={{
                  listStyle: "none",
                  textDecoration: todo.complete && "line-through",
                }}
              >
                {todo.task}
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
