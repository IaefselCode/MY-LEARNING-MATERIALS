import "./App.css";
import PostsList from "./features/posts/PostsList";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <main className="app">
        <h1>Chapter 2</h1>
        <h2>***Data Flow***</h2>

        {/* Navigation */}
        <div>
          <Link to={"/"}>
            <button>Posts</button>
          </Link>
          <Link to={"/AddPostForm"}>
            <button>Add Post</button>
          </Link>
        </div>

        <PostsList />
      </main>
    </>
  );
}

export default App;
