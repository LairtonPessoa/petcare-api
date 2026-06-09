/*
  Warnings:

  - The values [ANCIOSO] on the enum `Mood` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `amout` on the `foods` table. All the data in the column will be lost.
  - Added the required column `amount` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Mood_new" AS ENUM ('NERVOSO', 'FELIZ', 'CANSADO', 'ANSIOSO', 'CARINHOSO', 'TRISTE');
ALTER TABLE "moods" ALTER COLUMN "mood" TYPE "Mood_new" USING ("mood"::text::"Mood_new");
ALTER TYPE "Mood" RENAME TO "Mood_old";
ALTER TYPE "Mood_new" RENAME TO "Mood";
DROP TYPE "Mood_old";
COMMIT;

-- AlterTable
ALTER TABLE "foods" DROP COLUMN "amout",
ADD COLUMN     "amount" INTEGER NOT NULL;
