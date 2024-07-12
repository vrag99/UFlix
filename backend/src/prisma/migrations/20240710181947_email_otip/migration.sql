/*
  Warnings:

  - Added the required column `email` to the `OTP` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Description` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OTP" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "Description" TEXT NOT NULL,
ADD COLUMN     "Title" TEXT NOT NULL;
