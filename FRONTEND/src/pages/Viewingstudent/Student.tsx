import Button from "../../components/reUse/Button";
import Studentshow from "../../components/student/Studentshow";
import { useDispatch, useSelector } from "react-redux";
import { chengeToggle4 } from "../../components/global/Reduxstate";
import { studentHook } from "../../components/hooks/schoolHooks";
import Input from "../../components/reUse/Input";
import moment from "moment";
import { FaTrash } from "react-icons/fa";
import { deletestudent } from "../../api/Authapi";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Student = () => {
  const togg4 = useSelector((state: any) => state.toggle4);
  const dispatch = useDispatch();
  const { data } = studentHook();
  console.log("this is students data", data);
  return (
    <div className="w-full h-[calc(100vh-50px)]  relative">
      <div className="flex flex-row justify-between">
        <Button
          name={"Add student"}
          className="bg-blue-700 font-bold h-[50px]"
          onClick={() => {
            dispatch(chengeToggle4(true));
          }}
        />

        <Input className=" rounded-md " placeholder="search student" />
      </div>
      <Toaster />
      <div className=" bg-slate-50 p-2 rounded-md flex flex-col gap-3">
        {data?.students?.map((props: any) => (
          <Link to={`/detail/${props._id}`}>
            <div className="w-[100%] h-[40px]  border rounded-md flex flex-row justify-between p-2">
              <p className="font-semibold text-[15px] text-blue-700">{`${props?.studentFirstname}   ${props?.studentLastname}`}</p>
              <p className="font-semibold text-[14px]">{props?.enrollmentID}</p>
              <p
                className="
            font-bold text-[14px] text-blue-700"
              >
                {props?.password}
              </p>
              <p className="text-[14px]">{props?.email}</p>
              <p className="font-bold text-[14px] text-blue-700">
                {moment(props?.createdAT).format("LL")}
              </p>
              <p className="font-mono font-semibold">{props?.classAssigned}</p>
              <div
                className="text-slate-500 cursor-pointer"
                onClick={() => {
                  deletestudent(props?._id).then((res: any) => {
                    if (res.status === 201) {
                      toast.success(res.message);
                    } else {
                      toast.error(res.message);
                    }
                  });
                }}
              >
                <FaTrash size={15} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {togg4 ? <Studentshow /> : ""}
    </div>
  );
};

export default Student;
