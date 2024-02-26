import { Document, Types, Schema, model } from "mongoose";

interface iStaffs {
  staffName: string;
  schoolName: string;
  subjectTitle: string;
  staffAddress: string;
  salery: number;
  enrollmentID: string;
  email: string;
  password: string;
  classAssigned: Array<string>;
  subjectAssigned: Array<{}>;
  phone: string;
  school: {};
  status: string;
}

interface iStaffData extends iStaffs, Document {}

const staffModel = new Schema<iStaffData>(
  {
    staffName: { type: String },
    schoolName: { type: String },
    enrollmentID: { type: String },
    staffAddress: { type: String },
    subjectTitle: { type: String },
    salery: { type: Number },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    status: { type: String },
    school: { type: Types.ObjectId },
    classAssigned: {
      type: [],
    },
    subjectAssigned: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iStaffData>("staffs", staffModel);
