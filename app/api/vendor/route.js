import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();

    // Check if email already exists
    // const emailExists = await prisma.vendor.findOne({
    //   where: {
    //     email: body.email,
    //   },
    // });

    // if (emailExists) {
    //   return new Response(JSON.stringify("Email already exists"), {
    //     status: 400,
    //   });
    // } else {
    // call the api endpoint to upload image to cloudinary
    // const cloudinaryResponse = await import("../upload/route");
    // const cloudinaryPayload = await (
    //   await cloudinaryResponse.POST(body.avi)
    // ).json();

    const cloudinaryResponse = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: JSON.stringify(body.avi),
    });
    const cloudinaryPayload = await cloudinaryResponse.json();

    console.log("cloudinaryPayload: ", cloudinaryPayload);
    // }
  } catch (err) {
    console.log("Error creating vendor: ", err);
  }
}

//     const user = await prisma.vendor.create({
//       data: {
//         companyName: body.companyName,
//         firstname: body.firstname,
//         lastname: body.lastname,
//         streetName: body.streetName,
//         city: body.city,
//         postAddress: body.postAddress,
//         telephoneNumber: body.telephoneNumber,
//         service: body.service,
//         description: body.description,
//         startingCost: body.startingCost,
//         email: body.email,
//         password: await bcrypt.hash(body.password, 10),
//         documentType: body.documentType,
//       },
//     });

//     const { password, ...userWithoutPassword } = user;

//     return new Response(JSON.stringify(userWithoutPassword));
//   } catch (err) {
//     console.log("Error creating vendor: ", err);
//     return new Response(JSON.stringify(null));
//   }

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
