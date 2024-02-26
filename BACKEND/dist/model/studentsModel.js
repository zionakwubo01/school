"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentModel = new mongoose_1.Schema({
    studentFirstname: { type: String },
    studentLastname: { type: String },
    studentAddress: { type: String },
    schoolName: { type: String },
    classAssigned: { type: String },
    enrollmentID: { type: String },
    schoolID: { type: String },
    password: { type: String },
    email: { type: String },
    phone: { type: String },
    school: {
        type: mongoose_1.Types.ObjectId,
        ref: "schools",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("students", studentModel);
