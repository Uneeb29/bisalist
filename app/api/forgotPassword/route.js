import { prisma } from "../../../lib/prisma-client";
const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   // fake smtp server for dev only
//   host: "smtp.ethereal.email",
//   port: 587,
//   // these credentials are fake. Real ones will be in the environment variables
//   auth: {
//     user: "abdiel71@ethereal.email",
//     pass: "U9dhJte8tCc8Qn8hNB",
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jewel.crona@ethereal.email",
    pass: "s39emmE84PddVhxJR5",
  },
});

export async function POST(request) {
  try {
    // get the email from the request body
    const { email, role } = await request.json();

    console.log(email, role);

    // check if the email exists in the database
    const user = await prisma[role].findUnique({
      where: {
        email,
      },
    });

    // if the email exists, send a mail to the user with an otp code
    if (user) {
    // generate an otp code
    const otp = Math.floor(100000 + Math.random() * 900000);

    // send the otp code to the user's email
    const msg = {
      to: email,
      from: '"Bisalist Co." <bisalist@ghanna.com>',
      subject: "Forgot Password",
      text: `Your otp code is ${otp}`,
      html: `<strong>Your otp code is ${otp}</strong>`,
    };

    console.log(msg);

    // send the mail

    console.log("Sending mail...");

    const info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);

    console.log("Write to database...");

    // write the otp code to the database
    await prisma.OtpVerfiy.create({
      data: {
        email: email,
        otp: otp,
        // the otp expires in 5 minutes
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    return new Response(JSON.stringify("OTP Sent."), { status: 200 });
    } else {
    // if the email does not exist, return an error
    return new Response(JSON.stringify("User not Found."), { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Error"), { status: 500 });
  }
}
