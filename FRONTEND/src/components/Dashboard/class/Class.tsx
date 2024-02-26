import React from "react";
import { classHook } from "../../hooks/schoolHooks";

const Class = () => {
  const { data } = classHook();

  console.log("this is class data", data);
  return (
    <div className="w-[100%] h-[100%] bg-green-800 flex flex-col gap-[10px]">
      {data?.classRooms?.map((props: any) => (
        <div className="bg-slate-300 w-[100%] h-[50px]">{props?.className}</div>
      ))}
    </div>
  );
};

export default Class;
