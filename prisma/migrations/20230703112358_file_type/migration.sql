/*
  Warnings:

  - Added the required column `fileType` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "fileType" TEXT NOT NULL;
