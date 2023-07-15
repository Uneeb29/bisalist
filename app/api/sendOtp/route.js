import { prisma } from "../../../lib/prisma-client";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "gabriella.macgyver97@ethereal.email",
    pass: "wyUmgAUNE26nNNbjXX",
  },
});

export async function POST(request) {
  try {
    // get the email from the request body
    const { email } = await request.json();

    console.log(email);

    // check if the email exists in the database (customer or vendor)
    const customer = await prisma.customer.findUnique({
      where: {
        email: email,
      },
    });

    const vendor = await prisma.vendor.findUnique({
      where: {
        email: email,
      },
    });

    // if the email exists, send a mail to the user with an otp code
    if (customer || vendor) {
      // delete all otp codes that are in the OTP table for this email; if any
      await prisma.OtpVerfiy.deleteMany({
        where: {
          email: email,
        },
      });

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

      //////////////////////////////////////////////////////////////////////////////
      // NOT WORKING ON MY NETWORK FOR SOME REASON

      // const info = await transporter.sendMail(msg);
      // console.log("Message sent: %s", info.messageId);
      //////////////////////////////////////////////////////////////////////////////

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

// Thunder Client Request
// POST http://localhost:8787/api/sendOtp
// Body
// {
//   "email": "customer@test.com"
// }
