import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllBook, searchBook } from "../../services/book.service";
import ItemBook from "./itembook/ItemBook";

const ListBook = ({ query }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data?.result);

  const fetchBooks = async () => {
    await dispatch(findAllBook());
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // const fetchDataSearch = async () => {
  //   await dispatch(searchBook(query));
  // };

  // useEffect(() => [fetchDataSearch()], [query]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {books
          ?.slice() // sao chép mảng ko ảnh hưởng mảng cũ
          .reverse() // đảo ngược mảng
          .map((book) => (
            <div key={book?.id} className="">
              <ItemBook book={book} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ListBook;
