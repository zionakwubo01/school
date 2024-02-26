import { useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { registerSchool } from "../../api/Authapi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const val = { email: email };
    registerSchool(val).then((res) => {
      console.log(res);
      if (res.status === 201) {
        navigate("/auth/verify");
      }
    });
  };
  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div
        className="w-[400px] h-[350px] border-purple-950
       border-[1px] border-solid rounded-lg flex justify-center items-center flex-col"
      >
        <Input
          className="border-purple-950 border-[0.5px] border-solid"
          placeholder="enter email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />

        <Button
          className="bg-purple-950"
          name={"Register"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
