import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="mx-4">
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/" className="btn btn-outline-warning">
        HomePage
      </Link>
    </div>
  );
}

export default NotFound;
