import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`${themeClass} skeleton-wrapper`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="title" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
