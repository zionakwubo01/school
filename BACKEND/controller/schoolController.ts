import { Request, Response } from "express";
import { HTTP } from "../error/mianError";
import crypto from "crypto";
import schoolModel from "../model/schoolModel";
import jwt from "jsonwebtoken";
import { verifyEmail } from "../utils/email";
export const createSchool = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const id = crypto.randomBytes(3).toString("hex");
    const school = await schoolModel.create({
      email: email,
      enrollmentID: id,
      status: "school-admin",
    });
    verifyEmail(school);
    return res.status(HTTP.CREATED).json({
      message: "school created",
      data: school,
      status: 201,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error creating school",
      data: error.message,
      status: 404,
    });
  }
};
export const verifySchool = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const findschool = await schoolModel.findById(schoolID);

    if (findschool) {
      const verified = await schoolModel.findByIdAndUpdate(
        schoolID,
        { verify: true },
        { new: true }
      );
      return res.status(HTTP.OK).json({
        message: "school verified",
        data: verified,
        status: 201,
      });
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "user dosent exist",
        status: 404,
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error creating school",
      data: error.message,
      status: 404,
    });
  }
};
export const loginSchool = async (req: Request, res: Response) => {
  try {
    const { email, enrollmentID } = req.body;

    const findschool: any = await schoolModel.findOne({ email });
    console.log("this is enrollment id", findschool.enrollmentID);
    if (findschool) {
      if (enrollmentID === findschool.enrollmentID) {
        if (findschool.verify === true) {
          const encrypt = jwt.sign({ id: findschool._id }, "school", {
            expiresIn: "5d",
          });

          return res.status(HTTP.OK).json({
            message: `welcome back`,
            data: encrypt,
            status: 201,
          });
        } else {
          return res.status(HTTP.CREATED).json({
            message: "school needs to verify",
            status: 404,
          });
        }
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "school enrollment incorrect",
          status: 404,
        });
      }
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "school not found",
        status: 404,
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error creating school",
      data: error.message,
      status: 404,
    });
  }
};
export const viewOneschool = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;

    const school = await schoolModel.findById(schoolID);

    return res.status(HTTP.OK).json({
      message: "viewing one user",
      data: school,
      status: 201,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "error viewing one user",
      data: error,
      status: 404,
    });
  }
};

////updates , like updating schoolname address and many moere

export const updateSchoolname = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const { schoolName } = req.body;
    const school = await schoolModel.findById(schoolID);

    if (school) {
      const updateName = await schoolModel.findByIdAndUpdate(
        schoolID,
        { schoolName },
        { new: true }
      );
      return res.status(HTTP.OK).json({
        message: "school name updated",
        data: updateName,
        status: 201,
      });
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "school dosent exist",
        status: 404,
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: error.message,
      status: 404,
    });
  }
};
export const updateSchooladdress = async (req: Request, res: Response) => {
  try {
    const { schoolID } = req.params;
    const { address } = req.body;

    const school = await schoolModel.findById(schoolID);

    if (school) {
      const updateAddress = await schoolModel.findByIdAndUpdate(
        schoolID,
        { address },
        { new: true }
      );
      return res.status(HTTP.OK).json({
        message: "school address updated",
        data: updateAddress,
        status: 201,
      });
    } else {
      return res.status(HTTP.OK).json({
        message: "user not found",
        status: 404,
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: error.message,
      status: 404,
    });
  }
};
