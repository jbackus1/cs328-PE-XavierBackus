import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>That page doesn't exist.</p>
      <Link to="/">← Back to Cities List</Link>
    </div>
  );
}

export default NotFound;
