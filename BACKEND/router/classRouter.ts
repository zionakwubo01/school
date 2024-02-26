import { Router } from "express";
import {
  createschoolClasses,
  viewSchoolClasses,
} from "../controller/classController";

const router: Router = Router();

router.route("/create-class/:schoolID").post(createschoolClasses);
router.route("/view-schoolclasses/:schoolID").get(viewSchoolClasses);
export default router;
