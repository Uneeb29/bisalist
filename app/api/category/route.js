import { prisma } from "../../../lib/prisma-client";

export async function POST(request) {
  try {
    const body = await request.json();

    // do something based on the action
    switch (body.action) {
      case "add":
        // Check if category already exists (if category is not null)
        const categoryExists = await prisma.category.findUnique({
          where: {
            ...(body.category && { name: body.category }),
          },
        });
        // if category already exists, return error
        if (categoryExists) {
          return new Response(JSON.stringify("Category already exists"), {
            status: 400,
          });
        }

        // else add category to the category model
        await prisma.category.create({
          data: {
            name: body.category,
            ...(body.image && { image: body.image }),
            ...(body.description && { description: body.description }),
          },
        });
        return new Response(JSON.stringify("Category Added"), {
          status: 200,
        });
        break;

      case "update":
        // update category
        const categoryExist = await prisma.category.findUnique({
          where: {
            id: body.id,
          },
        });

        if (!categoryExist) {
          return new Response(JSON.stringify("Category does not exist"), {
            status: 400,
          });
        }

        await prisma.category.update({
          where: {
            id: body.id,
          },
          data: {
            ...(body.category && { name: body.category }),
            ...(body.image && { image: body.image }),
            ...(body.description && { description: body.description }),
          },
        });

        return new Response(JSON.stringify("Category Updated"), {
          status: 200,
        });
        break;

      case "delete":
        // delete category
        if (!categoryExists) {
          return new Response(JSON.stringify("Category does not exist"), {
            status: 400,
          });
        }

        await prisma.category.delete({
          where: {
            name: body.category,
          },
        });

        return new Response(JSON.stringify("Category Deleted"), {
          status: 200,
        });
        break;

      case "fetchNames":
        // get all category names
        const categories = await prisma.category.findMany({
          select: {
            name: true,
          },
        });

        return new Response(JSON.stringify(categories), {
          status: 200,
        });
        break;

      case "fetchAll":
        // get all categories
        console.log("fetch all");

        const allCategories = await prisma.category.findMany({
          select: {
            id: true,
            name: true,
            image: true,
            description: true,
          },
        });

        return new Response(JSON.stringify(allCategories), {
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
    return new Response(JSON.stringify("Error Category"), {
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
