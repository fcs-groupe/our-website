import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.ionos.fr",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});
