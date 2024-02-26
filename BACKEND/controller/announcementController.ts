import { Request, Response } from "express";
import { HTTP } from "../error/mianError";
import schoolModel from "../model/schoolModel";
import announcementModel from "../model/announcementModel";
import { Types } from "mongoose";

export const createAnnouncement = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const { title, details, date } = req.body;

    const school = await schoolModel.findById(schoolID);

    if (school && school.status === "school-admin") {
      const announcements = await announcementModel.create({
        title,
        details,
        date,
      });

      school.announcement.push(new Types.ObjectId(announcements._id));
      school.save();
      return res.status(HTTP.OK).json({
        message: "announcements created",
        data: announcements,
        status: 201,
      });
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "school error check",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error creating announcements",
      status: 404,
    });
  }
};

export const viewAnnouncement = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const announcement = await schoolModel.findById(schoolID).populate({
      path: "announcement",
    });
    return res.status(HTTP.OK).json({
      message: "viewing announcements",
      data: announcement,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error viewing announcements",
      status: 404,
    });
  }
};
