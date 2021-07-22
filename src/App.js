import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from './components/Footer';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dentist Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 11:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 9th at 1:00pm',
        reminder: false,
    },
]);

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
        : 'No Current Tasks.'}
      </div>
      <Footer />
    </div>
  );
}

export default App;
