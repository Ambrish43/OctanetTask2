
import { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [tasks,settasks]= useState([])
  const [input,setinput]= useState("")
  
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);  
  
  function addTask(){
    if(input!==""){
      const newList= tasks.concat(input.trim())
      settasks(newList)
      setinput("")
  
    }
  }
  
  function removeTask(index){
      const newList = tasks.filter((task,rest)=> rest !==index)
      settasks(newList)
  }

  return (
    <div className="App">
      <header className="App-header"><h1>TO-DO LIST</h1></header>
      <div className='App-rest'>
        <div className="elementSet1">
        <input className="taskinput" type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder="Add a task"
        ></input>
        <button onClick={addTask}>Add Task</button>
      </div>
    <div className="output">
    <ul>
      {tasks.map((task, index) => (
      <li key={index}>
        <div className="task-container">
          <input type='checkbox' />
          {task}
        </div>
        <button onClick={() => removeTask(index)}>Remove Task</button>
      </li>
      ))}
    </ul>
    </div>
    </div>
    </div>
  );
}

export default App;
