import { announceHook } from "../hooks/schoolHooks";

const Noticeboard = () => {
  const { data } = announceHook();

  const announce = data?.announcement;

  return (
    <div>
      <div
        className="w-full p-3 h-[300px] mt-5 border shadow-md  bg-blue-100
             overflow-auto rounded-xl flex items-center justify-center"
      >
        {announce?.length === 0 ? (
          <h1 className="font-bold text-[50px]">no annnouncements yet</h1>
        ) : (
          <div className="flex flex-col gap-4 w-[100%] h-[100%] bg-green-400">
            {/* {announce?.map((props: any) => ( */}
            <div className=" w-[100%] h-full flex flex-col  gap-5 p-6">
              <div className="font-bold text-[25px]">Party</div>
              <div className="font-semibold text-[15px]">title</div>

              <div className="font-serif text-[20px]">title</div>
            </div>
            {/* // ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Noticeboard;
