import React, { useState, useCallback, useRef } from "react";
import Book from "./Book";
/* import Button from "@material-ui/core/Button"; */
import Input from "@material-ui/core/Input";
import InputBook from "./InputBook";
import RecordList from "../Record/RecordList";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      bid: 1,
      Title: "페스트",
      Author: "알베르 카뮈",
      Create_date: "2020/04/24",
      image:
        "https://lh3.googleusercontent.com/proxy/4dHCr6t5SDG0mM0_WIkvKzS11aMI9oWM9p8iWVi22zDDsinHEwq46Y1gucJNTyD_dE8mULGVH9g5OIUM3IQBo5vWFxkSkoKFH6CmIUFfMRU",
    },
    {
      bid: 2,
      Title: "앵무새죽이기",
      Author: "하퍼 리",
      Create_date: "2020/04/24",
      image:
        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B992365A45FBCE29",
    },
    {
      bid: 3,
      Title: "강다혜 바보",
      Author: "이겨레 올림",
      Create_date: "2020/04/24",
      image:
        "https://w.namu.la/s/9071d0575b6d14c0d6fc5832e26fe8ef0a298a1abb1d442cc3c865534ec5e949e8a2d195fe425ebb15f2f1f5b270e6b86979bd1e3fcb4e9d9432bdfbf4fb02a6b79290aa2276e7171d50486c6e1ec3637bb9271378b431876c879a70c8ee6ca8",
    },
  ]);
  const [flag, setFlag] = useState(true);
  const [bookClickFlag, setBookClickFlag] = useState({
    flag: false,
    bid: "",
    name: "",
  });

  const nextId = useRef(books.length + 1);
  const inputBook = useCallback(
    (book) => {
      console.log(books.concat(book));
      setBooks(books.concat(book));
      nextId.current += 1;
      setFlag(true);
      console.log(books);
    },
    [setBooks, books]
  );
  const onFlagTrue = useCallback(() => {
    setFlag(true);
  }, []);

  const onFlagFalse = useCallback(() => {
    setFlag(false);
  }, []);

  const onBookClickEvent = useCallback((e) => {
    setBookClickFlag(true);
  });

  const bookList = books.map((book, i) => (
    <li
      key={i}
      onClick={() =>
        setBookClickFlag({ flag: true, bid: book.bid, title: book.Title })
      }
    >
      <Book book={book} />
    </li>
  ));

  return bookClickFlag.flag ? (
    <RecordList bid={bookClickFlag.bid} title={bookClickFlag.title} />
  ) : (
    <div>
      {flag ? (
        <ul>
          {bookList}
          <br></br>
          <Input type="button" onClick={onFlagFalse} value="+책추가"></Input>
        </ul>
      ) : (
        <InputBook
          bid={nextId.current}
          onFlag={onFlagTrue}
          inputBook={inputBook}
        />
      )}
    </div>
  );
};

export default BookList;
