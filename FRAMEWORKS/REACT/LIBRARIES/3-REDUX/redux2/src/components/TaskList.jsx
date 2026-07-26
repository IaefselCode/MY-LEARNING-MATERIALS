import { useDispatch, useSelector } from "react-redux";
import {
  allTasks,
  deleteTask,
  getError,
  getLoading,
} from "../features/tasksSlice";
import Button from "../layouts/Button";
import EditTask from "./EditTask";
import { useState } from "react";

const TaskList = () => {
  const tasks = useSelector(allTasks);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const [status, setStatus] = useState("All");

  const bgcolor2 = "bg-red-500";

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "text-orange-500";
      case "In Progress":
        return "text-blue-500";
      case "Completed":
        return "text-green-500";
      default:
        return "text-gray-600";
    }
  };

  // Filter tasks based on selected status
  const filteredTasks =
    status === "All" ? tasks : tasks?.filter((task) => task.status === status);

  let content;
  if (loading) {
    content = (
      <div className="sk-chase mx-auto mt-2">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    );
  } else if (error) {
    content = <p className="text-red-500 text-center m-2">{error}</p>;
  } else {
    content = (
      <div>
        <div className="flex justify-between">
          <h2 className="font-bold text-lg text-blue-600">Tasks</h2>
          <div>
            Filter:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-md focus:outline-none focus:ring-2 focus:right-2 m-1"
            >
              <option value="All">All</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div>
          <ul className="space-y-4">
            {filteredTasks?.map((task) => (
              <li
                key={task.id}
                className="bg-gray-50 p-4 rounded-md shadow-sm sm:flex block justify-between items-center hover:shadow-lg"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className="text-gray-600">{task.description}</p>
                  )}
                  <p className="sm:mt-1 m-1 text-sm font-semibold">
                    Status:{" "}
                    <span
                      className={`italic underline ${getStatusColor(
                        task.status
                      )}`}
                    >
                      {task.status}
                    </span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  {/* <Button
                    title="Edit"
                    backgroundColor={bgcolor1}
                    hover={hover1}
                  ></Button> */}
                  <EditTask task={task} />
                  <Button
                    title="Delete"
                    backgroundColor={bgcolor2}
                    onClick={() => handleDelete(task.id)}
                  ></Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default TaskList;
