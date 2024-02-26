import { Response, Request } from "express";
import { HTTP } from "../error/mianError";
import schoolModel from "../model/schoolModel";
import staffsModel from "../model/staffsModel";
import crypto from "crypto";
import { Types } from "mongoose";
export const createStaffTeacher = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const { staffName, salery, phone, subjectTitle, staffAddress } = req.body;
    const pass = `${staffName.replace(/ /gi, "")}`;
    const enrollmentID = crypto.randomBytes(2).toString("hex");
    console.log(pass);
    const school = await schoolModel.findById(schoolID).populate({
      path: "subjects",
    });
    const checkSub: any = school?.subjects.find((el: any) => {
      return el.subjectTitle === subjectTitle;
    });

    if (school && school.schoolName && school.status === "school-admin") {
      if (checkSub) {
        const staff = await staffsModel.create({
          staffName,
          schoolName: school.schoolName,
          salery,
          phone,
          subjectAssigned: [{ title: subjectTitle, id: checkSub._id }],
          subjectTitle,
          password: pass,
          email: `${staffName
            .replace(/ /gi, "")
            .toLowerCase()}@${school?.schoolName
            .replace(/ /gi, "")
            .toLowerCase()}.com`,
          enrollmentID,
          status: "school-teacher",
          staffAddress,
        });
        school.staff.push(new Types.ObjectId(staff._id));
        school.save();

        return res.status(HTTP.OK).json({
          message: "creating staff",
          data: staff,
          status: 201,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "subject doosent exist",
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
      message: "error creating staffs",
      status: 404,
    });
  }
};

export const viewTeaachers = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const teachers = await schoolModel.findById(schoolID).populate({
      path: "staff",
    });
    return res.status(HTTP.OK).json({
      message: "reading teachers",
      data: teachers,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error",
      status: 404,
    });
  }
};
export const viewTeacherdetails = async (req: Request, res: Response) => {
  try {
    const { staffID } = req.params;

    const teacher = await staffsModel.findById(staffID);
    console.log(teacher);
    return res.status(HTTP.OK).json({
      message: "reading teacher details",
      data: teacher,
      status: 201,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error",
      status: 404,
    });
  }
};
