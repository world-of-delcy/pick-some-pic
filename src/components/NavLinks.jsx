import React from "react";

import useColor from "../hooks/useColor";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  const { PRIMARY_COLOR_DARK, SECONDARY_COLOR_LIGHT } = useColor();
  return (
    <div
      className={`d-flex align-items-center justify-content-evenly bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
      style={{ marginLeft: "auto" }}
    >
      <ul className="navbar-nav">
        <li className="nav-item mx-2 p-2 text-center d-flex align-items-center">
          <NavLink
            className={`nav-link bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
            to="photos"
          >
            <b>Explore</b>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
