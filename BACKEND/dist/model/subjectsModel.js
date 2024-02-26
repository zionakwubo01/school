"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subjectsModel = new mongoose_1.Schema({
    schoolName: { type: String },
    subjectTeacherName: { type: String },
    subjectTitle: { type: String },
    designated: { type: String },
    subjectPerformance: { type: Number },
    school: {
        type: mongoose_1.Types.ObjectId,
        ref: "schools",
    },
    class: {
        type: mongoose_1.Types.ObjectId,
        ref: "classes",
    },
    classDetails: {
        type: {},
    },
});
exports.default = (0, mongoose_1.model)("subjects", subjectsModel);
