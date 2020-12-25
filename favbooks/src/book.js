import React from "react";

import "./css/book.css";

const book = ({ image, title, author, link }) => {
  return (
    <article>
      <img src={image} alt={title} height="200px" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      {console.log(link)}
      <button
        type="button"
        onClick={() => (window.location.href = link)}
        className="button"
      >
        Get me a copy!
      </button>
    </article>
  );
};

export default book;
