import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="app">
      <div className="card">
        <p className = "text-2xl text-red-400 font-bold">404 - Page Not Found</p>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;

