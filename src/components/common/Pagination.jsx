import React from "react";
import { Pagination } from "@mui/material";
function Paginate({ pageCount, currentPage, onPageChange }) {
  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={(e, page) => onPageChange(page)}
    />
  );
}

export default Paginate;
