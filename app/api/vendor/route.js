import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";


// category will be a dropdown menu

export async function POST(request) {
  try {
    const body = await request.json();

    switch (body.action) {
      case "create":
        // Check if email already exists
        const emailExists = await prisma.vendor.findUnique({
          where: {
            email: body.email,
          },
        });
        if (emailExists) {
          return new Response(JSON.stringify("Email already exists"), {
            status: 400,
          });
        }
        // temporary fix for category if category does not exist return error
        const categoryExists = await prisma.category.findUnique({
          where: {
            name: body.service,
          },
        });

        if (!categoryExists) {
          return new Response(JSON.stringify("Category does not exist"), {
            status: 400,
          });
        }

        // create vendor
        const user = await prisma.vendor.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            streetName: body.streetName,
            city: body.city,
            postAddress: body.postAddress,
            telephoneNumber: body.telephoneNumber,
            description: body.description,
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
            fileType: body.documentType,
            file: body.document,
          },
        });

        // if image is provided add to vendor info
        if (body.avi) {
          const image = body.avi;

          await prisma.vendor.update({
            where: {
              id: user.id,
            },
            data: {
              avi: image,
            },
          });
        }

        // add service to the service model
        const service = await prisma.service.create({
          data: {
            title: body.service,
            startingCost: body.startingCost,
            companyName: body.companyName,
            location: `${body.streetName}, ${body.city}`,
            rating: 0,
            noOfComments: 0,

            vendor: {
              connect: {
                id: user.id,
              },
            },

            //category name is given so connect to category
            category: {
              connect: {
                name: body.service,
              },
            },
          },
        });

        // if cover is provided add to service info

        if (body.cover) {
          const cover = body.cover;

          await prisma.service.update({
            where: {
              id: service.id,
            },
            data: {
              cover: cover,
            },
          });
        }

        return new Response(JSON.stringify("Vendor Created"), {
          status: 201,
        });
        break;
    }

  } catch (err) {
    console.log("Error creating vendor: ", err);
    return new Response(JSON.stringify("Error creating vendor"), {
      status: 500,
    });
  }
}

// Example POST request body to test on Thunder Client
// {
//     "companyName": "Gorillaz Inc.",
//       "firstname": "Test",
//       "lastname": "Subject",
//       "streetName": "Gorillaz Street, 123",
//       "city": "New York",
//       "postAddress": "  12345 ",
//       "telephoneNumber": "03123456780",
//       "service": "Creating Music",
//       "description": "We create music for you. We are the best in the world.",
//       "startingCost": 300,
//       "email": " gor123@test.com ",
//       "password": "KanyeLeast",
//       "documentType": "Ghana Card",
// }


