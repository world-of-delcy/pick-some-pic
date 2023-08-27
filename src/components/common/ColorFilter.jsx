import React, { useState } from "react";
import useColor from "./../../hooks/useColor";

function ColorFilter({ changeColor }) {
  const { BRAND_COLOR } = useColor();
  const [colors, setColors] = useState([
    { _id: "1", name: "black", selected: false, text: "white" },
    { _id: "2", name: "blue", selected: false },
    { _id: "3", name: "green", selected: false },
    { _id: "4", name: "magenta", selected: false },
    { _id: "5", name: "purple", selected: false },
    { _id: "6", name: "red", selected: false },
    { _id: "7", name: "white", selected: false },
    { _id: "8", name: "yellow", selected: false },
  ]);
  const handleColorBtnClicked = (color) => {
    const newColors = [...colors];
    newColors.forEach((c) => {
      if (c._id === color._id) {
        c.selected = !c.selected;
        if (c.selected) changeColor(c.name);
        else changeColor(null);
      } else {
        c.selected = false;
      }
    });
    setColors(newColors);
  };
  return (
    <div
      className="d-flex py-1"
      style={{ overflowX: "auto", overflowY: "hidden" }}
    >
      {colors.map((color) => (
        <button
          className={`btn btn-outline btn-sm mx-1 border  border-${
            color.selected ? BRAND_COLOR : "black"
          }`}
          key={color._id}
          style={{
            backgroundColor: color.name,
            color: color.text ? color.text : "black",
            minWidth: "100px",
          }}
          onClick={() => handleColorBtnClicked(color)}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}

export default ColorFilter;
