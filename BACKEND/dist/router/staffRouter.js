"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staffController_1 = require("../controller/staffController");
const router = (0, express_1.Router)();
router.route("/create-staff/:schoolID").post(staffController_1.createStaffTeacher);
router.route("/view-staffs/:schoolID").get(staffController_1.viewTeaachers);
router.route("/view-teacher-details/:staffID").get(staffController_1.viewTeacherdetails);
exports.default = router;
