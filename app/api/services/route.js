import { prisma } from "../../../lib/prisma-client";

// export const dynamic = "force-dynamic";

// services are added by vendors when they signup

// export async function GET(request) {
//   // get all services based on the category provided in the get request
//   try {
//     const { searchParams } = new URL(request.url);
//     const category = searchParams.get("category");
//     // console.log(category);
//     let services;
//     if (category === "All") {
//       // get all services and also the images in the category associated with the service
//       services = await prisma.service.findMany({
//         include: {
//           category: true,
//         },
//       });
//     } else {
//       // get all services in the category provided in the get request and also the images in the category associated with the service
//       services = await prisma.service.findMany({
//         where: {
//           category: {
//             name: category,
//           },
//         },
//         include: {
//           category: true,
//         },
//       });
//     }

//     // console.log(services);
//     return new Response(JSON.stringify(services), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new Response(JSON.stringify("Error"), { status: 500 });
//   }
// }

export async function POST(request) {
  const body = await request.json();

  try {
    switch (body.action) {
      case "fetchAll":
        // get all services and also the images in the category associated with the service
        const services = await prisma.service.findMany({
          select: {
            id: true,
            title: true,
            startingCost: true,
            companyName: true,
            location: true,
            cover: true,
            rating: true,
            noOfComments: true,
            category: {
              select: {
                name: true,
              },
            },
          },

          include: {
            category: true,
          },
        });

        return new Response(JSON.stringify(services), { status: 200 });
        break;

      case "fetchSingleCategory":
        // get all services in the category provided in the get request and also the images in the category associated with the service
        const singleCategory = await prisma.service.findMany({
          where: {
            category: {
              name: body.category,
            },
          },
          select: {
            id: true,
            title: true,
            startingCost: true,
            companyName: true,
            location: true,
            cover: true,
            rating: true,
            noOfComments: true,
            category: {
              select: {
                name: true,
              },
            },
          },
          include: {
            category: true,
          },
        });

        return new Response(JSON.stringify(singleCategory), { status: 200 });
        break;
    }
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify("Error"), { status: 500 });
  }
}
