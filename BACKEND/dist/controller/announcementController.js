"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewAnnouncement = exports.createAnnouncement = void 0;
const mianError_1 = require("../error/mianError");
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const announcementModel_1 = __importDefault(require("../model/announcementModel"));
const mongoose_1 = require("mongoose");
const createAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { title, details, date } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school && school.schoolName && school.status === "school-admin") {
            const announcements = yield announcementModel_1.default.create({
                title,
                details,
                date,
            });
            school.announcement.push(new mongoose_1.Types.ObjectId(announcements._id));
            school.save();
            return res.status(mianError_1.HTTP.OK).json({
                message: "announcements created",
                data: announcements,
                status: 201,
            });
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "school error check",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error creating announcements",
            status: 404,
        });
    }
});
exports.createAnnouncement = createAnnouncement;
const viewAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const announcement = yield schoolModel_1.default.findById(schoolID).populate({
            path: "announcement",
        });
        return res.status(mianError_1.HTTP.OK).json({
            message: "viewing announcements",
            data: announcement,
            status: 201,
        });
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error viewing announcements",
            status: 404,
        });
    }
});
exports.viewAnnouncement = viewAnnouncement;
