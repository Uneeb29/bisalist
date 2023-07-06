import { PrismaClient } from "@prisma/client";

// single instance of the Prisma Client
// will be used in all the API routes
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
