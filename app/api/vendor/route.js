import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

// category will be a dropdown menu

export async function POST(request) {
  try {
    const body = await request.json();

    switch (body.action) {
      case "create":
        // check if email already exits in the customer table
        const emailExistsCustomer = await prisma.customer.findUnique({
          where: {
            email: body.email,
          },
        });

        const emailExistsVendor = await prisma.vendor.findUnique({
          where: {
            email: body.email,
          },
        });

        // if email exists, return an error
        if (emailExistsCustomer || emailExistsVendor) {
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

            // optional
            ...(body.avi && { avi: body.avi }),
          },
        });

        // add service to the service model
        const service = await prisma.service.create({
          data: {
            title: body.service,
            startingCost: body.startingCost,
            companyName: body.companyName,
            location: `${body.streetName}, ${body.city}`,

            // optional
            ...(body.cover && { cover: body.cover }),

            // default values
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
        // if (body.cover) {
        //   const cover = body.cover;

        //   await prisma.service.update({
        //     where: {
        //       id: service.id,
        //     },
        //     data: {
        //       cover: cover,
        //     },
        //   });
        // }

        return new Response(JSON.stringify("Vendor Created"), {
          status: 201,
        });
        break;

      case "update":
        // update vendor
        const vendor = await prisma.vendor.update({
          where: {
            email: body.email,
          },
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            streetName: body.streetName,
            city: body.city,
            postAddress: body.postAddress,
            telephoneNumber: body.telephoneNumber,
            description: body.description,
            // update password, document type and file only if they are provided
            ...(body.password && {
              password: await bcrypt.hash(body.password, 10),
            }),
            ...(body.documentType && { fileType: body.documentType }),
            ...(body.document && { file: body.document }),
            ...(body.avi && { avi: body.avi }),
          },
        });

        const userServiceID = await prisma.vendor.findUnique({
          where: {
            email: body.email,
          },
          select: {
            services: {
              select: {
                id: true,
              },
            },
          },
        });

        // update service
        const serviceUpdate = await prisma.service.update({
          where: {
            id: userServiceID.services[0].id,
          },

          data: {
            title: body.service,
            startingCost: body.startingCost,
            companyName: body.companyName,
            location: `${body.streetName}, ${body.city}`,
            ...(body.cover && { cover: body.cover }),
            category: {
              connect: {
                name: body.service,
              },
            },
          },
        });

        return new Response(JSON.stringify("Vendor Updated"), {
          status: 200,
        });
        break;

      case "fetchSingle":
        const vendorInfo = await prisma.vendor.findUnique({
          where: {
            email: body.email,
          },
          select: {
            id: true,
            firstname: true,
            lastname: true,
            streetName: true,
            city: true,
            postAddress: true,
            telephoneNumber: true,
            description: true,
            email: true,
            password: false,
            fileType: false,
            file: false,
            avi: true,
            services: {
              select: {
                id: true,
                title: true,
                startingCost: true,
                companyName: true,
                location: false,
                cover: true,
                rating: false,
                noOfComments: false,
                category: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        });
        return new Response(JSON.stringify(vendorInfo), {
          status: 200,
        });
        break;

      case "block":
        const blockVendor = await prisma.vendor.update({
          where: {
            id: body.id,
          },

          data: {
            blocked: true,
          },
        });
        return new Response(JSON.stringify("Vendor Blocked"), {
          status: 200,
        });
        break;
    }
  } catch (err) {
    console.log("Error creating vendor: ", err);
    return new Response(JSON.stringify("Error in vendor action"), {
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
