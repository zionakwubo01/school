"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const staffModel = new mongoose_1.Schema({
    staffName: { type: String },
    schoolName: { type: String },
    enrollmentID: { type: String },
    staffAddress: { type: String },
    subjectTitle: { type: String },
    salery: { type: Number },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    status: { type: String },
    school: { type: mongoose_1.Types.ObjectId },
    classAssigned: {
        type: [],
    },
    subjectAssigned: {
        type: [],
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("staffs", staffModel);
