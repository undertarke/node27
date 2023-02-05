-- CreateTable
CREATE TABLE `food` (
    `food_id` INTEGER NOT NULL AUTO_INCREMENT,
    `food_name` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,
    `price` INTEGER NULL,
    `desc` VARCHAR(255) NULL,
    `type_id` INTEGER NULL,

    INDEX `type_id`(`type_id`),
    PRIMARY KEY (`food_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_type` (
    `type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(255) NULL,

    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `like_res` (
    `user_id` INTEGER NOT NULL,
    `res_id` INTEGER NOT NULL,
    `date_like` DATETIME(0) NULL,

    INDEX `res_id`(`res_id`),
    PRIMARY KEY (`user_id`, `res_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `user_id` INTEGER NOT NULL,
    `food_id` INTEGER NOT NULL,
    `amount` INTEGER NULL,
    `code` VARCHAR(255) NULL,
    `arr_sub_id` VARCHAR(255) NULL,

    INDEX `food_id`(`food_id`),
    PRIMARY KEY (`user_id`, `food_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rate_res` (
    `user_id` INTEGER NOT NULL,
    `res_id` INTEGER NOT NULL,
    `amount` INTEGER NULL,
    `date_rate` DATETIME(0) NULL,

    INDEX `res_id`(`res_id`),
    PRIMARY KEY (`user_id`, `res_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `restaurant` (
    `res_id` INTEGER NOT NULL AUTO_INCREMENT,
    `res_name` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,
    `desc` VARCHAR(255) NULL,

    PRIMARY KEY (`res_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_food` (
    `sub_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_name` VARCHAR(255) NULL,
    `sub_price` INTEGER NULL,
    `food_id` INTEGER NULL,

    INDEX `food_id`(`food_id`),
    PRIMARY KEY (`sub_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `pass_word` VARCHAR(255) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `food_type`(`type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `like_res` ADD CONSTRAINT `like_res_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `like_res` ADD CONSTRAINT `like_res_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rate_res` ADD CONSTRAINT `rate_res_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rate_res` ADD CONSTRAINT `rate_res_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sub_food` ADD CONSTRAINT `sub_food_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
