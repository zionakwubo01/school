import { Router } from "express";
import {
  ViewallStudents,
  createStudent,
  deleteStudent,
  findoneStudent,
} from "../controller/studentController";

const router: Router = Router();

router.route("/create-student/:schoolID").post(createStudent);
router.route("/view-all-student/:schoolID").get(ViewallStudents);
router.route("/delete-student/:studentID").delete(deleteStudent);
router.route("/find-one-student/:studentID").get(findoneStudent);

export default router;
