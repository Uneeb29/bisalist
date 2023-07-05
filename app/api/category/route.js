import { prisma } from "../../../lib/prisma-client";

export async function POST(request) {
  try {
    const body = await request.json();

    // Check if category already exists
    const categoryExists = await prisma.category.findUnique({
      where: {
        name: body.category,
      },
    });

    if (categoryExists) {
      return new Response(JSON.stringify("Category already exists"), {
        status: 400,
      });
    }

    // do something based on the action
    switch (body.action) {
      case "add":
        // add category to the category model
        const category = await prisma.category.create({
          data: {
            name: body.category,
          },
        });
        return new Response(JSON.stringify("Category Added"), {
          status: 200,
        });
        break;

      case "image":
        // add image to the category model
        const image = body.image;
        await prisma.category.update({
          where: {
            name: body.category,
          },
          data: {
            image: image,
          },
        });
        return new Response(JSON.stringify("Image Added"), {
          status: 200,
        });
        break;

      default:
        return new Response(JSON.stringify("Invalid Action"), {
          status: 400,
        });
        break;
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Error adding Category"), {
      status: 500,
    });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action");
    if (action === "name") {
      const categories = await prisma.category.findMany({
        select: {
          name: true,
        },
      });

      return new Response(JSON.stringify(categories), {
        status: 200,
      });
    }

    if (action === "all") {
      // get all categories
      const categories = await prisma.category.findMany({
        select: {
          id: true,
          name: true,
          image: true,
        },
      });

      return new Response(JSON.stringify(categories), {
        status: 200,
      });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Error getting Categories"), {
      status: 500,
    });
  }
}

// // Example POST request body to test on Thunder Client
// {
//   "action": "add",
//   "category": "Catering"
// }
//
