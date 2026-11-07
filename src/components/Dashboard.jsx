
function Dashboard({ tasks }) {

  // Calculate task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <section className="dashboard" id="dashboard">

      <div className="stat-card total">
        <h3>Total Tasks</h3>
        <h1>{totalTasks}</h1>
        <p>All your tasks</p>
      </div>

      <div className="stat-card completed">
        <h3>Completed</h3>
        <h1>{completedTasks}</h1>
        <p>Successfully finished</p>
      </div>

      <div className="stat-card pending">
        <h3>Pending</h3>
        <h1>{pendingTasks}</h1>
        <p>Still in progress</p>
      </div>

    </section>
  );
}

export default Dashboard;
