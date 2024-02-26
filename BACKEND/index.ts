import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Mainapp } from "./Mainapp";
import { dbconfig } from "./utils/dbconfig";
// import MongoDB from "connect-mongodb-session";
// import session from "express-session"

const app: Application = express();
app.use(cors());
app.use(express.json());

const port: number = 2233;
Mainapp(app);

// const MongoDBStore = MongoDB(session);
// const store = new MongoDBStore({
//   uri: "mongodb://localhost:27017/SCHOOLDB",
//   collection: "sessions",
// });

app.use((req: Request, res: Response, next: NextFunction) => {
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
  dbconfig();
});

process.on("uncaughtException", (error: any) => {
  console.log("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
