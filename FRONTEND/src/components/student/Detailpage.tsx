import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findostudentHook } from "../hooks/schoolHooks";
import { findoneStudents } from "../../api/Authapi";
import img from "../../assets/dum.jpg";
import { FaBook } from "react-icons/fa";
import moment from "moment";
const Detailpage = () => {
  const id = useParams();
  const { data } = findostudentHook(id?.studentID);

  return (
    <div className=" h-[100%] grid grid-rows-3 w-[100%]">
      <div className=" bg-green- col-span-1">
        <div className="flex flex-row gap-16 p-5">
          <div className="w-[200px] h-[200px]  border-[1px] border-black  rounded-full object-fill">
            <img src={img} className="w-full h-full rounded-full" />
          </div>
          <div className="flex  flex-col items-cnter justify-center h-[50px] fod text-[18px]">
            <div className="text-[25px]">Student profile</div>
            <div className="text-[15px]">view profile</div>
          </div>
          <div className=" border h-[40px] w-[140px] flex items-center justify-center rounded-lg">
            view reports
          </div>
        </div>
      </div>
      <div className=" border row-span-2 grid grid-cols-2 w-[100%] p-4 gap-4">
        <div className="col-span-1  rounded-xl shadow-lg p-4  flex flex-col gap-5">
          <p className="font-bold text-[25px] ">personal details</p>
          <p className="font-bold text-[18px]">
            {" "}
            Name: {`${data?.studentFirstname} ${data?.studentLastname}`}
          </p>
          <div>
            <p className="font-bold text-[20px]">Gender:</p>
            <p className="font-mono text-[18px]">{data?.gender}</p>
          </div>
          <div>
            <p className="font-bold text-[20px]">Address: </p>
            <p className="font-mono text-[18px]">ikorodu</p>
          </div>
          <div>
            <p className="font-bold text-[20px]">ID: </p>
            <p className="font-mono text-[18px]">{data?.enrollmentID}</p>
          </div>
          <div>
            <p className="font-bold text-[20px]">email: </p>
            <p className="font-mono text-[18px]">{data?.email}</p>
          </div>
        </div>
        <div className="col-span-1 shadow-lg rounded-xl flex flex-col gap-5 p-4">
          <p className="font-bold text-[25px] ">class details</p>
          <div>
            <p className="font-bold text-[20px]">classRoom:</p>
            <p className="font-mono text-[18px]">{data?.classAssigned}</p>
          </div>
          <div>
            <p className="font-bold text-[20px]">Date of entry: </p>
            <p className="font-mono text-[18px]">
              {moment(data?.createdAt).format("LL")}
            </p>
          </div>
          <div>
            <p className="font-bold text-[20px]">status: </p>
            <p className="font-mono text-[18px]">active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
