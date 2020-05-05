import React from "react";

const Book = (book) => {
  console.log(book.book);
  return (
    <div key={book.book.bid}>
      <h3>Title : {book.book.Title}</h3>
      <strong>Author : {book.book.Author}</strong>
      <img src={book.book.image} height="160" width="120" />
    </div>
  );
};

export default Book;
