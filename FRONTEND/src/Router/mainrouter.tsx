import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/auth/Register";
import Heropage from "../pages/Heropage";
import Login from "../pages/auth/Login";
import Authlayout from "../Lay/Authlayout";
import Layout from "../Lay/Layout";
import Dashhome from "../components/Dashboard/Dashhome";
import Student from "../pages/Viewingstudent/Student";
import Profile from "../pages/profile/Profile";
import Class from "../components/Dashboard/class/Class";
import Detailpage from "../components/student/Detailpage";

export const mainrouter = createBrowserRouter([
  {
    path: "/auth",
    element: <Authlayout />,
    children: [
      {
        index: true,
        element: <Heropage />,
      },
      {
        path: "sign",
        element: <Register />,
      },
      {
        path: "verify",
        element: <Login />,
      },
      {
        path: "verify/:ID",
        element: <Login />,
      },
    ],
  },
  //dashnoard
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashhome />,
      },
      {
        path: "/stu",
        element: <Student />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/class",
        element: <Class />,
      },
      {
        path: "/detail/:studentID",
        element: <Detailpage />,
      },
    ],
  },
]);
