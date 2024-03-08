import { useState } from "react";
import Button from "../reUse/Button";
import Input from "../reUse/Input";
import { createStudent } from "../../api/Authapi";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { chengeToggle4 } from "../global/Reduxstate";
import { Toaster, toast } from "react-hot-toast";
import { classHook } from "../hooks/schoolHooks";
import { FaTrash } from "react-icons/fa";
const Studentshow = () => {
  const [firstname, setfirstname] = useState<string>("");
  const [lastname, setlastname] = useState<string>("");
  const [gender, setgender] = useState<string>("");
  const [clas, setclas] = useState<string>("");

  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);
  const { data } = classHook();
  const dispatch = useDispatch();
  const val = {
    studentFirstname: firstname,
    studentLastname: lastname,
    classAssigned: clas,
    gender: gender,
  };
  const Handlesubmit = () => {
    createStudent(Idd.id, val).then((res) => {
      console.log("this is student", res);
      if (res.status === 201) {
        setTimeout(() => {
          dispatch(chengeToggle4(!true));
          toast.success(res.message);
        }, 2000);
      } else {
        toast.error(res.response.data.message);
      }
    });
  };

  return (
    <div>
      <div className="w-[100%] h-[calc(100vh-50px)] bg-blue-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  absolute top-0 flex items-center justify-center">
        <div
          onClick={() => {
            dispatch(chengeToggle4(!true));
          }}
        >
          <FaTrash />
        </div>
        <div className="w-[350px] h-[300px] rounded-[15px] bg-white flex items-center flex-col justify-center">
          <Toaster />
          <Input
            placeholder="firstname"
            value={firstname}
            onChange={(e: any) => {
              setfirstname(e.target.value);
            }}
          />
          <Input
            placeholder="lastname"
            value={lastname}
            onChange={(e: any) => {
              setlastname(e.target.value);
            }}
          />
          <select
            value={clas}
            onChange={(e: any) => {
              setclas(e.target.value);
            }}
            className="w-[300px] h-[40px] bg-white text-gray-400
            border-[0.5px] border-gray-400 rounded-md font-bold"
          >
            {data?.classRooms?.map((props: any) => (
              <option className="bg-white font-bold text-black flex flex-row justify-between">
                {props?.className}
              </option>
            ))}
          </select>
          <select
            value={gender}
            onChange={(e: any) => {
              setgender(e.target.value);
            }}
            className="w-[300px] h-[40px] bg-white text-gray-400 
            border-[0.5px] border-gray-400 rounded-md font-bold mt-3"
          >
            <option>female</option>
            <option>male</option>
          </select>
          <Button
            className="bg-blue-700"
            name={"create student"}
            onClick={Handlesubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Studentshow;
