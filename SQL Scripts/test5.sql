/*
 Navicat Premium Data Transfer

 Source Server         : MYSQL-MAC
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : test5

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 11/02/2020 14:44:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for communication
-- ----------------------------
DROP TABLE IF EXISTS `communication`;
CREATE TABLE `communication` (
  `address_id` int(11) NOT NULL,
  `addr_line1` varchar(255) DEFAULT NULL,
  `addr_line2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `hno` varchar(255) DEFAULT NULL,
  `land_mark` varchar(255) DEFAULT NULL,
  `mobile_number` bigint(20) NOT NULL,
  `pincode` int(11) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of communication
-- ----------------------------
BEGIN;
INSERT INTO `communication` VALUES (1, 'Line1', 'Line2', 'Hyderabad', '10-10', 'MG road', 1212121212, 409765, 'TN');
INSERT INTO `communication` VALUES (2, 'Addr1', 'Addr2', 'Kolkata', '76-32', 'New Town', 8765437654, 876543, 'WB');
INSERT INTO `communication` VALUES (3, 'Addr3', 'Addr3', 'Pune', '87-32/2', 'SP road', 8765453245, 876545, 'MH');
COMMIT;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `user_id` varchar(255) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `mobile_number` mediumtext,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of customer
-- ----------------------------
BEGIN;
INSERT INTO `customer` VALUES ('user1', 'Praveen', 'user1@abc.com', '7093882336');
INSERT INTO `customer` VALUES ('user2', 'James', 'user2@abc.com', '6532876534');
COMMIT;

-- ----------------------------
-- Table structure for delivery_address
-- ----------------------------
DROP TABLE IF EXISTS `delivery_address`;
CREATE TABLE `delivery_address` (
  `user_id` varchar(255) NOT NULL,
  `address_id` int(11) NOT NULL,
  UNIQUE KEY `UK_7hpdm1y6rngkgi0ht2k6yail` (`address_id`),
  KEY `delivery_address_ibfk_1` (`user_id`),
  CONSTRAINT `delivery_address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `delivery_address_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `communication` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of delivery_address
-- ----------------------------
BEGIN;
INSERT INTO `delivery_address` VALUES ('user1', 1);
INSERT INTO `delivery_address` VALUES ('user1', 2);
INSERT INTO `delivery_address` VALUES ('user2', 3);
COMMIT;

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
BEGIN;
INSERT INTO `hibernate_sequence` VALUES (1);
COMMIT;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `amount` double NOT NULL,
  `date` datetime DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO `orders` VALUES (1, 1500, '2020-02-04 13:12:37', 'user1');
INSERT INTO `orders` VALUES (2, 2500, '2020-02-10 13:13:19', 'user1');
INSERT INTO `orders` VALUES (3, 10000, '2020-02-02 13:13:37', 'user2');
COMMIT;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `stars` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKiyof1sindb9qiqr9o8npj8klt` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for user_details
-- ----------------------------
DROP TABLE IF EXISTS `user_details`;
CREATE TABLE `user_details` (
  `user_id` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_details
-- ----------------------------
BEGIN;
INSERT INTO `user_details` VALUES ('admin', 'admin', 'admin');
INSERT INTO `user_details` VALUES ('user1', 'user1', 'user');
INSERT INTO `user_details` VALUES ('user2', 'user2', 'user');
INSERT INTO `user_details` VALUES ('user3', 'user3', 'user');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
