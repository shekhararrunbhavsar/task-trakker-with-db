import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData); //this sets tasks = tasksData which hold all fetched tasks from api
    };
    getTasks(); //need to call getTasks() to fetch the data
  }, []);

  //fetch all tasks (R->READ)
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //fetch a single task by id (R->READ)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //Add a task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // //##
    // const id = Math.floor(Math.random() * 10000) + 1; //##
    // const newTask = { id, ...task }; //##
    // setTasks([...tasks, newTask]); //##
  };

  //delete a task from front end
  const deleteTask = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    // console.log(taskToToggle);
    // console.log(updateTask);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const toggleShowAddTask = () => {
    return setShowAddTask(!showAddTask);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Header
          title="Task Tracker"
          showAddTask={showAddTask}
          toggleShowAddTask={toggleShowAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                  />
                ) : (
                  "No Tasks to Show"
                )}
              </>
            }
          />
          {/* </Routes>
      <Routes> */}
          <Route path="/about" element={<About />} />
          {/* </Routes>
      <Routes> */}
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
