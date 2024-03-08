import { Request, Response } from "express";
import { HTTP } from "../error/mianError";
import schoolModel from "../model/schoolModel";
import classModel from "../model/classModel";
import { Types } from "mongoose";

export const createschoolClasses = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const {
      classTeacherName,
      className,
      class2ndFee,
      class3rdFee,
      class1stFee,
    } = req.body;

    const school = await schoolModel.findById(schoolID).populate({
      path: "classRooms",
    });

    const checkclass = school?.classRooms.some((el: any) => {
      return el.classRooms === className;
    });

    if (school && school?.schoolName && school.status === "school-admin") {
      if (!checkclass) {
        const classes = await classModel.create({
          schoolName: school.schoolName,
          classTeacherName,
          className,
          class1stFee,
          class2ndFee,
          class3rdFee,
        });

        school.classRooms.push(new Types.ObjectId(classes._id));
        school.save();

        return res.status(HTTP.OK).json({
          message: "class created",
          data: classes,
          status: 201,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "class already exist",
          status: 404,
        });
      }
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        status: 404,
        message: "school error",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      status: 404,
      message: "error creating student",
    });
  }
};

export const viewSchoolClasses = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const school = await schoolModel.findById(schoolID).populate({
      path: "classRooms",
    });

    return res.status(HTTP.OK).json({
      message: "viewing all classes",
      data: school,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error viewing schools",
      status: 404,
    });
  }
};
export const deleteClass = async (req: Request, res: Response) => {
  try {
    const { classID } = req.params;

    const classs = await classModel.findByIdAndDelete(classID);
    return res.status(HTTP.OK).json({
      message: "class deletd",
      data: classs,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error viewing schools",
      status: 404,
    });
  }
};
