"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controller/studentController");
const router = (0, express_1.Router)();
router.route("/create-student/:schoolID").post(studentController_1.createStudent);
router.route("/view-all-student/:schoolID").get(studentController_1.ViewallStudents);
exports.default = router;
