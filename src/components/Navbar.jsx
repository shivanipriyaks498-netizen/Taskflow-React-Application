
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>✓</span> TaskFlow
      </div>

      <div className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#add-task">Add Task</a>
        <a href="#tasks">My Tasks</a>
      </div>

    </nav>
  );
}

export default Navbar;
