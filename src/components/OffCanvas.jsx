import React from "react";
import useColor from "../hooks/useColor";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import DarkModeToggleBtn from "./common/DarkModeToggleBtn";
const OffCanvas = () => {
  const { PRIMARY_COLOR_DARK, SECONDARY_COLOR_LIGHT } = useColor();
  return (
    <>
      <div
        className={`offcanvas offcanvas-end bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
        data-bs-scroll="true"
        tabIndex="-1"
        id="Offcanvas"
        aria-labelledby="OffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            PickSome
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          className={`offcanvas-body bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
        >
          <DarkModeToggleBtn />
          <SearchBar />
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
