import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import useSwr from "swr";
import {
  findoneStudents,
  readClass,
  viewOne,
  viewStudents,
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
  const { data, isLoading } = useSwr(
    `api/view-one-session/${Idd.id}`,
    () => {
      return viewasession(Idd.id).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 4000 }
  );
  return { data, isLoading };
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

export const studentHook = () => {
  const schoolID = useSelector((state: any) => state.user);
  const Idd: any = jwtDecode(schoolID);

  const { data } = useSwr(
    `api/view-all-student/${Idd.id}`,
    () => {
      return viewStudents(Idd.id).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 1000 }
  );
  return { data };
};
export const findostudentHook = (ID: any) => {
  const { data } = useSwr(
    `api/view-all-student/`,
    () => {
      return findoneStudents(ID).then((res: any) => {
        return res.data;
      });
    }
    // { refreshInterval: 1000 }
  );
  return { data };
};
