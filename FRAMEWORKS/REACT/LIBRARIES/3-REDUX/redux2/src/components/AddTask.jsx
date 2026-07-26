import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const newTask = {
    //   id: nanoid(),
    //   title,
    //   description,
    //   status,
    // };
    dispatch(addTask(title, description, status));
    // dispatch(addTask(newTask))
    setTitle("");
    setStatus("");
    setDescription("");
  };

  //   const canSave = [title, description, status].every(Boolean);

  //   const canSave =
  //     [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-xl font-semibold mb-3 text-indigo-500">
          Add New Task
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:right-2"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:right-2"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <select
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Task Description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:right-2"
            rows="3"
            required
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;
