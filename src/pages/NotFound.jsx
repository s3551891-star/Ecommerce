import {
  ArrowLeft,
  Home,
  Search,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <span className="not-found-number">
            404
          </span>

          <div className="not-found-icon">
            <Search size={25} />
          </div>

          <span className="section-label">
            PAGE NOT FOUND
          </span>

          <h1>
            Looks like this page
            <span> got lost.</span>
          </h1>

          <p>
            The page you're looking for doesn't exist or
            may have been moved somewhere else.
          </p>

          <div className="not-found-actions">
            <Link
              to="/"
              className="primary-button"
            >
              <Home size={17} />
              Back Home
            </Link>

            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={17} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;