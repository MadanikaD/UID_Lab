import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Wash the car", completed: false, category: "myDay" },
    { text: "Go for a walk", completed: true, category: "myDay" },
    { text: "Buy Milk", completed: true, category: "myDay" },
    { text: "Complete project report", completed: false, category: "thisWeek" },
    { text: "Plan family trip", completed: false, category: "thisMonth" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [selectedView, setSelectedView] = useState("myDay"); // Default view is "My Day"

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false, category: selectedView }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => task.category === selectedView);

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="user-info">
          <img src="https://via.placeholder.com/50" alt="User Avatar" className="avatar" />
          <h2>Madanika D</h2>
          <p>madanikad164@gmail.com</p>
        </div>
        <nav>
          <button className={selectedView === "myDay" ? "active" : ""} onClick={() => setSelectedView("myDay")}>
            My day
          </button>
          <button className={selectedView === "thisWeek" ? "active" : ""} onClick={() => setSelectedView("thisWeek")}>
            This week
          </button>
          <button className={selectedView === "thisMonth" ? "active" : ""} onClick={() => setSelectedView("thisMonth")}>
            This month
          </button>
          <button className={selectedView === "allTasks" ? "active" : ""} onClick={() => setSelectedView("allTasks")}>
            All tasks
          </button>
        </nav>
      </div>

      <div className="content">
        <h1>{selectedView === "myDay" ? "My Day" : selectedView === "thisWeek" ? "This Week" : selectedView === "thisMonth" ? "This Month" : "All Tasks"}</h1>
        <div className="task-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <div key={index} className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.text}
                </span>
                <button onClick={() => deleteTask(index)}>&#x1F5D1;</button>
              </div>
            ))
          ) : (
            <p>No tasks for this view.</p>
          )}
        </div>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a task"
          />
          <button onClick={handleAddTask}>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
