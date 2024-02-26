import { Link } from "react-router-dom";

const Heropage = () => {
  return (
    <div className="w-full h-[100vh] bg-purple-900 flex justify-center items-center">
      <div className="w-[600px] h-[600px] bg-white p-3 grid grid-cols-2 gap-4">
        <Link to={"sign"}>
          <div
            className="bg-purple-950 h-[200px]  col-span-1 
        flex items-center justify-center"
          >
            <p className="font-bold text-[30px] text-center text-white">
              REGISTER AS SCHOOL
            </p>
          </div>
        </Link>

        <div className="bg-purple-950  h-[200px] col-span-1">1</div>
      </div>
    </div>
  );
};

export default Heropage;
