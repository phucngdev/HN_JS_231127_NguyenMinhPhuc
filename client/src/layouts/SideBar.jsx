import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden bg-[#e2e2e2] lg:block lg:w-[220px] xl:w-[320px] h-[100vh] fixed top-0 left-0">
        <div className="flex justify-center mt-[17px]">
          <h1 className="text-2xl font-bold">Books Store</h1>
        </div>
        <div className="w-full flex items-center flex-col mt-[38px] px-5">
          <NavLink to="/" className="w-full py-4 rounded-lg text-center">
            Books
          </NavLink>
          <NavLink to="/authors" className="w-full py-4 rounded-lg text-center">
            Authors
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
