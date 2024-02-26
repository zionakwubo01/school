import { useDispatch } from "react-redux";
import { chengeToggle } from "../global/Reduxstate";
import Input from "../reUse/Input";
import { useState } from "react";
import { createSession } from "../../api/Authapi";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const Slide = () => {
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);

  const dispatch = useDispatch();
  const [term, setterm] = useState<string>("");
  const [year, setyear] = useState<string>("");
  const handlesubmit = () => {
    const val = { term: term, year: year };
    createSession(Idd.id, val).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div
        className="w-[100%] h-[calc(100vh-50px)]  absolute 
      top-0 right-0 flex justify-between bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <div
          onClick={() => {
            dispatch(chengeToggle(!true));
          }}
          className=" w-[63%] h-full"
        ></div>
        <div className="bg-white w-[37%] border h-full flex items-center justify-center flex-col">
          <Input
            placeholder="enter term"
            value={term}
            onChange={(e: any) => {
              setterm(e.target.value);
            }}
          />
          <Input
            placeholder="enter term"
            value={year}
            onChange={(e: any) => {
              setyear(e.target.value);
            }}
          />
          <button
            onClick={() => {
              handlesubmit();
            }}
            className="w-[300px] h-[40px] bg-blue-700 rounded-md font-bold text-[20px]
             text-white"
          >
            done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
