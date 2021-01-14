/*
 Navicat Premium Data Transfer

 Source Server         : guojx
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : ssm

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 11/12/2020 19:33:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `money` double NULL DEFAULT NULL,
  `cardID` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `cardID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES (26, '郭晋贤', 280, '201710096025', '123');
INSERT INTO `account` VALUES (27, '李锦权', 700, '201710068080', NULL);
INSERT INTO `account` VALUES (28, '蓝镜丰', 500, '201710096089', NULL);
INSERT INTO `account` VALUES (29, '213', 470, '213', NULL);
INSERT INTO `account` VALUES (30, '李锦权', 520, '201710096183', NULL);
INSERT INTO `account` VALUES (31, '蓝镜丰', 500, '440111', NULL);
INSERT INTO `account` VALUES (32, '213', 470, '213', '213');
INSERT INTO `account` VALUES (33, '1232131', 213123213, '2131232', NULL);
INSERT INTO `account` VALUES (34, '1232131', 213123213, '2131232', NULL);
INSERT INTO `account` VALUES (35, '213213', 21312312, '123123', NULL);
INSERT INTO `account` VALUES (36, '21313', 2132131, '213123', NULL);

SET FOREIGN_KEY_CHECKS = 1;
