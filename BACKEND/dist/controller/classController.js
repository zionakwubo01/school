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
exports.viewSchoolClasses = exports.createschoolClasses = void 0;
const mianError_1 = require("../error/mianError");
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const classModel_1 = __importDefault(require("../model/classModel"));
const mongoose_1 = require("mongoose");
const createschoolClasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { classTeacherName, className, class2ndFee, class3rdFee, class1stFee, } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "classRooms",
        });
        const checkclass = school === null || school === void 0 ? void 0 : school.classRooms.some((el) => {
            return el.classRooms === className;
        });
        if (school && (school === null || school === void 0 ? void 0 : school.schoolName) && school.status === "school-admin") {
            if (!checkclass) {
                const classes = yield classModel_1.default.create({
                    schoolName: school.schoolName,
                    classTeacherName,
                    className,
                    class1stFee,
                    class2ndFee,
                    class3rdFee,
                });
                school.classRooms.push(new mongoose_1.Types.ObjectId(classes._id));
                school.save();
                return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                    message: "class created",
                    data: classes,
                    status: 201,
                });
            }
            else {
                return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                    message: "class already exist",
                    status: 404,
                });
            }
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                status: 404,
                message: "school error",
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            status: 404,
            message: "error creating student",
        });
    }
});
exports.createschoolClasses = createschoolClasses;
const viewSchoolClasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "classRooms",
        });
        return res.status(mianError_1.HTTP.OK).json({
            message: "viewing all classes",
            data: school,
            status: 201,
        });
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error viewing schools",
            status: 404,
        });
    }
});
exports.viewSchoolClasses = viewSchoolClasses;
