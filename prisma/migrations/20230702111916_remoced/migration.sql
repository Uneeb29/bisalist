/*
  Warnings:

  - You are about to drop the column `vendorId` on the `Listing` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_vendorId_fkey";

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "vendorId";
