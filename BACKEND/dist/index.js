"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Mainapp_1 = require("./Mainapp");
const dbconfig_1 = require("./utils/dbconfig");
// import MongoDB from "connect-mongodb-session";
// import session from "express-session"
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 2233;
(0, Mainapp_1.Mainapp)(app);
// const MongoDBStore = MongoDB(session);
// const store = new MongoDBStore({
//   uri: "mongodb://localhost:27017/SCHOOLDB",
//   collection: "sessions",
// });
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.APP_URL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET!,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 24 * 60,
//       sameSite: "lax",
//       secure: false,
//       httpOnly: true,
//     },
//     store,
//   })
// );
const server = app.listen(port, () => {
    console.log("server established");
    (0, dbconfig_1.dbconfig)();
});
process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection", reason);
    server.close(() => {
        process.exit(1);
    });
});
