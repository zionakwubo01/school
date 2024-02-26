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
exports.studentsPersession = exports.viewSchoolsession = exports.createSession = void 0;
const mianError_1 = require("../error/mianError");
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const sessionModel_1 = __importDefault(require("../model/sessionModel"));
const mongoose_1 = require("mongoose");
const createSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { term, year } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school && school.schoolName) {
            const session = yield sessionModel_1.default.create({
                term,
                year,
            });
            school === null || school === void 0 ? void 0 : school.session.push(new mongoose_1.Types.ObjectId(session._id));
            school.save();
            return res.status(mianError_1.HTTP.OK).json({
                message: "session error",
                data: session,
                status: 201,
            });
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "school error",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error",
            status: 404,
        });
    }
});
exports.createSession = createSession;
const viewSchoolsession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "session",
        });
        return res.status(mianError_1.HTTP.OK).json({
            message: "viewing all session",
            data: school,
            status: 201,
        });
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error",
            status: 404,
        });
    }
});
exports.viewSchoolsession = viewSchoolsession;
const studentsPersession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sessionID } = req.params;
        const { totalStudents } = req.body;
        const session = yield sessionModel_1.default.findById(sessionID);
        if (session) {
            const session = yield sessionModel_1.default.findByIdAndUpdate(sessionID, {
                totalStudents,
            }, { new: true });
            return res.status(mianError_1.HTTP.OK).json({
                message: "totalstudents updated",
                data: session,
                status: 201,
            });
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "session dosent exist",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error updating students",
            status: 404,
        });
    }
});
exports.studentsPersession = studentsPersession;
