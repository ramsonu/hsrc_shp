/*
  Warnings:

  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropIndex
DROP INDEX "User_roleId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId";
