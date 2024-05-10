import { Button, Input, Modal, Select, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createAuthor, findAllAuthor } from "../../services/author.service";

const ModalCreate = ({ openModalCreateAuthor, setOpenModalCreateAuthor }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    setOpenModalCreateAuthor(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      biography: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tên không được để trống"),
      biography: Yup.string().required("Bio không được để trống"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const newAuthor = {
          name: values.name,
          biography: values.biography,
        };
        const response = await dispatch(createAuthor(newAuthor));
        console.log(response);
        if (response?.payload?.status === 201) {
          await dispatch(findAllAuthor());
          resetForm();
          setOpenModalCreateAuthor(false);
          message.success("Thêm mới thành công");
        }
      } catch (error) {
        message.error("Tạo mới thất bại, kiểm tra lại thông tin");
        resetForm();
        setOpenModalCreateAuthor(false);
      }
    },
  });
  return (
    <>
      <Modal
        title="Thêm mới tác giả"
        open={openModalCreateAuthor}
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
              placeholder="Tên tác giả"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-[6px]">
            <input
              type="text"
              name="biography"
              value={formik.values.biography}
              onChange={formik.handleChange}
              className="text-[13px] mt-2 border border-gray-200 w-full h-[38px] px-2"
              placeholder="Bio"
            />
            {formik.touched.biography && formik.errors.biography ? (
              <div className="text-red-500 text-sm">
                {formik.errors.biography}
              </div>
            ) : null}
          </div>
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
