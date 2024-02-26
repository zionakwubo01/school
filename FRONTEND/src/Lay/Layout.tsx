import { Outlet } from "react-router-dom";
import Sider from "../components/static/Sider";
import Header from "../components/static/Header";

const Adminlayout = () => {
  return (
    <div className="flex w-[100%]">
      <div
        className="md:flex w-[250px] h-[100vh] fixed  
       transition-all duration-300 z-50"
      >
        <Sider />
      </div>

      <div className="flex w-[calc(100%)] justify-end">
        <div className="flex flex-col transition-all duration-300 w-[calc(100%-250px)] justify-end">
          <Header />
          <div
            className={`h-[calc(100vh-50px)] p-2 m-2 border rounded-md mt-4 relative `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;
