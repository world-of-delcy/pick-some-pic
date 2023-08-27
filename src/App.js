import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NightmodeContext from "./context/nightmodeContext";
import Main from "./components/Main";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  const mode = sessionStorage.getItem("nightMode");
  const [nightmode, setNightmode] = useState(mode === "true");
  return (
    <Router>
      <NightmodeContext.Provider value={{ nightmode, setNightmode }}>
        <Main />
      </NightmodeContext.Provider>
    </Router>
  );
};

export default App;
