import { Router } from "express";
import {
  ViewallStudents,
  createStudent,
} from "../controller/studentController";

const router: Router = Router();

router.route("/create-student/:schoolID").post(createStudent);
router.route("/view-all-student/:schoolID").get(ViewallStudents);

export default router;
