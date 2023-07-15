import { prisma } from "../../../lib/prisma-client";


export async function POST(request) {
  try {
    // get the email and otp from the request body
    const { email, otp } = await request.json();

    console.log(email, otp);

    // check if the email and otp exist in the database
    const user = await prisma.OtpVerfiy.findUnique({
      where: {
        email : email,
        otp : otp,
      },
    });

    // check if the user exists or not
    if (user) {
    // check if otp has expired 

    // if otp expired; delete all that specific user data from OtpVerify

    // if not expired; means its correct; return success response
      

    // return new Response(JSON.stringify("OTP Sent."), { status: 200 });
    } else {
    // the otp is wrong, return an error
    return new Response(JSON.stringify("OTP verification failed"), { status: 400 });
    }
  } catch (error) {
    // in case of any error
    console.log(error);
    return new Response(JSON.stringify("Internal Server Error"), { status: 500 });
  }
}
