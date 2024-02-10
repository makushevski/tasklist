import './App.css';
import TaskList from './TaskList';
import AddTaskItem from './AddTaskItem';
import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) =>{
    var maxId = tasks.length > 0 ? Math.max(...tasks.map(x=>x.id)) + 1 : 1;

    const newTask = {id: maxId, name: taskName}
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h1>Список задач</h1>
      <TaskList tasks={tasks} />
      <AddTaskItem onAddTask={addTask} />
    </div>
  );
}

export default App;
