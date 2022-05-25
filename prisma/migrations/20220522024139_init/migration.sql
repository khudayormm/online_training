/*
  Warnings:

  - Added the required column `logo` to the `Science` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Science" ADD COLUMN     "logo" VARCHAR(255) NOT NULL;
