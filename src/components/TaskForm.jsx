
import { useState } from "react";

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title!");
      return;
    }

    addTask({
      title,
      description,
      priority
    });

    // Clear form after submission
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <section className="form-section" id="add-task">

      <h2>+ Create New Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        <button type="submit">
          Add Task
        </button>

      </form>

    </section>
  );
}

export default TaskForm;
