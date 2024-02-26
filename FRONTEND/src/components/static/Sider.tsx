import { MdDashboardCustomize } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { MdClass } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sider = () => {
  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="font-bold text-[22px] flex items-center justify-center mt-[17px] gap-2">
        <div className="text-[40px]">
          <FaGraduationCap color={"black"} />
        </div>
        Educo
      </div>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "duration-500 transition-all  rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
            : "duration-500 transition-all  rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
        }
      >
        <div className="w-full h-[35px] flex flex-row items-center gap-2">
          <div className="ml-[20px]">
            <MdDashboardCustomize color={"black"} size={20} />
          </div>
          <p className="text-[15px] text-black font-semibold">dashboard</p>
        </div>
      </NavLink>
      <NavLink
        to={"/stu"}
        className={({ isActive }) =>
          isActive
            ? "duration-500 transition-all  rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
            : "duration-500 transition-all  rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
        }
      >
        <div className="w-full h-[35px] flex flex-row items-center gap-2 ">
          <div className="ml-[20px]">
            <GiTeacher color={"black"} size={20} />
          </div>
          <p className="text-[15px] text-black font-semibold">Students</p>
        </div>
      </NavLink>
      <NavLink
        to={"/class"}
        className={({ isActive }) =>
          isActive
            ? "duration-500 transition-all  rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
            : "duration-500 transition-all  rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
        }
      >
        <div className="w-full h-[35px] flex flex-row items-center gap-2 ">
          <div className="ml-[20px]">
            <GiTeacher color={"black"} size={20} />
          </div>
          <p className="text-[15px] text-black font-semibold">Class</p>
        </div>
      </NavLink>
      <div className="w-full h-[35px]  flex flex-row items-center gap-2">
        <div className="ml-[20px]">
          <MdDashboardCustomize color={"black"} size={20} />
        </div>
        <p className="text-[15px] text-black font-semibold">Teachers</p>
      </div>
      <div className="w-full h-[35px]  flex flex-row items-center gap-2">
        <div className="ml-[20px]">
          <MdEvent color={"black"} size={20} />
        </div>
        <p className="text-[15px] text-black font-semibold">Events</p>
      </div>

      <div className="mt-96">
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all  rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all  rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
        >
          <div className="w-full h-[35px]  flex flex-row items-center gap-2">
            <div className="ml-[20px]">
              <MdEvent color={"black"} size={20} />
            </div>
            <p className="text-[15px] text-black font-semibold">Settings</p>
          </div>
        </NavLink>
        <div className="w-full h-[35px]  flex flex-row items-center gap-2 ">
          <div className="ml-[20px]">
            <MdEvent color={"black"} size={20} />
          </div>
          <p className="text-[15px] text-black font-semibold">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sider;
