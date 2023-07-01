// single instance of the Prisma Client
import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

// only serve POST requests
export async function POST(request) {
  // get the customer data from the request body
  const body = await request.json();

  try {
    // create a new customer in the database
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });

    const { password, ...userWithoutPassword } = user;

    return new Response(JSON.stringify(userWithoutPassword));
  } catch (err) {
    console.log("Error creating customer: ", err);

    return new Response(JSON.stringify(err));
  }
}

// Example POST request body to test on Thunder Client

// {
// 	"name": "Test Account",
// 	"email": "test133@test.com",
// 	"password": "12345678",

// }
