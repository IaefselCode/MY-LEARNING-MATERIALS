import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="app">
      <div className="card">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;

