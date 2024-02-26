import { Router } from "express";
import {
  viewTeacherdetails,
  createStaffTeacher,
  viewTeaachers,
} from "../controller/staffController";

const router: Router = Router();

router.route("/create-staff/:schoolID").post(createStaffTeacher);
router.route("/view-staffs/:schoolID").get(viewTeaachers);
router.route("/view-teacher-details/:staffID").get(viewTeacherdetails);

export default router;
