import { Button, Input, Modal, Select, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { findAllBook, createBook } from "../../services/book.service";
import { findAllAuthor } from "../../services/author.service";

const { TextArea } = Input;
const ModalCreate = ({ openModalCreateBook, setOpenModalCreateBook }) => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors.data);

  const [isLoading, setIsLoading] = useState(false);
  const [authorId, setAuthorId] = useState(1);
  const [author, setAuthor] = useState(
    authors?.result?.map((item) => ({
      value: item.id,
      label: item.name,
    }))
  );

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

  const handleCancel = () => {
    setOpenModalCreateBook(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: null,
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
        setIsLoading(true);
        const newBook = {
          name: values.name,
          description: values.description,
          price: values.price,
          authorId: authorId,
        };
        const response = await dispatch(createBook(newBook));
        setIsLoading(false);
        if (response?.payload?.status === 201) {
          await dispatch(findAllBook());
          resetForm();
          setIsLoading(false);
          setOpenModalCreateBook(false);
          message.success("Thêm mới thành công");
        }
      } catch (error) {
        message.error("Tạo mới thất bại, kiểm tra lại thông tin");
        resetForm();
        setIsLoading(false);
        setOpenModalCreateBook(false);
      }
    },
  });
  return (
    <>
      {isLoading && (
        <>
          <div className="fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Spin />
          </div>
        </>
      )}
      <Modal
        title="Thêm mới sách"
        open={openModalCreateBook}
        onCancel={handleCancel}
        footer={false}
      >
        <form className="" onSubmit={formik.handleSubmit}>
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
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
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
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            ) : null}
          </div>
          <Select
            defaultValue={1}
            className="w-full mt-2"
            onChange={handleChangeAuthor}
            options={author}
          />
          <div className="flex justify-end mt-4">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreate;
