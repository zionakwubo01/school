"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const announceMentModel = new mongoose_2.Schema({
    title: { type: String },
    date: { type: String },
    details: { type: String },
    school: {
        type: mongoose_1.Types.ObjectId,
        ref: "schools",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("announcements", announceMentModel);
