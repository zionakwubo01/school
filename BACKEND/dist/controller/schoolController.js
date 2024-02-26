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
exports.updateSchooladdress = exports.updateSchoolname = exports.viewOneschool = exports.loginSchool = exports.verifySchool = exports.createSchool = void 0;
const mianError_1 = require("../error/mianError");
const crypto_1 = __importDefault(require("crypto"));
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const id = crypto_1.default.randomBytes(3).toString("hex");
        const school = yield schoolModel_1.default.create({
            email: email,
            enrollmentID: id,
            status: "school-admin",
        });
        return res.status(mianError_1.HTTP.CREATED).json({
            message: "school created",
            data: school,
            status: 201,
        });
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error creating school",
            data: error.message,
            status: 404,
        });
    }
});
exports.createSchool = createSchool;
const verifySchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const findschool = yield schoolModel_1.default.findById(schoolID);
        if (findschool) {
            const verified = yield schoolModel_1.default.findByIdAndUpdate(schoolID, { verify: true }, { new: true });
            return res.status(mianError_1.HTTP.OK).json({
                message: "school verified",
                data: verified,
                status: 201,
            });
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "user dosent exist",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error creating school",
            data: error.message,
            status: 404,
        });
    }
});
exports.verifySchool = verifySchool;
const loginSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, enrollmentID } = req.body;
        const findschool = yield schoolModel_1.default.findOne({ email });
        if (findschool) {
            if (enrollmentID === findschool.enrollmentID) {
                if (findschool.verify) {
                    const encrypt = jsonwebtoken_1.default.sign({ status: findschool.status }, "school", {
                        expiresIn: "5d",
                    });
                    return res.status(mianError_1.HTTP.OK).json({
                        message: `welcome back`,
                        data: encrypt,
                        status: 201,
                    });
                }
                else {
                    return res.status(mianError_1.HTTP.CREATED).json({
                        message: "school needs to verify",
                        status: 404,
                    });
                }
            }
            else {
                return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                    message: "school enrollment incorrect",
                    status: 404,
                });
            }
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "school not found",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error creating school",
            data: error.message,
            status: 404,
        });
    }
});
exports.loginSchool = loginSchool;
const viewOneschool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const school = yield schoolModel_1.default.findById(schoolID);
        return res.status(mianError_1.HTTP.OK).json({
            message: "viewing one user",
            data: school,
            status: 201,
        });
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: "error viewing one user",
            data: error,
            status: 404,
        });
    }
});
exports.viewOneschool = viewOneschool;
////updates , like updating schoolname address and many moere
const updateSchoolname = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { schoolName } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school) {
            const updateName = yield schoolModel_1.default.findByIdAndUpdate(schoolID, { schoolName }, { new: true });
            return res.status(mianError_1.HTTP.OK).json({
                message: "school name updated",
                data: updateName,
                status: 201,
            });
        }
        else {
            return res.status(mianError_1.HTTP.BAD_REQUEST).json({
                message: "school dosent exist",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: error.message,
            status: 404,
        });
    }
});
exports.updateSchoolname = updateSchoolname;
const updateSchooladdress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { address } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school) {
            const updateAddress = yield schoolModel_1.default.findByIdAndUpdate(schoolID, { address }, { new: true });
            return res.status(mianError_1.HTTP.OK).json({
                message: "school address updated",
                data: updateAddress,
                status: 201,
            });
        }
        else {
            return res.status(mianError_1.HTTP.OK).json({
                message: "user not found",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(mianError_1.HTTP.BAD_REQUEST).json({
            message: error.message,
            status: 404,
        });
    }
});
exports.updateSchooladdress = updateSchooladdress;
//updating profile picture and avatar
