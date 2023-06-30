// single instance of the Prisma Client
import { prisma } from '../../../server/db/client.js';
import { NextResponse } from 'next/server.js';


// remove in production
export async function GET(request) {
	return NextResponse.json({
		status: 200,
		body: "Testing customer route"
	});
}


// only serve POST requests
export async function POST(request) {
	// get the customer data from the request body
	const { name, email, phone, password, offers, agreement } = await request.json();

	try {
		// create a new customer in the database
		const post = await prisma.customer.create({
			data: {
				name,
				email,
				phone,
				password,
				offers,
				agreement
			}
		})

		// 
		console.log("Customer created successfully!");

		// return the customer data as JSON
		return NextResponse.json({
			status: 200,
			body: "Customer created successfully!"
		})

	} catch (err) {

		console.log("Error creating customer: ", err.meta.target);

		return NextResponse.json({
			status: 500,
			// return what is causing the error
			body: err.meta.target
		})

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

