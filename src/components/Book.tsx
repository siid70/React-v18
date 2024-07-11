import React from "react";
import { BookType } from "../types";

const Book: React.FC<BookType> = ({ imageSrc, title, author, id }) => {
  return (
    <article className="book">
      <img src={imageSrc} />
      <h2>{title}</h2>
      <p>{author}</p>
      <span className="number">#{id}</span>
    </article>
  );
};

export default Book;
