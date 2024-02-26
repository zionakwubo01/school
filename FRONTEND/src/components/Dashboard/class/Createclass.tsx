import React, { useState } from "react";
import Input from "../../reUse/Input";
import Button from "../../reUse/Button";
import { createClass } from "../../../api/Authapi";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { chengeToggle3 } from "../../global/Reduxstate";
import toast, { Toaster } from "react-hot-toast";

const Createclass = () => {
  const [name, setname] = useState<string>("");
  const [clas, setclass] = useState<string>("");
  const val = { classTeacherName: name, className: clas };
  const idd: any = useSelector((state: any) => state.user);
  const dec: any = jwtDecode(idd);
  const dispatch = useDispatch();
  const Handlesubmit = () => {
    createClass(dec.id, val).then((res) => {
      console.log("this is class", res);
      if (res.status === 201) {
        dispatch(chengeToggle3(!true));
        toast.success(`${res.message}`);
      } else {
      }
    });
  };
  return (
    <div>
      <div className="w-[100%] h-[calc(100vh-50px)] bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute top-0 flex items-center justify-center">
        <div className="w-[400px] h-[300px] bg-white flex  items-center justify-center flex-col">
          <Toaster />
          <Input
            placeholder="enter class teacher name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setname(e.target.value);
            }}
          />
          <Input
            placeholder="enter class name (jss 1A)"
            value={clas}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setclass(e.target.value);
            }}
          />
          <Button
            name={"create class"}
            className="bg-blue-700"
            onClick={Handlesubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Createclass;
