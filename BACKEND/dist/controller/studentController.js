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
exports.ViewallStudents = exports.createStudent = void 0;
const mianError_1 = require("../error/mianError");
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const crypto_1 = __importDefault(require("crypto"));
const studentsModel_1 = __importDefault(require("../model/studentsModel"));
const mongoose_1 = require("mongoose");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { schoolID } = req.params;
        const { studentFirstname, studentLastname, studentAddress, classAssigned } = req.body;
        const enrollmentID = crypto_1.default.randomBytes(2).toString("hex");
        const password = `${studentFirstname
            .replace(/ /gi, "")
            .toLowerCase()}${studentLastname.replace(/ /gi, "").toLowerCase()}`;
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "classRooms",
        });
        const checkClass = school === null || school === void 0 ? void 0 : school.classRooms.some((el) => {
            return el.className === classAssigned;
        });
        if (school && school.schoolName && school.status === "school-admin") {
            if (checkClass) {
                const student = yield studentsModel_1.default.create({
                    studentFirstname,
                    studentLastname,
                    schoolID: school.enrollmentID,
                    studentAddress,
                    classAssigned,
                    password,
                    enrollmentID,
                    schoolName: school.schoolName,
                    email: `${studentFirstname.replace().toLowerCase()}${studentLastname
                        .replace()
                        .toLowerCase()}@${(_a = school === null || school === void 0 ? void 0 : school.schoolName) === null || _a === void 0 ? void 0 : _a.replace(/ /gi, "").toLowerCase()}.com`,
                });
                school.students.push(new mongoose_1.Types.ObjectId(student._id));
                school.save();
                return res.status(mianError_1.HTTP.OK).json({
                    message: "student created",
                    data: student,
                    status: 201,
                });
            }
            else {
                return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                    message: "couldnt find class",
                    status: 404,
                });
            }
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
exports.createStudent = createStudent;
const ViewallStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const student = yield schoolModel_1.default.findById(schoolID).populate({
            path: "students",
        });
        return res.status(mianError_1.HTTP.OK).json({
            message: "reading students",
            data: student,
            status: 201,
        });
    }
    catch (_b) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error reading students",
            status: 404,
        });
    }
});
exports.ViewallStudents = ViewallStudents;
