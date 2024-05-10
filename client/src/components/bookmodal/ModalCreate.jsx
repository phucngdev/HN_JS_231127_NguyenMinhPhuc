import { Button, Input, Modal, Select, Spin, message } from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { findAllBook, createBook } from "../../services/book.service";

const { TextArea } = Input;
const ModalCreate = ({ openModalCreateBook, setOpenModalCreateBook }) => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors.data);
  console.log(authors);
  const [isLoading, setIsLoading] = useState(false);
  const [author, setAuthor] = useState();
  const options = [];

  const handleChangeAuthor = (value) => {
    setAuthor(value);
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
          author: author,
          created_at: new Date(),
          updated_at: new Date(),
        };
        const response = await dispatch(createBook(newBook));
        // setIsLoading(false);
        // if (response?.payload?.status === 201) {
        //   await dispatch(findAllBook());
        //   resetForm();
        //   setIsLoading(false);
        //   setOpenModalCreateBook(false);
        // }
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
              onChange={formik.handleChangeAuthor}
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
            {formik.toucheddescription && formik.errorsdescription ? (
              <div className="text-red-500 text-sm">
                {formik.errorsdescription}
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
            {formik.touchedprice && formik.errorsprice ? (
              <div className="text-red-500 text-sm">{formik.errorsprice}</div>
            ) : null}
          </div>
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={handleChangeAuthor}
            options={options}
          />
          <div className="flex justify-end">
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
