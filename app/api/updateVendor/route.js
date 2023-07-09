import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";


export async function POST(request) {
    try {
        const body = await request.json();

        /////////////////////////////////////////////////////////////////////////////////
        // Check if email already exists (will be removed in production)
        const emailExists = await prisma.vendor.findUnique({
            where: {
                email: body.email,
            },
        });
        // if email doesnt exists return error
        if (!emailExists) {
            return new Response(JSON.stringify("Email does not exist"), {
                status: 400,
            });
        }
        /////////////////////////////////////////////////////////////////////////////////

        // update vendor info
        const user = await prisma.vendor.update({
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
                password: await bcrypt.hash(body.password, 10),
                fileType: body.documentType,
            },
        });

        // if image is provided add to vendor info (stays same)
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

        // update service the service model
        const service = await prisma.service.update({

            where: {
                vendorId: user.id,
            },


            data: {
                title: body.service,
                startingCost: body.startingCost,
                companyName: body.companyName,
                location: `${body.streetName}, ${body.city}`,

                // vendor: {
                //   connect: {
                //     id: user.id,
                //   },
                // },

                // update category
                category: {
                    connect: {
                        name: body.service,
                    },
                }

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
    }
    // if any error occurs return error
    catch (err) {
        console.log("Error updating vendor: ", err);
        return new Response(JSON.stringify("Error updating vendor"), {
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

