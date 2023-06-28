/*
  Warnings:

  - You are about to alter the column `startingCost` on the `Vendor` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

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
    "startingCost" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "documentType" TEXT NOT NULL
);
INSERT INTO "new_Vendor" ("city", "companyName", "description", "documentType", "email", "firstname", "id", "lastname", "password", "postAddress", "service", "startingCost", "streetName", "telephoneNumber") SELECT "city", "companyName", "description", "documentType", "email", "firstname", "id", "lastname", "password", "postAddress", "service", "startingCost", "streetName", "telephoneNumber" FROM "Vendor";
DROP TABLE "Vendor";
ALTER TABLE "new_Vendor" RENAME TO "Vendor";
CREATE UNIQUE INDEX "Vendor_telephoneNumber_key" ON "Vendor"("telephoneNumber");
CREATE UNIQUE INDEX "Vendor_email_key" ON "Vendor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
