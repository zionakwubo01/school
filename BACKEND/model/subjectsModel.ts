import { Document, Schema, Types, model } from "mongoose";

interface isubjects {
  schoolName: string;
  subjectTeacherName: string;
  subjectTitle: string;
  designated: string;

  subjectPerformance: number;
  school: {};
  class: {};
  classDetails: {};
}

interface isubjectsData extends isubjects, Document {}

const subjectsModel = new Schema<isubjectsData>({
  schoolName: { type: String },
  subjectTeacherName: { type: String },
  subjectTitle: { type: String },
  designated: { type: String },
  subjectPerformance: { type: Number },
  school: {
    type: Types.ObjectId,
    ref: "schools",
  },
  class: {
    type: Types.ObjectId,
    ref: "classes",
  },
  classDetails: {
    type: {},
  },
});

export default model<isubjectsData>("subjects", subjectsModel);
