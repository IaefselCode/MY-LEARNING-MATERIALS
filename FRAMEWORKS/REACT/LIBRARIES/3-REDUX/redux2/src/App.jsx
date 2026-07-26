import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
function App() {
  return (
    <>
      <div className="sm:w-2xl sm:mx-auto bg-white p-4 m-2 rounded-xl ">
        <p className="text-3xl font-bold">Task Management App</p>
        <AddTask />
        <TaskList />
      </div>
    </>
  );
}

export default App;
