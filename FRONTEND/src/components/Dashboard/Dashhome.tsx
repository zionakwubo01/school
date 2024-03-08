import { FaGraduationCap } from "react-icons/fa";
import Noticeboard from "./Noticeboard";
import Creationboard from "./Creationboard";
import Slide from "../static/Slide";
import { useSelector } from "react-redux";
import Eventboard from "./Eventboard";
import { schoolHook, sessionHook } from "../hooks/schoolHooks";
import Createclass from "./class/Createclass";
import Studentshow from "../student/Studentshow";

const Dashhome = () => {
  const togg = useSelector((state: any) => state.toggle);
  const togg2 = useSelector((state: any) => state.toggle2);
  const togg3 = useSelector((state: any) => state.toggle3);
  const togg4 = useSelector((state: any) => state.toggle4);

  const { data, isLoadind }: any = sessionHook();

  const year = data?.session[0]?.year;
  // console.log("school", data.students.length);

  return (
    <div className="relative">
      <div className="">
        <div className=" h-[70px] grid grid-cols-4">
          <div className="col-span-1 flex items-center justify-center">
            <div
              className="w-[80%] h-[80%] bg-blue-100 rounded-[10px] flex flex-row items-center 
          justify-center gap-2"
            >
              <div
                className="h-[35px] flex items-center justify-center w-[35px] bg-white rounded-full
            text-blue-600"
              >
                <FaGraduationCap size={20} />
              </div>
              <div>
                <p className="text-[13px]">Total students</p>
                <p className="text-[15px]">{data?.students?.length}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div
              className="w-[80%] h-[80%] bg-blue-100 rounded-[10px] flex flex-row items-center 
          justify-center gap-2"
            >
              <div
                className="h-[35px] flex items-center justify-center w-[35px] bg-white rounded-full
            text-blue-600"
              >
                <FaGraduationCap size={20} />
              </div>
              <div>
                <p className="text-[13px]">Total teachers</p>
                <p className="text-[15px]">{data?.staff?.length}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div
              className="w-[80%] h-[80%] bg-blue-100 rounded-[10px] flex flex-row items-center 
          justify-center gap-2"
            >
              <div
                className="h-[35px] flex items-center justify-center w-[35px] bg-white rounded-full
            text-blue-600"
              >
                <FaGraduationCap size={20} />
              </div>
              <div>
                <p className="text-[13px]">session</p>
                <p className="text-[15px]">{year}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center  ">
            <div
              className="w-[80%] h-[80%] bg-blue-100 rounded-[10px] flex flex-row items-center 
          justify-center gap-2"
            >
              <div
                className="h-[35px] flex items-center justify-center w-[35px] bg-white rounded-full
            text-blue-600"
              >
                <FaGraduationCap size={20} />
              </div>
              <div>
                <p className="text-[13px]">term</p>
                <p className="text-[15px]">{data?.session[0]?.term}</p>
              </div>
            </div>
          </div>
        </div>

        <Noticeboard />
        <div>
          <Creationboard />
        </div>
      </div>

      {togg ? <Slide /> : ""}

      {togg2 ? <Eventboard /> : ""}
      <div>{togg3 ? <Createclass /> : ""}</div>
      <div>{togg4 ? <Studentshow /> : ""}</div>
    </div>
  );
};

export default Dashhome;
