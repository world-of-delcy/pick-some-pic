import React, { useState } from "react";
import Placeholder from "./Placeholder";
import Paginate from "./Pagination";

import useColor from "../../hooks/useColor";
import Masonry from "./Masonry";

export default function Container({
  paginated,
  posts,
  onPageChange,
  currentPage,
  total_pages: pageCount,
  onAddMoreBtnClick,
  disableAddMoreBtn,
}) {
  const { SECONDARY_COLOR_DARK } = useColor();
  const [addMoreBtnClicked, setAddMoreBtnClicked] = useState(false);
  const GetPagination = () => {
    if (paginated) {
      if (pageCount <= 1) return;
      return (
        <Paginate
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      );
    }
    if (disableAddMoreBtn) return;
    return (
      <>
        <i
          className="fs-1 fa-solid fa-circle-plus"
          style={{
            cursor: "pointer",
            display: addMoreBtnClicked ? "none" : "inline",
          }}
          onClick={() => {
            setAddMoreBtnClicked(true);
            onAddMoreBtnClick();
            setAddMoreBtnClicked(false);
          }}
        ></i>

        <div
          className={`spinner-border text-${SECONDARY_COLOR_DARK}`}
          role="status"
          style={{
            cursor: "pointer",
            display: addMoreBtnClicked ? "inline" : "none",
          }}
        >
          <span className="fs-1 visually-hidden">Loading...</span>
        </div>
      </>
    );
  };
  if (!posts) return <Placeholder />;
  if (posts.length === 0) return <Placeholder />;
  return (
    <div className="posts-container">
      {/* <Masonry
        breakpointCols={BREAK_POINT}
        className="my-masonry-grid"
        style={{ minHeight: "90vh" }}
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </Masonry> */}
      <Masonry data={posts} dataWidth={185} />
      <div className="d-flex justify-content-center py-5">
        <GetPagination />
      </div>
    </div>
  );
}
