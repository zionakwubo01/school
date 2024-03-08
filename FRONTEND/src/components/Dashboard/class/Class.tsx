import React from "react";
import { classHook } from "../../hooks/schoolHooks";
import { deleteClass } from "../../../api/Authapi";

const Class = () => {
  const { data } = classHook();

  console.log("this is class data", data);
  return (
    <div className="w-[100%] h-[100%] bg-green-800 flex flex-col gap-[10px]">
      {data?.classRooms?.map((props: any) => (
        <div className="bg-slate-300 w-[100%] h-[50px]">
          {props?.className}
          <div className="p-4 bg-red-900" onClick={()=>{
            deleteClass(props._id)
          }}>ok</div>
        </div>
      ))}
    </div>
  );
};

export default Class;
