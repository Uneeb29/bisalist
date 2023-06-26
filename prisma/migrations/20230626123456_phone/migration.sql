-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "offers" BOOLEAN NOT NULL DEFAULT false,
    "agreement" BOOLEAN NOT NULL
);
INSERT INTO "new_customer" ("agreement", "email", "id", "name", "offers", "password", "phone") SELECT "agreement", "email", "id", "name", "offers", "password", "phone" FROM "customer";
DROP TABLE "customer";
ALTER TABLE "new_customer" RENAME TO "customer";
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");
CREATE UNIQUE INDEX "customer_phone_key" ON "customer"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
