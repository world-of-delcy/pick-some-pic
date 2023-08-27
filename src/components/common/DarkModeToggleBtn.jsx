import React, { useContext } from "react";
import NightmodeContext from "./../../context/nightmodeContext";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

function DarkModeToggleBtn(props) {
  const { nightmode, setNightmode } = useContext(NightmodeContext);
  return (
    <div className="d-flex justify-content-center align-items-center py-1">
      <DarkModeToggle
        mode={nightmode ? "dark" : "light"}
        dark="Dark"
        light="Light"
        size="sm"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        onChange={(mode) => {
          sessionStorage.setItem("nightMode", !nightmode);
          setNightmode(!nightmode);
        }}
      />
    </div>
  );
}

export default DarkModeToggleBtn;
