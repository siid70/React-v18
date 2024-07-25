import { BookType } from "../types";
import { memo } from "react";

const List = ({ books }: { books: BookType[] }) => {
  return (
    <>
      <section className="list">
        {books.map((book, index) => {
          return <h2 key={index}>{book.author}</h2>;
        })}
      </section>
    </>
  );
};

export default memo(List);
