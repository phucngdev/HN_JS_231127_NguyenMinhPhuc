import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { findAllAuthor, findAllBookAnAuthor } from "../services/author.service";
import { useNavigate, useParams } from "react-router-dom";

const AuthorDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const authors = useSelector((state) => state.authors.data);

  // cal api author theo id
  const fetchDataAuthor = async () => {
    await dispatch(findAllBookAnAuthor(id));
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
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];
  const data = authors?.result || [];

  return (
    <>
      <div className="mt-4 lg:mt-0 text-white mb-5">
        <h3 className="text-xl font-bold ">Danh sách các sách của tác giả</h3>
      </div>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default AuthorDetail;
