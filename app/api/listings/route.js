import { prisma } from "../../../lib/prisma-client";

export async function POST(request) {
  // add a listing
  try {
    const listing = await request.json();
    const newListing = await prisma.listing.create({
      data: {
        title: listing.title,
        category: listing.category,
        backgroundImage: listing.backgroundImage,
        comments: listing.comments,
        rating: listing.rating,
        location: listing.location,
      },
    });

    return new Response(JSON.stringify(newListing), { status: 200 });
  } catch (err) {
    return new Response(err, { status: 500 });
  }
}

export async function GET(request) {
  // get all listings based on the category provided in the get request
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    console.log(category);
    let listings;
    if (category === "All") {
      listings = await prisma.listing.findMany();

      return new Response(JSON.stringify(listings), { status: 200 });
    } else {
      listings = await prisma.listing.findMany({
        where: {
          category: category,
        },
      });
    }

    console.log(listings);
    return new Response(JSON.stringify(listings), { status: 200 });
  } catch (err) {
    return new Response(err, { status: 500 });
  }
}
