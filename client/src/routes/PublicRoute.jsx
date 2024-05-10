import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/SideBar";

const PublicRoute = () => {
  return (
    <>
      <Sidebar />
      <div className="p-2 lg:w-[calc(100%-220px)] xl:w-[calc(100%-320px)] lg:ms-[220px] xl:ms-[320px] lg:p-[30px]">
        <Outlet />
      </div>
    </>
  );
};

export default PublicRoute;
