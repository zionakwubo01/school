import { announceHook } from "../hooks/schoolHooks";
import { FaGraduationCap } from "react-icons/fa";

const Noticeboard = () => {
  const { data } = announceHook();

  const announce = data?.announcement;
  console.log(announce);

  return (
    <div>
      <div
        className="w-full p-3 h-[300px] mt-5 border shadow-md  bg-blue-100
             overflow-auto rounded-xl"
      >
        <h1 className="font-bold text-[30px]">Notice board</h1>
        {announce?.length === 0 ? (
          <h1 className="font-bold text-[50px]">no annnouncements yet</h1>
        ) : (
          <div className="flex flex-col gap-4">
            {announce?.map((props: any) => (
              <div className=" w-[100%] h-[50px] flex flex-row items-center gap-10">
                <div
                  className="flex items-center justify-center gap-6
          "
                >
                  <div
                    className="w-[50px] h-[50px] bg-black border 
                flex items-center justify-center rounded-full"
                  >
                    <FaGraduationCap color={"white"} size={40} />
                  </div>
                  <h1 className="font-bold text-[18px ]">{props?.title}</h1>
                  <p className="font-bold text-[15px]">{props?.details}</p>
                </div>
                <div className=" text-white font-semibold w-[100px] bg-blue-600 h-[30px] rounded-md flex items-center justify-center">
                  {props?.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Noticeboard;
