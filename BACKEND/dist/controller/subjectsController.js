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
exports.viewClasssubjects = exports.createschoolSubjects = void 0;
const mianError_1 = require("../error/mianError");
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const subjectsModel_1 = __importDefault(require("../model/subjectsModel"));
const mongoose_1 = require("mongoose");
const classModel_1 = __importDefault(require("../model/classModel"));
const createschoolSubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { subjectTeacherName, subjectTitle, designated } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "classRooms",
        });
        const subject = yield schoolModel_1.default.findById(schoolID).populate({
            path: "subjects",
        });
        const checkclass = school === null || school === void 0 ? void 0 : school.classRooms.find((el) => {
            return el.className === designated;
        });
        const checkSubject = subject === null || subject === void 0 ? void 0 : subject.subjects.some((el) => {
            return el.subjectTitle === subjectTitle;
        });
        const getClass = yield classModel_1.default.findOne({ className: designated });
        if (school && school.schoolName && school.status === "school-admin") {
            if (checkclass) {
                if (!checkSubject) {
                    const subjects = yield subjectsModel_1.default.create({
                        subjectTeacherName,
                        subjectTitle,
                        designated,
                        classDetails: checkclass,
                    });
                    school.subjects.push(new mongoose_1.Types.ObjectId(subjects._id));
                    school.save();
                    getClass === null || getClass === void 0 ? void 0 : getClass.classSubjects.push(new mongoose_1.Types.ObjectId(subjects._id));
                    getClass === null || getClass === void 0 ? void 0 : getClass.save();
                    return res.status(mianError_1.HTTP.OK).json({
                        message: "subjects created",
                        data: subjects,
                        status: 201,
                    });
                }
                else {
                    return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                        message: "subjects already exist",
                        status: 404,
                    });
                }
            }
            else {
                return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                    message: "class not found",
                    status: 404,
                });
            }
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "school error and others",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error creating subjects",
            status: 404,
        });
    }
});
exports.createschoolSubjects = createschoolSubjects;
const viewClasssubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { classID } = req.params;
        const classs = yield classModel_1.default.findById(classID).populate({
            path: "classSubjects",
        });
        return res.status(mianError_1.HTTP.OK).json({
            messqge: "reading clas",
            data: classs,
            status: 201,
        });
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            messqge: "error",
            status: 404,
        });
    }
});
exports.viewClasssubjects = viewClasssubjects;
