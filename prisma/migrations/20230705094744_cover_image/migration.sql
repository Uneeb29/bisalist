/*
  Warnings:

  - You are about to drop the column `cover` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "cover" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "startingCost" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "cover";
