import React, { useContext } from "react";
import useColor from "./../../hooks/useColor";
import { useNavigate } from "react-router-dom";
import NightmodeContext from "./../../context/nightmodeContext";
import Tooltip from "@mui/material/Tooltip";
function Card({ post }) {
  const { PRIMARY_COLOR_LIGHT, SECONDARY_COLOR_DARK } = useColor();
  const { nightMode } = useContext(NightmodeContext);
  const { id, likes } = post;
  const image_url = new URL(post.urls.thumb);
  const navigate = useNavigate();
  return (
    <>
      <Tooltip placement="top" title={`${likes || 0} Likes`} arrow>
        <div
          className={`card-item d-flex justify-content-center bg-${PRIMARY_COLOR_LIGHT} text-${SECONDARY_COLOR_DARK}`}
          onClick={() => navigate("/photos/" + id)}
          style={{
            padding: "3px",
            backgroundImage: nightMode
              ? "url(./assets/placeholderDark.png)"
              : "url(./assets/placeholderLight.png)",
          }}
        >
          <img
            src={image_url.toString()}
            alt="post"
            loading="lazy"
            style={{ width: "179px" }}
          />
        </div>
      </Tooltip>
    </>
  );
}

export default Card;
