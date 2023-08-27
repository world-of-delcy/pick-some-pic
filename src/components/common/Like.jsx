import React, { useState } from "react";
import ErrorToast from "./ErrorToast";
import useColor from "./../../hooks/useColor";
import { like, unlike } from "../../services/PostService";
import Tooltip from "@mui/material/Tooltip";
import { Toast } from "bootstrap";
function Like({ id, likes, liked_by_user }) {
  const { BRAND_COLOR, SECONDARY_COLOR_LIGHT } = useColor();
  const [isLiked, setIsLiked] = useState(liked_by_user);
  const getTooltipTitle = () => {
    if (isLiked) return "Liked";
    if (likes) return likes + " Likes";
    return "0 Likes";
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleLike = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const originalState = isLiked;
      setIsLiked(!isLiked);
      if (originalState) {
        try {
          await unlike(id);
        } catch (error) {
          setIsLiked(originalState);
          setErrorMessage("Cannot Unlike the post !");
          const toast = new Toast(document.getElementById("likeError"));
          toast.show();
        }
      } else {
        try {
          await like(id);
        } catch (error) {
          setIsLiked(originalState);
          setErrorMessage("Cannot like the post !");
          const toast = new Toast(document.getElementById("likeError"));
          toast.show();
        }
      }
    } else {
      setErrorMessage("Login to Like");
      const toast = new Toast(document.getElementById("likeError"));
      toast.show();
    }
  };
  return (
    <>
      <ErrorToast id="likeError" error={errorMessage} />
      <Tooltip placement="top" title={getTooltipTitle()} arrow>
        <button
          className={`btn btn-${isLiked ? BRAND_COLOR : SECONDARY_COLOR_LIGHT}`}
          onClick={handleLike}
        >
          {!isLiked ? (
            "Like"
          ) : (
            <i
              className={`p-1 fs-5 fa-heart fa-solid ${
                isLiked ? "solid" : "regular"
              }`}
            ></i>
          )}
        </button>
      </Tooltip>
    </>
  );
}

export default Like;
