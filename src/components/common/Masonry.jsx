import React, { useState, useEffect } from "react";
import Card from "./Card";
function Masonry({
  data,
  dataWidth,
  containerClassName,
  columnClassName,
  itemClassName,
}) {
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const totalData = data?.length;
  const columnCount = Math.floor(windowWidth / dataWidth);
  const itemPerColumn = Math.ceil(totalData / columnCount);
  if (!data || data.length <= 0) return;
  const cols = [];
  for (let i = 0; i < columnCount; i++) {
    const content = [];
    data.slice(i * itemPerColumn, (i + 1) * itemPerColumn).forEach((item) => {
      content.push(item);
    });
    cols.push(content);
  }
  return (
    <div
      className={containerClassName || ""}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {cols.map((col) => (
        <div className={columnClassName || ""} key={cols.indexOf(col)}>
          {col.map((item) => (
            <div
              className={itemClassName || ""}
              key={item?.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card post={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Masonry;
