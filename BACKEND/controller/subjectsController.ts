import { Request, Response } from "express";
import { HTTP } from "../error/mianError";
import schoolModel from "../model/schoolModel";
import subjectsModel from "../model/subjectsModel";
import { Types } from "mongoose";
import classModel from "../model/classModel";

export const createschoolSubjects = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const { subjectTeacherName, subjectTitle, designated } = req.body;
    const school = await schoolModel.findById(schoolID).populate({
      path: "classRooms",
    });
    const subject = await schoolModel.findById(schoolID).populate({
      path: "subjects",
    });
    const checkclass = school?.classRooms.find((el: any) => {
      return el.className === designated;
    });
    const checkSubject = subject?.subjects.some((el: any) => {
      return el.subjectTitle === subjectTitle;
    });

    const getClass = await classModel.findOne({ className: designated });

    if (school && school.schoolName && school.status === "school-admin") {
      if (checkclass) {
        if (!checkSubject) {
          const subjects = await subjectsModel.create({
            subjectTeacherName,
            subjectTitle,
            designated,
            classDetails: checkclass,
          });
          school.subjects.push(new Types.ObjectId(subjects._id));
          school.save();

          getClass?.classSubjects.push(new Types.ObjectId(subjects._id));
          getClass?.save();

          return res.status(HTTP.OK).json({
            message: "subjects created",
            data: subjects,
            status: 201,
          });
        } else {
          return res.status(HTTP.BAD_REQUEST).json({
            message: "subjects already exist",
            status: 404,
          });
        }
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "class not found",
          status: 404,
        });
      }
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "school error and others",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error creating subjects",
      status: 404,
    });
  }
};

export const viewClasssubjects = async (req: Request, res: Response) => {
  try {
    const { classID } = req.params;

    const classs = await classModel.findById(classID).populate({
      path: "classSubjects",
    });

    return res.status(HTTP.OK).json({
      messqge: "reading clas",
      data: classs,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      messqge: "error",
      status: 404,
    });
  }
};
