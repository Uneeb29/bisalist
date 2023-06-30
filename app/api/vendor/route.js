import { prisma } from '../../../server/db/client.js';
import { NextResponse } from 'next/server.js';

// remove in production
export async function GET(request) {
    return NextResponse.json({
        status: 200,
        body: "Testing vendor route"
    });
}


export async function POST(request) {

    try {
        const { companyName, firstname, lastname, streetName, city, postAddress, telephoneNumber, service, description, startingCost, email, password, documentType } = await request.json();
        const post = await prisma.vendor.create({
            data: {
                companyName,
                firstname,
                lastname,
                streetName,
                city,
                postAddress,
                telephoneNumber,
                service,
                description,
                startingCost,
                email,
                password,
                documentType
            }
        })

        console.log("Vendor created successfully!");

        return NextResponse.json({
            status: 200,
            body: "Vendor created successfully!"
        })

    }
    catch (err) {
        console.log("Error creating vendor: ", err.meta.target);

        return NextResponse.json({
            status: 500,
            body: err
        })
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
//       "startingCost": "300",
//       "email": " gor123@test.com ",
//       "password": "KanyeLeast",
//       "documentType": "Ghana Card",      
// }