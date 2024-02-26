import path from "path";
import nodemail from "nodemailer";
import { google } from "googleapis";
import ejs from "ejs";
import jwt from "jsonwebtoken";

const Redirect_url = "https://developers.google.com/oauthplayground";
const clientID =
  "352317306312-8o19fhpo7ckccpn6i914f2vhprrp9oce.apps.googleusercontent.com";
const clientSecret = "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";
const refreshToken =
  "1//042JRgLkSgJZwCgYIARAAGAQSNgF-L9IrC8Tyqb-jHtJt9Q2THPO0wsPu7PbNqjzunaPTBTvKxkufyiqFxTysVCkm-OlubGvh4A";
const OAuth = new google.auth.OAuth2(clientID, clientSecret, Redirect_url);

OAuth.setCredentials({ refresh_token: refreshToken });

export const verifyEmail = async (school: any) => {
  try {
    const accessToken: any = (await OAuth.getAccessToken()).token;

    const transporter = nodemail.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "zionakwubo@gmail.com",
        clientSecret: clientSecret,
        clientId: clientID,
        refreshToken: refreshToken,
        accessToken,
      },
    });

    let url: string = "http://localhost:5173";
    const ID = school._id;
    let devURL: string = `${url}/verify/${ID}`;

    const Mailer = {
      from: "School <zionakwubo@gmail.com>",
      to: school.email,
      subject: "verification",
      html: `<p>welcome </p> ${devURL}`,
      url: devURL,
    };

    await transporter
      .sendMail(Mailer)
      .then(() => console.log("sent"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.error(error);
  }
};
