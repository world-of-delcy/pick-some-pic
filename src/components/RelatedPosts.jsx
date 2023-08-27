import React, { useEffect, useState } from "react";
import { getRelatedPosts } from "./../services/PostService";
import Placeholder from "./common/Placeholder";
import Container from "./common/Container";
import Error from "./common/Error";
import useColor from "../hooks/useColor";

function RelatedPosts({ username }) {
  const { BRAND_COLOR } = useColor();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const data = await getRelatedPosts(username);
        setPosts(data);
      } catch (error) {
        setError(true);
      }
    })();
  });
  if (error) return <Error />;
  if (!posts) return <Placeholder />;
  if (posts.length === 0)
    return (
      <div className="d-flex justify-content-center">
        <span>No Related Posts</span>
      </div>
    );
  return (
    <>
      <div
        className={`fw-bold fs-4 px-5 py-2 border-top border-${BRAND_COLOR}`}
      >
        Related Posts
      </div>
      <Container posts={posts} disableAddMoreBtn />
    </>
  );
}

export default RelatedPosts;
