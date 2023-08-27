import React from "react";

function Placeholder({ message }) {
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="d-flex justify-content-center align-items-center load-animation"
    >
      <div className="cell">
        <div className="pl pl-leapfrog"></div>
        <div className="text-center fw-bold">{message}</div>
      </div>
    </div>
  );
}

export default Placeholder;
