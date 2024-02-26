import { useEffect, useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { loginSchool, verifySchool } from "../../api/Authapi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginState } from "../../components/global/Reduxstate";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [enrollmentID, setEnrollmentID] = useState<string>("");
  // const ID = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    verifySchool("65d9d1207898fa23bce31249").then((res) => {
      console.log(res);
    });
  }, []);
  const handleSubmit = () => {
    const val = { email: email, enrollmentID: enrollmentID };
    loginSchool(val).then((res: any) => {
      console.log(res);
      dispatch(loginState(res.data.data));
      navigate("/");
    });
  };
  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div
        className="w-[400px] h-[350px] 
       border-[1px] border-solid rounded-lg flex justify-center items-center flex-col"
      >
        <Input
          className=" border-[0.5px] border-solid"
          placeholder="enter email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          className=" border-[0.5px] border-solid"
          placeholder="enter email"
          value={enrollmentID}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEnrollmentID(e.target.value);
          }}
        />

        <Button
          className="bg-purple-950"
          name={"login"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
