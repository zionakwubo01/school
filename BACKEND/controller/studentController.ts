import { Request, Response } from "express";
import { HTTP } from "../error/mianError";
import schoolModel from "../model/schoolModel";
import crypto from "crypto";
import studentsModel from "../model/studentsModel";
import { Types } from "mongoose";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const {
      studentFirstname,
      studentLastname,
      studentAddress,
      classAssigned,
      gender,
    } = req.body;
    const enrollmentID = crypto.randomBytes(2).toString("hex");

    const password = `${studentFirstname
      .replace(/ /gi, "")
      .toLowerCase()}${studentLastname.replace(/ /gi, "").toLowerCase()}`;

    const school = await schoolModel.findById(schoolID).populate({
      path: "classRooms",
    });
    const checkClass = school?.classRooms.some((el: any) => {
      return el.className === classAssigned;
    });

    if (school && school.schoolName && school.status === "school-admin") {
      if (checkClass) {
        const student = await studentsModel.create({
          studentFirstname,
          studentLastname,
          gender,
          schoolID: school.enrollmentID,
          studentAddress,
          classAssigned,
          password,
          enrollmentID,
          schoolName: school.schoolName,
          email: `${studentFirstname.replace().toLowerCase()}${studentLastname
            .replace()
            .toLowerCase()}@${school?.schoolName
            ?.replace(/ /gi, "")
            .toLowerCase()}.com`,
        });
        school.students.push(new Types.ObjectId(student._id));
        school.save();
        return res.status(HTTP.OK).json({
          message: "student created",
          data: student,
          status: 201,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "couldnt find class",
          status: 404,
        });
      }
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

export const ViewallStudents = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const student = await schoolModel.findById(schoolID).populate({
      path: "students",
    });
    return res.status(HTTP.OK).json({
      message: "reading students",
      data: student,
      status: 201,
    });
  } catch {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error reading students",
      status: 404,
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;

    const students = await studentsModel.findByIdAndDelete(studentID);
    return res.status(HTTP.OK).json({
      message: "students deletd",
      data: students,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error viewing schools",
      status: 404,
    });
  }
};
export const findoneStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;

    const student = await studentsModel.findById(studentID);
    return res.status(HTTP.OK).json({
      message: "students found",
      data: student,
      status: 201,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error viewing schools",
      data: error.message,
      status: 404,
    });
  }
};
