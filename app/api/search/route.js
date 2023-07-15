import { prisma } from "../../../lib/prisma-client";

export async function POST(request) {
  try {
    const body = await request.json();
console.log("body : ",body);

    const result = await prisma.service.findMany({
      select: {
        id: true,
        title: true,
        companyName: true,
        noOfComments: true,
        rating: true,
        location: true,
        cover: true,
        startingCost: true,
        vendor: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            streetName: true,
            city: true,
            postAddress: true,
            telephoneNumber: true,
            description: true,
            email: true,
            password: false,
            avi: false,
            fileType: false,
            file: false,
            blocked: true,
          },
        },
      },

      where: {
        OR: [
          {
            title: {
              contains: body.search,
            },
          },
          {
            companyName: {
              contains: body.search,
            },
          },
          {
            vendor: {
              OR: [
                {
                  firstname: {
                    contains: body.search,
                  },
                },
                {
                  lastname: {
                    contains: body.search,
                  },
                },
              ],
            },
          },
        ],
      },
    });
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}

// // model for the vendor
// model Vendor {
//     id              Int       @id @default(autoincrement())
//     firstname       String
//     lastname        String
//     streetName      String
//     city            String
//     postAddress     String
//     telephoneNumber String    @unique
//     description     String
//     email           String    @unique
//     password        String
//     avi             String? // these images are for the user profile
//     fileType        String
//     file           String?
//     blocked         Boolean?  @default(false)
//     // foreign key (creates a relationship between the vendor and the listing)
//     services        Service[]
//   }

//   // model for the services offered by the vendor
//   model Service {
//     id           Int     @id @default(autoincrement())
//     title        String? // service title
//     companyName  String? // company name
//     noOfComments Int?
//     rating       Float?
//     location     String // vendor street + city
//     cover        String?
//     startingCost Int?
//     vendorId     Int
//     categoryId   Int

//     // foreign key (creates a relationship between the listing and the vendor)
//     vendor   Vendor   @relation(fields: [vendorId], references: [id], onDelete: Cascade)
//     // foreign key (creates a relationship between the listing and the category)
//     category Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)
//   }
