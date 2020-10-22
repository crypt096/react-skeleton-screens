import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

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

      {articles &&
        articles.map((article) => {
          return (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}

      {!articles &&
        [1, 2, 3, 4, 5].map((n) => {
          return <SkeletonArticle key={n} theme="dark" />;
        })}
    </div>
  );
};

export default Articles;
