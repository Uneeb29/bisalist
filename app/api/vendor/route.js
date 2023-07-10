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
            // file is required so check if it is provided
            ...(body.document && { file: body.document }),
            ...(body.avi && { avi: body.avi }),
          },
        });

        // if image is provided add to vendor info
        // if (body.avi) {
        //   const image = body.avi;

        //   await prisma.vendor.update({
        //     where: {
        //       id: user.id,
        //     },
        //     data: {
        //       avi: image,
        //     },
        //   });
        // }

        // add service to the service model
        const service = await prisma.service.create({
          data: {
            title: body.service,
            startingCost: body.startingCost,
            companyName: body.companyName,
            location: `${body.streetName}, ${body.city}`,
            ...(body.cover && { cover: body.cover }),
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

        // update service
        const serviceUpdate = await prisma.service.update({
          where: {
            vendorId: vendor.id,
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
          // include services from the service model and category from the category model which is connected to the service model
          include: {
            services: {
              include: {
                category: true,
              },
            },
          },
        });
        return new Response(JSON.stringify(vendorInfo), {
          status: 200,
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
