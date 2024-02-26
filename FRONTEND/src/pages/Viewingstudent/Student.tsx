import Button from "../../components/reUse/Button";
import Studentshow from "../../components/student/Studentshow";

const Student = () => {
  return (
    <div className="w-full h-[calc(100vh-50px)] bg-red-900 relative">
      <Button name={"Add student"} className="bg-blue-700 font-bold" />
      <div className="w-[100%] h-[90px] border-[1px] border-blue-600 rounded-lg">
        <p>8484</p>
      </div>

      {/* <Studentshow /> */}
    </div>
  );
};

export default Student;
