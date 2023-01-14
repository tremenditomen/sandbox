// import logo from './logo.svg';
// import './App.css';
import {React, useState} from "react";
const taskList = []
const addTask = (input)=>{
  if (input.lenght > 0) {
    taskList.map([... taskList], taskList.push(input))
  }

}
function App() {
  const [currentTask , setCurrentTask] = useState ("")
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Welcome</h1>
          <div>
            <h2>Things that need to get done</h2>
            <button>Change Title</button>
            <ul>
              How to start
              <input value={""} placeholder={"Add things here!"} ></input>
              <button onClick={addTask()} > Add</button>
              <li>
                i need to make this list grow with an add button or something
                <button>Edit</button>
                <button>Delete</button>
              </li>
            </ul>
          </div>
      </header>
      <body>
        <h2>Wouldnt it be nice if this message changed depending on the amount of tasks you got done!</h2>
        <p>or if there was a check box and a percentage that tracked your progress</p>
        <p>would be nice if something nice flashed on screen once you've completed every task</p>

      </body>
    </div>
  );
}

export default App;
