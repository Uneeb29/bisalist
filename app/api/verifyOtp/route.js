import { prisma } from "../../../lib/prisma-client";

export async function POST(request) {
  try {
    // get the email and otp from the request body
    const { email, otp } = await request.json();

    console.log(email, otp);

    // check if the email and otp exist in the database
    const user = await prisma.OtpVerfiy.findFirst({
      where: {
        email: email,
        otp: otp,
      },
    });

    // check if the user exists or not
    if (user && user.otp === otp) {
      // check if otp has expired
      if (user.expiresAt < new Date()) {
        // if expired; delete all that specific user data from OtpVerify
        await prisma.OtpVerfiy.deleteMany({
          where: {
            email: email,
          },
        });

        // return error response
        return new Response(JSON.stringify("OTP expired!"), { status: 400 });
      }

      // if not expired; means its correct; return success response
      // but first delete all that specific user data from OtpVerify

      await prisma.OtpVerfiy.deleteMany({
        where: {
          email: email,
        },
      });

      return new Response(JSON.stringify("OTP verified."), { status: 200 });
    } else {
      // if the email or otp does not exist, return an error (could be wrong otp)
      return new Response(JSON.stringify("OTP verification failed!"), {
        status: 400,
      });
    }
  } catch (error) {
    // in case of any error
    console.log(error);
    return new Response(JSON.stringify("Internal Server Error (OTP)"), {
      status: 500,
    });
  }
}

// Thunder Client Request
// body:
// {
//   "email": "customer@test.com",
//   "otp":
// }
