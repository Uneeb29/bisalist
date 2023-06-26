import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(request) {
	return new Response('Testing')
}

export async function POST(request) {
	const { name, email, phone, password, offers, agreement } = await request.json();

	try {
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
		console.log(post);
		return new Response(post)

	} catch (err) {
		console.log(err);
		return new Response(err)

	}

}
