import React from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { schoolHook } from "../hooks/schoolHooks";
const Header = () => {
  const { data } = schoolHook();

  return (
    <div>
      <div
        className=" w-[calc(100%))] p-5 h-[50px] flex flex-row
       justify-between bg-blue-600 text-white items-center"
      >
        <div className="font-bold ">Welcome back 👏</div>
        <div className="font-bold">{data?.address}</div>
        <div className="flex flex-row items-center gap-2  justify-items-center">
          <div className="w-[35px] h-[35px] rounded-full border bg-white"></div>
          <p className="font-bold">{data?.schoolName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
