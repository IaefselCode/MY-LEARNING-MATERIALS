import React, { useState } from 'react'
import Delete from '../../../assets/ICONS/delete2.png'
import Add from '../../../assets/ICONS/add.png'
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  /// Function to add a new task
  function addTask() {
    if (newTask.trim() === '') {
      alert('Please enter a task');
      return;
    } else {
      setTasks(t => [...t, newTask]);
      setNewTask(''); // Clear the input field after adding the task
    }
  }

  /// Function to delete a task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  /// Function to move a task up or down
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);

    }
  }

  /// Function to move a task down
  function moveTaskDown(index) {
    const updatedTasks = [...tasks];
    if (index < updatedTasks.length - 1) {
      [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      Windows+; for EMOJI
      <div className="bg-black p-5 my-5 rounded-lg shadow-md cursor-pointer">
        <h1 className='head'>TodoList App</h1>
        <div>
          <input type="text" className='input-field' placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
          {/* <button className='button' onClick={addTask}>Add</button> */}
          <img src={Add} alt="" onClick={addTask} />
        </div>
      </div>



      {/* Showing the lists of tasks */}
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className='bg-black p-5 my-5 rounded-lg shadow-md flex items-center justify-between'>
            {/* <img src={Delete} onClick={() => deleteTask(index)} alt="" className='w-10' /> */}
            <span className="text">{task}</span>
            <span>
              <button className="button" onClick={() => deleteTask(index)}>🗑️</button>
              <button className="button" onClick={() => moveTaskUp(index)}>👆</button>
              <button className="button" onClick={() => moveTaskDown(index)}>👇</button>
            </span>
          </li>
        ))}
      </ol>
    </>
  )
}

export default TodoList