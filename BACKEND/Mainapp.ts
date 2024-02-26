import { Application, NextFunction, Request, Response } from "express";
import { mainError } from "./error/mianError";
import { handleError } from "./error/handleError";
import admin from "./router/schoolRouter";
import session from "./router/sessionRouter";
import classes from "./router/classRouter";
import announcement from "./router/announcementRouter";
import student from "./router/studentRouter";
import subjects from "./router/subjectsRouter";
import staffs from "./router/staffRouter";

enum HTTP {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 404,
}
export const Mainapp = (app: Application) => {
  app.use("/api", admin);
  app.use("/api", session);
  app.use("/api", classes);
  app.use("/api", announcement);
  app.use("/api", student);
  app.use("/api", subjects);
  app.use("/api", staffs);
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        msg: "welcome to my api page",
      });
    } catch (error) {
      return error;
    }
  });

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new mainError({
        name: `Route Error`,
        message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
        status: HTTP.BAD_REQUEST,
        success: false,
      })
    );
  });
  app.use(handleError);
};
