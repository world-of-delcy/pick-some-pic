import React, { useState, useEffect } from "react";
import Container from "./common/Container";
import ColorFilter from "./common/ColorFilter";
import Error from "./common/Error";
import { useParams } from "react-router-dom";
import { searchPosts } from "./../services/PostService";
function Search(props) {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [color, setColor] = useState(null);
  const [error, setError] = useState(false);
  const { query } = useParams();
  document.title = `Pick Some Pic - ${query}`;
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    (async () => {
      try {
        const { results, total_pages } = await searchPosts(
          query,
          currentPage,
          color
        );
        setPosts(results);
        setPageCount(total_pages);
      } catch (error) {
        setError(true);
      }
    })();
    window.scrollTo(0, 0);
  }, [currentPage, query, color]);
  if (error) return <Error />;
  return (
    <>
      <div className="p-3 px-5 fs-3 fw-bold">{query}</div>

      <ColorFilter changeColor={setColor} />

      <Container
        posts={posts}
        onPageChange={handlePageChange}
        total_pages={pageCount}
        paginated
        currentPage={currentPage}
      />
    </>
  );
}

export default Search;
