import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ascPrice,
  descPrice,
  findAllBook,
  searchBook,
} from "../../services/book.service";
import ItemBook from "./itembook/ItemBook";
import { Button } from "antd";

const ListBook = ({ query }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data?.result);

  const fetchBooks = async () => {
    await dispatch(findAllBook());
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchDataAsc = async () => {
    await dispatch(ascPrice());
  };

  const fetchDataDesc = async () => {
    await dispatch(descPrice());
  };

  // const fetchDataSearch = async () => {
  //   await dispatch(searchBook(query));
  // };

  // useEffect(() => [fetchDataSearch()], [query]);

  return (
    <>
      <div className="flex gap-3 items-center mt-5">
        {/* ngược tại vì in mảng ngược */}
        <Button onClick={() => fetchDataAsc()}>Sắp xếp giá giảm đần</Button>
        <Button onClick={() => fetchDataDesc()}>Sắp xếp giá tăng đần</Button>
      </div>
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
