import React from "react";

const book = ({ image, title, author }) => {
  return (
    <article>
      <img src={image} alt={title} height="200px" />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

export default book;
