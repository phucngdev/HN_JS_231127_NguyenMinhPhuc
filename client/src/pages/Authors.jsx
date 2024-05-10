import React from "react";
import { Button } from "antd";

const Authors = () => {
  return (
    <>
      <div className="mt-4 lg:mt-0 flex items-center justify-between">
        <h3 className="text-xl font-bold ">Dánh sách </h3>
        <Button
          type="primary"
          onClick={() => setOpenModalCreateTodo(true)}
          className="hidden lg:block"
        >
          + Thêm mới task
        </Button>
        <Button
          type="primary"
          onClick={() => setOpenModalCreateTodo(true)}
          className="lg:hidden fixed bottom-5 left-5 right-5 border-2 border-white text-white flex- items-center justify-center bg-blue-600 z-50 rounded-full h-[50px]"
        >
          + Thêm mới task
        </Button>
      </div>
    </>
  );
};

export default Authors;
