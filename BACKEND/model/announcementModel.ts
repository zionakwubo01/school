import { Types, model } from "mongoose";
import { Document } from "mongoose";
import { Schema } from "mongoose";

interface iAnnouncement {
  title: string;
  date: string;
  details: string;
  school: {};
}
interface iAnnouncementData extends iAnnouncement, Document {}

const announceMentModel = new Schema<iAnnouncementData>(
  {
    title: { type: String },
    date: { type: String },
    details: { type: String },
    school: {
      type: Types.ObjectId,
      ref: "schools",
    },
  },
  { timestamps: true }
);

export default model<iAnnouncementData>("announcements", announceMentModel);
