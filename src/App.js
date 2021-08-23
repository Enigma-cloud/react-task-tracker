import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useLocalStorage('tasks', []);

// Add Task
const addTask = (task) => {
  const id = uuidv4();
  const newTask = {id, ...task};

  setTasks([...tasks, newTask]);
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map(
      (task) => task.id === id ? {...task, reminder: !task.reminder} : task
      )
    );
}

  return (
    <div className="app container">
      <Header 
        toggleAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} 
      />
      <div className="sub-container">
        { showAddTask && <AddTask onAdd={addTask}/> }
        { tasks.length > 0 ?
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        : 'No Tasks to Show'}
      </div>
      <Footer />
    </div>
  );
}

export default App;
