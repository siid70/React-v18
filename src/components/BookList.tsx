import React from "react";
import Book from "./Book";
import books from "../books";

const BookList: React.FC = () => {
  // console.group("Task 2");
  // console.log("Task activity 3");
  // console.log("Task activity 4");
  // console.groupEnd();
  return (
    <section className="book-list">
      {books.map((book, index) => {
        // const { imageSrc, title, author } = book;
        return <Book {...book} key={index} />;
      })}
    </section>
  );
};

export default BookList;
