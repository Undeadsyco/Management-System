-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: pizzadata
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pizza`
--

DROP TABLE IF EXISTS `pizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pizza` (
  `pizza_id` int NOT NULL AUTO_INCREMENT,
  `section_id` int NOT NULL,
  `pizza_name` varchar(45) NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pizza_id`),
  KEY `section_id_idx` (`section_id`),
  CONSTRAINT `section_id` FOREIGN KEY (`section_id`) REFERENCES `section` (`section_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pizza`
--

LOCK TABLES `pizza` WRITE;
/*!40000 ALTER TABLE `pizza` DISABLE KEYS */;
INSERT INTO `pizza` VALUES (1,1,'CYO','2021-03-06 19:31:04'),(2,1,'Cheese','2021-03-06 19:31:04'),(3,1,'All Meat','2021-03-06 19:31:04'),(4,1,'Chicken Garlic','2021-03-06 19:31:04'),(5,1,'Cowboy','2021-03-06 19:31:04'),(6,1,'Garden Veggie','2021-03-06 19:31:04'),(7,1,'Hawaiian','2021-03-06 19:31:04'),(8,1,'Murphy\'s Combo','2021-03-06 19:31:04'),(9,1,'Pepperoni','2021-03-06 19:31:04'),(10,1,'Papa\'s Favorite','2021-03-06 19:31:04'),(11,2,'BBQ Chicken','2021-03-06 19:31:04'),(12,2,'Chicken Bcn Ranch','2021-03-06 19:31:04'),(13,2,'Classic Italian','2021-03-06 19:31:04'),(14,2,'Chkn Taco Grande','2021-03-06 19:31:04'),(15,2,'Perfect','2021-03-06 19:31:04'),(16,2,'Rancher','2021-03-06 19:31:04'),(17,2,'Taco Grande','2021-03-06 19:31:04'),(18,2,'Chicken Alfredo','2021-03-06 19:31:04'),(19,3,'BcnBcnBcn','2021-03-06 19:31:04'),(20,3,'Bacon Chz','2021-03-06 19:31:04'),(21,3,'Cheese Burger','2021-03-06 19:31:04'),(22,3,'Buffalo Chicken','2021-03-06 19:31:04'),(23,3,'Chicken Pesto','2021-03-06 19:31:04'),(24,3,'Tuscan Chicken','2021-03-06 19:31:04'),(25,3,'Triple Pepp','2021-03-06 19:31:04'),(26,3,'Hog Heaven','2021-03-06 19:31:04'),(27,4,'Gmt Chk Bacon Art','2021-03-06 19:31:04'),(28,4,'Gmt Herb Chk Medt','2021-03-06 19:31:04'),(29,4,'Gmt Thai Chicken','2021-03-06 19:31:04'),(30,4,'Gmt Vegetarian','2021-03-06 19:31:04'),(31,4,'Gmt Veggie Medt','2021-03-06 19:31:04'),(32,4,'Gmt Greek Pepp','2021-03-23 04:26:10'),(33,4,'Zesty Pepp','2021-03-06 19:31:04'),(34,4,'Rustic Veggie','2021-03-06 19:31:04'),(35,4,'BLT','2021-03-06 19:31:04'),(36,4,'Smokin\' Aloha','2021-03-06 19:31:04'),(37,4,'Combo Mag','2021-03-06 19:31:04'),(38,5,'CYO Stf L','2021-03-06 19:31:04'),(39,5,'5 Meat Stf L','2021-03-06 19:31:04'),(40,5,'Big Murthy\'s Stf L','2021-03-06 19:31:04'),(41,5,'Chicago Stf L','2021-03-06 19:31:04'),(42,5,'Chk Bacon Stf L','2021-03-06 19:31:04'),(43,5,'CYO Stf F','2021-03-06 19:31:04'),(44,5,'5 Meat Stf F','2021-03-06 19:31:04'),(45,5,'Big Murphy\'s Stf F','2021-03-06 19:31:04'),(46,5,'Chicago Stf F','2021-03-06 19:31:04'),(47,5,'Chk Bacon Stf F','2021-03-06 19:31:04'),(48,6,'3-Cheese XL','2021-03-06 19:31:04'),(49,6,'Giant Pepp XL','2021-03-06 19:31:04'),(50,6,'New York XL','2021-03-06 19:31:04');
/*!40000 ALTER TABLE `pizza` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-14 16:21:50
