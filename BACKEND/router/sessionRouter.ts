import { Router } from "express";
import {
  createSession,
  studentsPersession,
  viewSchoolsession,
} from "../controller/sessionController";

const router: Router = Router();
router.route("/create-session/:schoolID").post(createSession);
router.route("/view-one-session/:schoolID").get(viewSchoolsession);
router.route("/update-student/:sessionID").patch(studentsPersession);

export default router;
