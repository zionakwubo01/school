import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import useSwr from "swr";
import {
  readClass,
  viewOne,
  viewallannounce,
  viewasession,
} from "../../api/Authapi";

export const schoolHook = () => {
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);
  console.log(Idd);
  const { data }: any = useSwr(
    `api/view-one-school/${Idd.id}`,
    () => {
      return viewOne(Idd.id).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 4000 }
  );
  return { data };
};

export const announceHook = () => {
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);
  console.log(Idd);
  const { data } = useSwr(
    `api/view-announcement/${Idd.id}`,
    () => {
      return viewallannounce(Idd.id).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 5000 }
  );
  return { data };
};

export const sessionHook = () => {
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);
  console.log(Idd);
  const { data } = useSwr(
    `api/view-one-session/${Idd.id}`,
    () => {
      return viewasession(Idd.id).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 4000 }
  );
  return { data };
};

export const classHook = () => {
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);
  console.log(Idd);
  const { data } = useSwr(
    `api/view-schoolclasses/${Idd.id}`,
    () => {
      return readClass(Idd.id).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 4000 }
  );
  return { data };
};
