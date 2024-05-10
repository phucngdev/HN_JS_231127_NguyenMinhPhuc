import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, findOneBook, updateBook } from "../services/book.service";
import * as Yup from "yup";
import { Button, Select, message, Popconfirm } from "antd";
import { useFormik } from "formik";
import { findAllAuthor } from "../services/author.service";

const BookDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const authors = useSelector((state) => state.authors.data);
  const book = useSelector((state) => state.books.dataEdit);
  const [bookDetail, setBookDetail] = useState(book?.result);
  const [authorId, setAuthorId] = useState(bookDetail?.author_id);
  console.log(book);
  const [author, setAuthor] = useState(
    authors?.result?.map((item) => ({
      value: item.id,
      label: item.name,
    }))
  );

  useEffect(() => {
    if (book) {
      setBookDetail(book?.result);
    }
  }, [book, id]);

  const fetchDataBook = async () => {
    await dispatch(findOneBook(id));
  };

  useEffect(() => {
    fetchDataBook();
  }, [id]);

  useEffect(() => {
    if (authors) {
      setAuthor(
        authors?.result?.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
    }
  }, [authors]);

  const fetchDataAuthor = async () => {
    await dispatch(findAllAuthor());
  };

  useEffect(() => {
    fetchDataAuthor();
  }, []);

  const handleChangeAuthor = (value) => {
    setAuthorId(value);
  };

  const formik = useFormik({
    initialValues: {
      name: bookDetail?.book_name,
      description: bookDetail?.book_description,
      price: bookDetail?.book_price,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Không được vượt quá 50 ký tự")
        .required("Tên không được để trống"),
      description: Yup.string()
        .max(200, "Không được vượt quá 200 ký tự")
        .required("Mô tả không được để trống"),
      price: Yup.number().required("Giá không được để trống"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const newBookUpdate = {
          name: values.name,
          description: values.description,
          price: values.price,
          authorId: authorId,
        };
        const response = await dispatch(
          updateBook({ id: id, data: newBookUpdate })
        );
        if (response?.payload?.status === 200) {
          await dispatch(findOneBook(id));
          message.success("Update thành công");
        }
      } catch (error) {
        message.error("Update thất bại, kiểm tra lại thông tin");
      }
    },
  });

  const confirm = async (e) => {
    await dispatch(deleteBook(id));
    navigate("/");
    message.success("Xoá thành công");
  };
  const cancel = (e) => {};

  return (
    <>
      {book && (
        <div className="mt-4 lg:mt-0 text-white">
          <h3 className="text-xl font-bold ">Chi tiết</h3>
          <div className="flex gap-5 mt-6">
            <div className="flex gap-5 w-[50%]">
              <div className="w-[40%]">
                <div className="text-lg font-bold">{bookDetail?.book_name}</div>
                <div className="mt-3">Tác giả: {bookDetail?.author_name}</div>
                <div className="mt-2">Giá sách: {bookDetail?.book_price}</div>
              </div>
              <div className="flex-1">
                Mô tả sách: <br /> {bookDetail?.book_description}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold ">Sửa thông tin sách tại đây</h3>
              <form className="text-black" onSubmit={formik.handleSubmit}>
                <div className="mb-[6px]">
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="text-[13px] mt-6 border border-gray-200 w-full h-[38px] px-2"
                    placeholder="Tên sách"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="mb-[6px]">
                  <input
                    type="text"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className="text-[13px] mt-2 border border-gray-200 w-full h-[38px] px-2"
                    placeholder="Mô tả"
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.description}
                    </div>
                  ) : null}
                </div>
                <div className="mb-[6px]">
                  <input
                    type="number"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    className="text-[13px] border mt-2 border-gray-200 w-full h-[38px] px-2"
                    placeholder="Giá tièn"
                  />
                  {formik.touched.price && formik.errors.price ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.price}
                    </div>
                  ) : null}
                </div>
                <Select
                  defaultValue={bookDetail?.author_id}
                  className="w-full mt-2"
                  onChange={handleChangeAuthor}
                  options={author}
                />
                <div className="flex justify-between items-center mt-4">
                  <Popconfirm
                    title="Bạn muốn xoá mục này?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="" className="bg-red-600 text-white ">
                      Xoá
                    </Button>
                  </Popconfirm>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetail;
