import { Document, Schema, Types, model } from "mongoose";

interface iClass {
  className: string;
  classTeacherName: string;
  schoolName: string;
  teacherID: string;

  class1stFee: number;
  class2ndFee: number;
  class3rdFee: number;

  classPerformance: number;

  classSubjects: Array<{}>;
  classStudents: Array<{}>;
  classAttendence: Array<{}>;

  school: {};
}

interface iClassData extends iClass, Document {}

const classesModel = new Schema<iClassData>(
  {
    class1stFee: {
      type: Number,
    },

    class2ndFee: {
      type: Number,
    },
    schoolName: {
      type: String,
    },

    class3rdFee: {
      type: Number,
    },

    className: {
      type: String,
    },

    teacherID: {
      type: String,
    },

    classTeacherName: {
      type: String,
    },
    classPerformance: {
      type: Number,
      default: 0,
    },

    classSubjects: [
      {
        type: Types.ObjectId,
        ref: "subjects",
      },
    ],
    classStudents: [
      {
        type: Types.ObjectId,
        ref: "subjects",
      },
    ],
    school: {
      type: Types.ObjectId,
      ref: "schools",
    },
  },
  { timestamps: true }
);

export default model<iClassData>("classes", classesModel);
