"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const announcementController_1 = require("../controller/announcementController");
const router = (0, express_1.Router)();
router.route("/create-announcement/:schoolID").post(announcementController_1.createAnnouncement);
router.route("/view-announcement/:schoolID").get(announcementController_1.viewAnnouncement);
exports.default = router;
