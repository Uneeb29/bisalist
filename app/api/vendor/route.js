import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";
const cloudinary = require("cloudinary").v2;

// cloudinary.configurations (given as env variables)
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export async function POST(request) {
  try {
    const body = await request.json();

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
    } else {
      // remove spaces from the base64 string but it should still be valid base64
      // const image = body.avi.replace(/\s/g, "");
      const image = body.avi;

      // const cloudinaryResponse = await cloudinary.uploader.upload(image, {
      //   upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
      // });

      // const cloudinaryPayload = await cloudinaryResponse.json();

      // create vendor
      const user = await prisma.vendor.create({
        data: {
          companyName: body.companyName,
          firstname: body.firstname,
          lastname: body.lastname,
          streetName: body.streetName,
          city: body.city,
          postAddress: body.postAddress,
          telephoneNumber: body.telephoneNumber,
          service: body.service,
          description: body.description,
          startingCost: body.startingCost,
          email: body.email,
          password: await bcrypt.hash(body.password, 10),
          documentType: body.documentType,
          avi: image,
        },
      });

      const { password, avi, ...userLite } = user;

      return new Response(JSON.stringify(userLite), {
        status: 201,
      });
    }
  } catch (err) {
    console.log("Error creating vendor: ", err);
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
