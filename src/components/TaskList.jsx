
import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  search,
  setSearch,
  filter,
  setFilter
}) {

  return (
    <section className="task-section" id="tasks">

      <div className="task-heading">
        <h2>My Tasks</h2>

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-buttons">

        {["All", "Pending", "Completed"].map((item) => (

          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>

        ))}

      </div>

      <div className="task-list">

        {tasks.length > 0 ? (

          tasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />

          ))

        ) : (

          <div className="empty-state">
            <h3>No tasks found!</h3>
            <p>Add a new task or change your search filter.</p>
          </div>

        )}

      </div>

    </section>
  );
}

export default TaskList;
