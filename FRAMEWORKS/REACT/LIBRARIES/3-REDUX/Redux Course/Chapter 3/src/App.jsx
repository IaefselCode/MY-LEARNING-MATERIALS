import "./App.css";
import PostsList from "./features/posts/PostsList";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <main className="app">
        <h1>Chapter 3</h1>
        <h2>***Async Logic***</h2>

        {/* Navigation */}
        <div>
          <Link to={"/"}>
            <button>Posts</button>
          </Link>
          <Link to={"/add"}>
            <button>Add Post</button>
          </Link>
        </div>

        <PostsList />
      </main>
    </>
  );
}

export default App;
