import { Router } from "express";
import {
  createschoolSubjects,
  viewClasssubjects,
} from "../controller/subjectsController";

const router: Router = Router();

router.route("/create-subjects/:schoolID").post(createschoolSubjects);
router.route("/read-subjects/:classID").get(viewClasssubjects);

export default router;
