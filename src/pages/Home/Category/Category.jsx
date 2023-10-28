import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>This is a Category: {categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCard news={news} key={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
