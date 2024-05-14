import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editTaskInput, setEditTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleEditInputChange = (event) => {
    setEditTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTaskInput(tasks[index]);
  };

  const handleUpdateTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editTaskInput.trim();
    setTasks(updatedTasks);
    setEditIndex(-1);
    setEditTaskInput('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.sort().map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editTaskInput}
                onChange={handleEditInputChange}
              />
            ) : (
              task
            )}
            {editIndex === index ? (
              <button onClick={() => handleUpdateTask(index)}>Update</button>
            ) : (
              <>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
