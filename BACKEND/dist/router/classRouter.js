"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classController_1 = require("../controller/classController");
const router = (0, express_1.Router)();
router.route("/create-class/:schoolID").post(classController_1.createschoolClasses);
router.route("/view-schoolclasses/:schoolID").get(classController_1.viewSchoolClasses);
exports.default = router;
