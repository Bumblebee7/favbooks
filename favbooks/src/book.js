import React from "react";

import "./css/book.css";

const clickHandler = (e) => {
  alert("Das ist ein Alarm!");
  console.log(e.target);
};

const book = ({ image, title, author }) => {
  return (
    <article>
      <img src={image} alt={title} height="200px" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler} className="button">
        Get me a copy!
      </button>
    </article>
  );
};

export default book;
