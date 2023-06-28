/*
  Warnings:

  - You are about to drop the column `agreement` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `offers` on the `Vendor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vendor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "streetName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postAddress" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startingCost" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "documentType" TEXT NOT NULL
);
INSERT INTO "new_Vendor" ("city", "companyName", "description", "documentType", "email", "firstname", "id", "lastname", "password", "postAddress", "service", "startingCost", "streetName", "telephoneNumber") SELECT "city", "companyName", "description", "documentType", "email", "firstname", "id", "lastname", "password", "postAddress", "service", "startingCost", "streetName", "telephoneNumber" FROM "Vendor";
DROP TABLE "Vendor";
ALTER TABLE "new_Vendor" RENAME TO "Vendor";
CREATE UNIQUE INDEX "Vendor_email_key" ON "Vendor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
