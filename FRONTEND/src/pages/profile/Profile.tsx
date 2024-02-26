import { useState } from "react";
import Input from "../../components/reUse/Input";
import Button from "../../components/reUse/Button";
import { updateSchoolname } from "../../api/Authapi";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
``;
const Profile = () => {
  const token = useSelector((state: any) => state.user);
  const [name, setname] = useState<string>("");
  const [state, setState]: any = useState<any>("");
  const val = { schoolName: name };
  const id: any = jwtDecode(token);
  const Handleclick = () => {
    if (name !== "") {
      updateSchoolname(id.id, val).then((res) => {
        console.log(res);
        setState(res);
      });
    }
  };
  return (
    <div>
      <div>
        <Input
          value={name}
          placeholder="enter school name"
          onChange={(e: any) => {
            setname(e.target.value);
          }}
        />

        <Button
          name={"update school name"}
          className="text-black bg-blue-700"
          onClick={Handleclick}
        />

        <div></div>
      </div>
    </div>
  );
};

export default Profile;
