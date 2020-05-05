import React, { useState, useCallback } from "react";
import BookList from "./BookList";

const InputBook = (props) => {
  const [book, setBook] = useState({
    bid: props.bid,
    Title: "",
    Author: "",
    Create_date: new Date(),
    image: "",
  });

  const onChangeTitle = useCallback(
    (e) => {
      setBook({
        ...book,
        Title: e.target.value,
      });
    },
    [setBook, book]
  );
  const onChangeAuthor = useCallback(
    (e) => {
      setBook({
        ...book,
        Author: e.target.value,
      });
    },
    [setBook, book]
  );
  const onChangeImage = useCallback(
    (e) => {
      setBook({
        ...book,
        image: e.target.value,
      });
    },
    [setBook, book]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(book);
      props.inputBook(book);
    },
    [props, book]
  );

  return (
    <form onSubmit={onSubmit}>
      <table>
        <tr>
          <td>Title : </td>
          <td>
            <input type="text" onChange={onChangeTitle} />
          </td>
        </tr>
        <tr>
          <td>Author : </td>
          <td>
            <input type="text" onChange={onChangeAuthor} />
          </td>
        </tr>
        <tr>
          <td>ImageLink : </td>
          <td>
            <input type="text" onChange={onChangeImage} />
          </td>
        </tr>
      </table>
      <input type="submit" value="등록" />
    </form>
  );
};

export default InputBook;
