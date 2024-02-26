"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjectsController_1 = require("../controller/subjectsController");
const router = (0, express_1.Router)();
router.route("/create-subjects/:schoolID").post(subjectsController_1.createschoolSubjects);
router.route("/read-subjects/:classID").get(subjectsController_1.viewClasssubjects);
exports.default = router;
