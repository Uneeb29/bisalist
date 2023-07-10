// single instance of the Prisma Client
import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

// only serve POST requests
export async function POST(request) {

  try {
    // get the customer data from the request body
    const body = await request.json();

    const action = body.action;

    switch (action) {
      case "create":
        // check if email already exits in the customer table
        const emailExists = await prisma.customer.findUnique({
          where: {
            email: body.email,
          },
        });

        // if email exists, return an error
        if (emailExists) {
          return new Response(JSON.stringify("Email already exists"), {
            status: 400,
          });
        }

        // create a new customer in the database
        const user = await prisma.customer.create({
          data: {
            name: body.name,
            email: body.email,
            phone: body.phone,
            password: await bcrypt.hash(body.password, 10),
            offers: body.offers,
            agreement: body.agreement,
          },
        });

        // const { password, ...userWithoutPassword } = user;

        return new Response(JSON.stringify("Customer Created"), {
          status: 200,
        });
        break;

      case "fetchSingle":
        // fetch single customer from the database
        const customer = await prisma.customer.findUnique({
          where: {
            email: body.email,
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          }
        });


        return new Response(JSON.stringify(customer), {
          status: 200,
        });
        break;

      case "fetchAll":
        // fetch all customers from the database without their passwords and pictures
        const customers = await prisma.customer.findMany({
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            offers: true,
            blocked: true,
          },
        });

        return new Response(JSON.stringify(customers), {
          status: 200,
        });
        break;

      case "update":
        // update customer in the database
        const updatedCustomer = await prisma.customer.update({
          where: {
            email: body.email,
          },
          data: {
            name: body.name,
            phone: body.phone,
            ...(body.password && {
              password: await bcrypt.hash(body.password, 10),
            }),

          }
        });
    }



  } catch (err) {
    console.log("Error: ", err);
    return new Response(JSON.stringify("Error"), {
      status: 500,
    }
    );
  }
}

// Example POST request body to test on Thunder Client

// {
// 	"name": "Test Account",
// 	"email": "test133@test.com",
// 	"phone": "03332720922",
// 	"password": "kanyeLeast",
// 	"offers": true,
// 	"agreement": true,
//  "action": "create"
// }
