import React from "react";
import { NavLink } from "react-router-dom";
import useColor from "./../../hooks/useColor";

function Error({ message }) {
  const { BRAND_COLOR } = useColor();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh", flexDirection: "column" }}
    >
      <span>{message ? message : "Something Went Wrong"}</span>

      <NavLink to="/">
        <button className={`btn btn-sm btn-${BRAND_COLOR} m-2 `}>
          Back to Home
        </button>
      </NavLink>
      <button
        className={`btn btn-${BRAND_COLOR} m-2`}
        onClick={() => document.location.reload()}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
