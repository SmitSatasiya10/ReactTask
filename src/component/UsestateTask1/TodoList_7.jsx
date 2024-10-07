import React, { useState } from "react";

const TodoList_7 = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h2>To-Do List</h2>

      <form onSubmit={handleAddTask} className="d-flex mt-3">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={handleChange}
          placeholder="Enter a new task"
        />
        <button type="submit" className="btn btn-primary ms-2">
          Add
        </button>
      </form>

      <ul className="list-group mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList_7;
