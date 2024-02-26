import { model } from "mongoose";
import { Document, Schema, Types } from "mongoose";

interface iSchool {
  started: boolean;
  email: string;
  verify: boolean;
  enrollmentID: string;
  status: string;
  schoolName: string;
  address: string;
  avatar: string;
  avatarID: string;
  plan: string;
  session: Array<{}>;
  staff: Array<{}>;
  subjects: Array<{}>;
  classRooms: Array<{}>;
  students: Array<{}>;
  announcement: Array<{}>;
}

interface iSchoolData extends iSchool, Document {}

const schoolModel = new Schema<iSchoolData>(
  {
    email: { type: String },
    verify: { type: Boolean, default: false },
    status: { type: String },
    enrollmentID: { type: String },
    schoolName: { type: String },
    started: { type: Boolean },
    address: { type: String },
    avatar: { type: String },
    avatarID: { type: String },
    plan: { type: String },
    session: [{ type: Types.ObjectId, ref: "sessions" }],
    staff: [{ type: Types.ObjectId, ref: "staffs" }],
    subjects: [{ type: Types.ObjectId, ref: "subjects" }],
    classRooms: [{ type: Types.ObjectId, ref: "classes" }],
    students: [{ type: Types.ObjectId, ref: "students" }],
    announcement: [{ type: Types.ObjectId, ref: "announcements" }],
  },
  { timestamps: true }
);

export default model<iSchoolData>("schools", schoolModel);
