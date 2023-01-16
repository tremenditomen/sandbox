// import logo from './logo.svg';
// import './App.css';
import { React, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  // const [update, setUpdate] = useState(input);
  const [list, setList] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log("Here", e.target.value);
  };
  const handleEdit = () => {};
  const handleClick = () => {
    let tempList = list;
    tempList.push(input);
    setList(tempList);
    setInput("");

    // setUpdate(input);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <div>
          <h2>Things that need to get done</h2>
          <button>Change Title</button>
          <ul>
            How to start
            <br></br>
            <input
              onChange={handleInput}
              value={input}
              type="text"
              name="name"
              placeholder={"Add things here!"}
            ></input>
            <button onClick={handleClick}> Add</button>
            {list.length > 0 &&
              list.map((item) => (
                <li>
                  {item}
                  <button>Edit</button>
                </li>
              ))}
            {/* <li>
              <h1>something:{input}</h1>

              <h3>TASKLIST {update}</h3>i need to make this list grow with an
              add button or something !!:<button>Edit</button>
              <button>Delete</button>
            </li> */}
          </ul>
        </div>
      </header>

      <h2>
        Wouldnt it be nice if this message changed depending on the amount of
        tasks you got done!
      </h2>
      <p>
        or if there was a check box and a percentage that tracked your progress
      </p>
      <p>
        would be nice if something nice flashed on screen once you've completed
        every task
      </p>
    </div>
  );
}

export default App;
