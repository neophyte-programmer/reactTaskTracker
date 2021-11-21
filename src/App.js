import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },

    {
        id: 2,
        text: 'Hair Appointment',
        day: 'Feb 8th at 10:30am',
        reminder: true,
    },

    {
        id: 3,
        text: 'School Meeting',
        day: 'Feb 9th at 4:30pm',
        reminder: false,
    },
])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />  
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
