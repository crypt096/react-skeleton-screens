import React, { useEffect, useState } from "react";
import SkeletonElement from "../skeletons/SkeletonElement";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div>
      <h2>Articles</h2>

      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="avatar" />
      <SkeletonElement type="thumbnail" />

      {articles &&
        articles.map((article) => {
          return (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}

      {!articles && <div>Loading...</div>}
    </div>
  );
};

export default Articles;
