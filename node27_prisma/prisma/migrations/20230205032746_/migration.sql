/*
  Warnings:

  - You are about to drop the `food` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `food_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `like_res` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rate_res` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `restaurant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sub_food` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `food` DROP FOREIGN KEY `food_ibfk_1`;

-- DropForeignKey
ALTER TABLE `like_res` DROP FOREIGN KEY `like_res_ibfk_1`;

-- DropForeignKey
ALTER TABLE `like_res` DROP FOREIGN KEY `like_res_ibfk_2`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_ibfk_1`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_ibfk_2`;

-- DropForeignKey
ALTER TABLE `rate_res` DROP FOREIGN KEY `rate_res_ibfk_1`;

-- DropForeignKey
ALTER TABLE `rate_res` DROP FOREIGN KEY `rate_res_ibfk_2`;

-- DropForeignKey
ALTER TABLE `sub_food` DROP FOREIGN KEY `sub_food_ibfk_1`;

-- DropTable
DROP TABLE `food`;

-- DropTable
DROP TABLE `food_type`;

-- DropTable
DROP TABLE `like_res`;

-- DropTable
DROP TABLE `order`;

-- DropTable
DROP TABLE `rate_res`;

-- DropTable
DROP TABLE `restaurant`;

-- DropTable
DROP TABLE `sub_food`;

-- DropTable
DROP TABLE `user`;
