"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const classesModel = new mongoose_1.Schema({
    class1stFee: {
        type: Number,
    },
    class2ndFee: {
        type: Number,
    },
    schoolName: {
        type: String,
    },
    class3rdFee: {
        type: Number,
    },
    className: {
        type: String,
    },
    teacherID: {
        type: String,
    },
    classTeacherName: {
        type: String,
    },
    classPerformance: {
        type: Number,
        default: 0,
    },
    classSubjects: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "subjects",
        },
    ],
    classStudents: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "subjects",
        },
    ],
    school: {
        type: mongoose_1.Types.ObjectId,
        ref: "schools",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("classes", classesModel);
