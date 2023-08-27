import React from "react";

function NotFound(props) {
  return (
    <div
      className="not-found d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="error">404</div>
      <br />
      <br />
      <span className="info">File not found</span>
    </div>
  );
}

export default NotFound;
