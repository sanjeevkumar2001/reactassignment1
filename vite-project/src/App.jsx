
import React, { useState } from 'react';
import { useEffect } from 'react';
import Item from './components/todolist';

import Header from './components/header';
import List from './components/todoitem';
import './components/style.css'


function App() {
    
        const[tasks,setTasks] = useState([]);
        const[task,setTask] = useState("");
        function addItem(){
         if(task.trim() !=""){
            const newTask = {  id: Math.floor(Math.random() * 100), text: task }; // unique id based on timestamp
            setTasks([...tasks, newTask]);
            console.log(tasks);
            setTask("");
         }
            
          
        
         
         
         
          

      }
        return(
         <>
            
              <Header></Header>
              <div className="d1">
                  <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                 <button className="b1" onClick={addItem}> ADD ITEM </button>
              
              </div>
              
              
              <Item  data={tasks}></Item>
              
                          


         </>
        )
      }
export default App;