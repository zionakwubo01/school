import { Router } from "express";
import {
  createAnnouncement,
  viewAnnouncement,
} from "../controller/announcementController";

const router: Router = Router();

router.route("/create-announcement/:schoolID").post(createAnnouncement);
router.route("/view-announcement/:schoolID").get(viewAnnouncement);

export default router;
