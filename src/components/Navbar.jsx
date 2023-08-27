import React from "react";
import OffCanvas from "./OffCanvas";
import useColor from "../hooks/useColor";
import { NavLink } from "react-router-dom";
function Navbar() {
  const { BRAND_COLOR, PRIMARY_COLOR_DARK, SECONDARY_COLOR_LIGHT } = useColor();
  return (
    <nav
      className={`py-1 navbar border-bottom border-3 border-${BRAND_COLOR} sticky-top navbar-expand-lg bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <NavLink
            className={`nav-brand nav-link fw-bolder px-3 fs-5 text-${BRAND_COLOR}`}
            to="/"
          >
            <b>
              <span>Pick Some Pic</span>
              <span className="dot-one">.</span>
              <span className="dot-two">.</span>
              <span className="dot-three">.</span>
            </b>
          </NavLink>
        </div>
        <OffCanvas />
        <button
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#Offcanvas"
          aria-controls="Offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
