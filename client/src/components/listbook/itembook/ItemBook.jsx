import React from "react";
import { bg_random } from "../../../utils/bg_random";
import { formatTime } from "../../../utils/formatTime";
import { useNavigate } from "react-router-dom";

const ItemBook = ({ book }) => {
  const navigate = useNavigate();

  const randomColor = bg_random[Math.floor(Math.random() * bg_random.length)];

  const bookStyle = {
    backgroundColor: randomColor,
  };

  return (
    <>
      <div
        style={bookStyle}
        onClick={() => navigate(`/books/${book?.id}`)}
        className="group rounded-lg p-5 text-white cursor-pointer h-[300px] flex flex-col justify-between"
      >
        <div className="mt-2 flex-1 overflow-ellipsis">
          <div className="text-lg font-semibold">{book?.name}</div>
          <div className="text-[12px]">{formatTime(book?.created_at)}</div>
          <div className="mt-1">{book?.description}</div>
        </div>
        <div className="hidden mt-4 group-hover:block text-center transition duration-300 ease-in-out">
          Xem chi tiết
        </div>
        <div className="text-sm mt-2 p-2 text-center bg-red-600 rounded-lg">
          Giá hiện tại: {book?.price}
        </div>
      </div>
    </>
  );
};

export default ItemBook;
