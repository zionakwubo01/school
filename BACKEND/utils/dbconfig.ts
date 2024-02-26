import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/SCHOOLDB";

export const dbconfig = async () => {
  try {
    return await connect(url)
      .then(() => {
        console.log("Database is connected😁😁");
      })
      .catch((err) => console.log(err));
  } catch (error) {
    return error;
  }
};
