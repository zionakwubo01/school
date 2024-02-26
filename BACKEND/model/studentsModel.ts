import { Document, Schema, Types, model } from "mongoose";

interface iStudent {
  studentLastname: string;
  studentFirstname: string;
  studentAddress: string;
  schoolName: string;
  classAssigned: string;
  enrollmentID: string;
  schoolID: string;
  password: string;
  email: string;
  phone: string;
  school: {};
}

interface iStudentdata extends iStudent, Document {}

const studentModel = new Schema<iStudentdata>(
  {
    studentFirstname: { type: String },
    studentLastname: { type: String },
    studentAddress: { type: String },
    schoolName: { type: String },
    classAssigned: { type: String },
    enrollmentID: { type: String },
    schoolID: { type: String },
    password: { type: String },
    email: { type: String },
    phone: { type: String },
    school: {
      type: Types.ObjectId,
      ref: "schools",
    },
  },

  { timestamps: true }
);

export default model<iStudentdata>("students", studentModel);
