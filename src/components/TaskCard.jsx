
function TaskCard({ task, toggleTask, deleteTask }) {

  return (
    <div className={`task-card ${task.completed ? "done" : ""}`}>

      <div className="task-info">

        <h3>
          {task.title}
        </h3>

        <p>{task.description || "No description provided."}</p>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority} Priority
        </span>

        <span className="status">
          {task.completed ? "Completed" : "Pending"}
        </span>

      </div>

      <div className="task-actions">

        <button
          className="complete-btn"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;
