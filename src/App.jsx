
import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {

  // useState: Store all tasks
  const [tasks, setTasks] = useState([]);

  // Store search input
  const [search, setSearch] = useState("");

  // Store selected filter
  const [filter, setFilter] = useState("All");

  // Add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...newTask,
        id: Date.now(),
        completed: false
      }
    ]);
  };

  // Mark task as completed or pending
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Search and filter tasks
  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">

      <Navbar />

      <main className="container">

        <div className="welcome">
          <h1>Welcome to TaskFlow 👋</h1>
          <p>Organize your work. Achieve your goals.</p>
        </div>

        <Dashboard tasks={tasks} />

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

      </main>

      <footer>
        <p>© 2026 TaskFlow. Built with React JS.</p>
      </footer>

    </div>
  );
}

export default App;
