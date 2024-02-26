"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mainapp = void 0;
const mianError_1 = require("./error/mianError");
const handleError_1 = require("./error/handleError");
const schoolRouter_1 = __importDefault(require("./router/schoolRouter"));
const sessionRouter_1 = __importDefault(require("./router/sessionRouter"));
const classRouter_1 = __importDefault(require("./router/classRouter"));
const announcementRouter_1 = __importDefault(require("./router/announcementRouter"));
const studentRouter_1 = __importDefault(require("./router/studentRouter"));
const subjectsRouter_1 = __importDefault(require("./router/subjectsRouter"));
const staffRouter_1 = __importDefault(require("./router/staffRouter"));
var HTTP;
(function (HTTP) {
    HTTP[HTTP["OK"] = 200] = "OK";
    HTTP[HTTP["CREATED"] = 201] = "CREATED";
    HTTP[HTTP["BAD_REQUEST"] = 404] = "BAD_REQUEST";
})(HTTP || (HTTP = {}));
const Mainapp = (app) => {
    app.use("/api", schoolRouter_1.default);
    app.use("/api", sessionRouter_1.default);
    app.use("/api", classRouter_1.default);
    app.use("/api", announcementRouter_1.default);
    app.use("/api", studentRouter_1.default);
    app.use("/api", subjectsRouter_1.default);
    app.use("/api", staffRouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                msg: "welcome to my api page",
            });
        }
        catch (error) {
            return error;
        }
    });
    app.all("*", (req, res, next) => {
        next(new mianError_1.mainError({
            name: `Route Error`,
            message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
            status: HTTP.BAD_REQUEST,
            success: false,
        }));
    });
    app.use(handleError_1.handleError);
};
exports.Mainapp = Mainapp;
