import React from "react";
// import Home from "./Home";
import Navbar from "./Navbar";
import Search from "./Search";
import Login from "./Login";
import Post from "./common/Post";
import Home from "./Home";
import Explore from "./Explore";
import Footer from "./Footer";
import ReDirect from "./common/ReDirect";
import NotFound from "./NotFound";
import useColor from "./../hooks/useColor";
import { Routes, Route } from "react-router-dom";

function Main() {
  const { PRIMARY_COLOR_LIGHT, SECONDARY_COLOR_DARK } = useColor();
  return (
    <div>
      <div className={`bg-${PRIMARY_COLOR_LIGHT} text-${SECONDARY_COLOR_DARK}`}>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="photos" element={<Explore />} />
            <Route path="photos/:id" element={<Post />} />
            <Route path="search/:query" element={<Search />} />
            <Route path="login" element={<Login />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<ReDirect to="not-found" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
