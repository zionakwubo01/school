import { Router } from "express";
import {
  createSchool,
  loginSchool,
  updateSchooladdress,
  updateSchoolname,
  verifySchool,
  viewOneschool,
} from "../controller/schoolController";

const router: Router = Router();
router.route("/create-school").post(createSchool);
router.route("/verify-school/:schoolID").post(verifySchool);
router.route("/login-school").post(loginSchool);
router.route("/view-one-school/:schoolID").get(viewOneschool);
router.route("/update-schoolname/:schoolID").patch(updateSchoolname);
router.route("/update-address/:schoolID").patch(updateSchooladdress);
export default router;
