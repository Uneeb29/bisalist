/*
  Warnings:

  - A unique constraint covering the columns `[telephoneNumber]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vendor_telephoneNumber_key" ON "Vendor"("telephoneNumber");
