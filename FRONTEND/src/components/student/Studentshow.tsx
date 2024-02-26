import Button from "../reUse/Button";
import Input from "../reUse/Input";

const Studentshow = () => {
  return (
    <div>
      <div className="w-[100%] h-[calc(100vh-50px)] bg-yellow-900 absolute top-0 flex items-center justify-center">
        <div className="w-[350px] h-[300px] bg-white flex items-center flex-col justify-center">
          <Input placeholder="" />
          <Input placeholder="" />
          <Button className="bg-blue-700" name={"create student"} />
        </div>
      </div>
    </div>
  );
};

export default Studentshow;
