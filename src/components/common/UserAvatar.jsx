import React from "react";
import Avatar from "@mui/material/Avatar";
function UserAvatar({ name, img }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Avatar alt={name} src={img} />
      <span className="px-2 fw-bold">{name}</span>
    </div>
  );
}

export default UserAvatar;
