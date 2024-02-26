import { Request, Response } from "express";
import { HTTP } from "../error/mianError";
import schoolModel from "../model/schoolModel";
import sessionModel from "../model/sessionModel";
import { Types } from "mongoose";

export const createSession = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const { term, year } = req.body;

    const school = await schoolModel.findById(schoolID);

    if (school) {
      const session = await sessionModel.create({
        term,
        year,
      });
      school?.session.push(new Types.ObjectId(session._id));
      school.save();
      return res.status(HTTP.OK).json({
        message: "session error",
        data: session,
        status: 201,
      });
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "school error",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error",
      status: 404,
    });
  }
};

export const viewSchoolsession = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const school = await schoolModel.findById(schoolID).populate({
      path: "session",
    });

    return res.status(HTTP.OK).json({
      message: "viewing all session",
      data: school,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error",
      status: 404,
    });
  }
};

export const studentsPersession = async (req: Request, res: Response) => {
  try {
    const { sessionID } = req.params;
    const { totalStudents } = req.body;
    const session = await sessionModel.findById(sessionID);

    if (session) {
      const session = await sessionModel.findByIdAndUpdate(
        sessionID,
        {
          totalStudents,
        },
        { new: true }
      );

      return res.status(HTTP.OK).json({
        message: "totalstudents updated",
        data: session,
        status: 201,
      });
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "session dosent exist",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error updating students",
      status: 404,
    });
  }
};
