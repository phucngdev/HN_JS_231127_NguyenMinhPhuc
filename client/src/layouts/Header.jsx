import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
const Header = ({ query, setQuery }) => {
  return (
    <>
      <div className="h-[56px] flex items-center justify-center mb-8">
        <Input
          className="max-w-[50%] "
          prefix="Tìm kiếm: test postman thì được còn ở đây ko đc"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          suffix={<SearchOutlined />}
        />
      </div>
    </>
  );
};

export default Header;
