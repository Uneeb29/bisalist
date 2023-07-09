// single instance of the Prisma Client
import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

// only able to update if he or she is logged in
// this will be a kind of protected Route

// only serve POST requests
export async function POST(request) {

    try {
        // get the updated customer data from the request body
        const body = await request.json();
        // create a new customer in the database
        const user = await prisma.customer.update({
            where: {
                email: body.email,
            },
            data: {
                name: body.name,
                phone: body.phone,
                password: await bcrypt.hash(body.password, 10),
                // not sure about offers, may or may not remove
                offers: body.offers,
            },
        });

        console.log("Update : ", user);
        return new Response(JSON.stringify("User Info Updated."), { status: 200 });
    } catch (err) {
        console.log("Error updating customer info: ", err);
        return new Response(JSON.stringify(err), {
            status: 500
        });
    }
}

// Example POST request body to test on Thunder Client

// {
// 	"name": "Test Account",
// 	"email": "test133@test.com",
// 	"phone": "03332720922",
// 	"password": "kanyeLeast",
// 	"offers": true,
// 	"agreement": true
// }
