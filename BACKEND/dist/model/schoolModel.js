"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schoolModel = new mongoose_2.Schema({
    email: { type: String },
    verify: { type: Boolean, default: false },
    status: { type: String },
    enrollmentID: { type: String },
    schoolName: { type: String },
    started: { type: Boolean },
    address: { type: String },
    avatar: { type: String },
    avatarID: { type: String },
    plan: { type: String },
    session: [{ type: mongoose_2.Types.ObjectId, ref: "sessions" }],
    staff: [{ type: mongoose_2.Types.ObjectId, ref: "staffs" }],
    subjects: [{ type: mongoose_2.Types.ObjectId, ref: "subjects" }],
    classRooms: [{ type: mongoose_2.Types.ObjectId, ref: "classes" }],
    students: [{ type: mongoose_2.Types.ObjectId, ref: "students" }],
    announcement: [{ type: mongoose_2.Types.ObjectId, ref: "announcements" }],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("schools", schoolModel);
