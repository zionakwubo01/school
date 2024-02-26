import { useState } from "react";
import Input from "../reUse/Input";
import Button from "../reUse/Button";
import { createannouncement } from "../../api/Authapi";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { chengeToggle2 } from "../global/Reduxstate";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
const Eventboard = () => {
  const [state, setState] = useState<boolean>(false);

  const [title, settitle] = useState<string>("");
  const [details, setdetails] = useState<string>("");
  const [date, setdate] = useState<string>("");
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);

  const dispatch = useDispatch();
  const Handlesubmit = () => {
    const val = { title: title, date: date, details: details };
    createannouncement(Idd.id, val).then((res) => {
      console.log("this is event", res);
      setState(true);
      setTimeout(() => {
        dispatch(chengeToggle2(!true));
      }, 1000);
      if (res.status === 201) {
        toast.success(`${res.message}`);
      } else {
        toast.error(`${res.message}`);
      }
    });
  };

  return (
    <div>
      <div
        className="bg-black h-[calc(100vh-50px)] w-full absolute top-0
      flex items-center justify-center  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"
      >
        <Toaster />
        <div
          className="w-[400px] h-[400px] items-center justify-center
         bg-white flex flex-col border rounded-lg"
        >
          <Input
            placeholder="enter title"
            value={title}
            onChange={(e: any) => {
              settitle(e.target.value);
            }}
          />
          <Input
            placeholder="enter date"
            value={date}
            onChange={(e: any) => {
              setdate(e.target.value);
            }}
          />
          <Input
            placeholder="enter announcement"
            className="h-[120px]"
            value={details}
            onChange={(e: any) => {
              setdetails(e.target.value);
            }}
          />
          <Button
            name={state ? <ClipLoader color="white" size={20} /> : "submit"}
            className="bg-blue-700 w-[100px]"
            onClick={Handlesubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Eventboard;
