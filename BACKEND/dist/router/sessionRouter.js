"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sessionController_1 = require("../controller/sessionController");
const router = (0, express_1.Router)();
router.route("/create-session/:schoolID").post(sessionController_1.createSession);
router.route("/view-one-session/:schoolID").get(sessionController_1.viewSchoolsession);
router.route("/update-student/:sessionID").patch(sessionController_1.studentsPersession);
exports.default = router;
