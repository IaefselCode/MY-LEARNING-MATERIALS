import React, { useState } from "react";
import Button from "../layouts/Button";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasksSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const button1 = "bg-blue-500";
  const button2 = "bg-gray-300";
  const button3 = "bg-green-500";


  const handleEdit = ()=>{
    dispatch(
      editTask({id: task.id , title ,description , status})
    )
    setIsEdit(false)
  };

  return (
    <div>
      {isEdit ? (
        <div className="absolute bg-white p-4 border rounded-md shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            Edit Task
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

          {/* <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md cursor-pointer"
        >
          Add Task
        </button> */}
          <Button title="Save" backgroundColor={button3} onClick={handleEdit}></Button>
          <Button title="Cancel" backgroundColor={button2} onClick={() => setIsEdit(false)}></Button>
        </div>
      ) : (
        <Button
          title="Edit"
          backgroundColor={button1}
          onClick={() => setIsEdit(true)}
        />
      )}
    </div>
  );
};

export default EditTask;
