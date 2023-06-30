import { NextResponse } from "next/server";
import { prisma } from "../../../server/db/client";

export async function POST(request) {
  console.log("Hit api endpoint");

  // this endpoint is hit from the serverside, so we can access the body directly
  const { email, password, role } = await request.body;

  try {
    // check if the user exists
    const user = await prisma[role].findUnique({
      where: {
        email,
      },
    });

    // if the user exists, check the password
    if (user) {
      // if the password matches, return the user data
      if (user.password === password) {
        return NextResponse.json({
          status: 200, // will be used for the response status code
          body: user,
        });
      } else {
        // if the password doesn't match, return an error
        return NextResponse.json({
          status: 401,
          body: "Incorrect password",
        });
      }
    } else {
      return NextResponse.json({
        status: 401,
        body: "User not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
