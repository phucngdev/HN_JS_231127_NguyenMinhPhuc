import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { findAllAuthor } from "../services/author.service";
import { useNavigate } from "react-router-dom";
import ModalCreate from "../components/authormodal/ModalCreate";

const Authors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authors = useSelector((state) => state.authors.data);
  const [openModalCreateAuthor, setOpenModalCreateAuthor] = useState(false);

  const fetchDataAuthor = async () => {
    await dispatch(findAllAuthor());
  };

  useEffect(() => {
    fetchDataAuthor();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Biography",
      dataIndex: "biography",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Button onClick={() => navigate(`/authors/${record.id}`)}>
          Xem chi tiết
        </Button>
      ),
    },
  ];
  const data = authors?.result || [];

  return (
    <>
      <ModalCreate
        openModalCreateAuthor={openModalCreateAuthor}
        setOpenModalCreateAuthor={setOpenModalCreateAuthor}
      />
      <div className="text-white mt-4 lg:mt-0 flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold ">Dánh sách </h3>
        <Button
          type="primary"
          onClick={() => setOpenModalCreateAuthor(true)}
          className="hidden lg:block"
        >
          + Thêm mới author
        </Button>
        <Button
          type="primary"
          onClick={() => setOpenModalCreateAuthor(true)}
          className="lg:hidden fixed bottom-5 left-5 right-5 border-2 border-white text-white flex- items-center justify-center bg-blue-600 z-50 rounded-full h-[50px]"
        >
          + Thêm mới author
        </Button>
      </div>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default Authors;
