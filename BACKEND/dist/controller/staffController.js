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
exports.viewTeacherdetails = exports.viewTeaachers = exports.createStaffTeacher = void 0;
const mianError_1 = require("../error/mianError");
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const staffsModel_1 = __importDefault(require("../model/staffsModel"));
const crypto_1 = __importDefault(require("crypto"));
const mongoose_1 = require("mongoose");
const createStaffTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { staffName, salery, phone, subjectTitle, staffAddress } = req.body;
        const pass = `${staffName.replace(/ /gi, "")}`;
        const enrollmentID = crypto_1.default.randomBytes(2).toString("hex");
        console.log(pass);
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "subjects",
        });
        const checkSub = school === null || school === void 0 ? void 0 : school.subjects.find((el) => {
            return el.subjectTitle === subjectTitle;
        });
        if (school && school.schoolName && school.status === "school-admin") {
            if (checkSub) {
                const staff = yield staffsModel_1.default.create({
                    staffName,
                    schoolName: school.schoolName,
                    salery,
                    phone,
                    subjectAssigned: [{ title: subjectTitle, id: checkSub._id }],
                    subjectTitle,
                    password: pass,
                    email: `${staffName
                        .replace(/ /gi, "")
                        .toLowerCase()}@${school === null || school === void 0 ? void 0 : school.schoolName.replace(/ /gi, "").toLowerCase()}.com`,
                    enrollmentID,
                    status: "school-teacher",
                    staffAddress,
                });
                school.staff.push(new mongoose_1.Types.ObjectId(staff._id));
                school.save();
                return res.status(mianError_1.HTTP.OK).json({
                    message: "creating staff",
                    data: staff,
                    status: 201,
                });
            }
            else {
                return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                    message: "subject doosent exist",
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
            message: "error creating staffs",
            status: 404,
        });
    }
});
exports.createStaffTeacher = createStaffTeacher;
const viewTeaachers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const teachers = yield schoolModel_1.default.findById(schoolID).populate({
            path: "staff",
        });
        return res.status(mianError_1.HTTP.OK).json({
            message: "reading teachers",
            data: teachers,
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
exports.viewTeaachers = viewTeaachers;
const viewTeacherdetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { staffID } = req.params;
        const teacher = yield staffsModel_1.default.findById(staffID);
        console.log(teacher);
        return res.status(mianError_1.HTTP.OK).json({
            message: "reading teacher details",
            data: teacher,
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
exports.viewTeacherdetails = viewTeacherdetails;
