import { Router } from "express";
import {
  createschoolClasses,
  deleteClass,
  viewSchoolClasses,
} from "../controller/classController";

const router: Router = Router();

router.route("/create-class/:schoolID").post(createschoolClasses);
router.route("/view-schoolclasses/:schoolID").get(viewSchoolClasses);
router.route("/delete-class/:classID").delete(deleteClass);
export default router;
