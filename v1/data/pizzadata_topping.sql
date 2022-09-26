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
-- Table structure for table `topping`
--

DROP TABLE IF EXISTS `topping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topping` (
  `topping_id` int NOT NULL AUTO_INCREMENT,
  `topping` varchar(45) NOT NULL,
  `topping_type` varchar(45) NOT NULL,
  `measurment_type` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`topping_id`),
  UNIQUE KEY `topping_id_UNIQUE` (`topping_id`),
  UNIQUE KEY `topping_UNIQUE` (`topping`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topping`
--

LOCK TABLES `topping` WRITE;
/*!40000 ALTER TABLE `topping` DISABLE KEYS */;
INSERT INTO `topping` VALUES (1,'Pizza Sauce','sauce','OZ',0,'2021-02-26 17:12:53'),(2,'Creamy Garlic','sauce','OZ',0,'2021-02-26 17:12:53'),(3,'Olive Oil','sauce','OZ',0,'2021-02-26 17:12:53'),(4,'Pink Sauce','sauce','OZ',0,'2021-02-26 17:12:53'),(5,'Chili Sauce','sauce','OZ',0,'2021-02-26 17:12:53'),(6,'BBQ Sauce','sauce','OZ',0,'2021-02-26 17:12:53'),(7,'Bean Salsa Mi','sauce','OZ',0,'2021-02-26 17:12:53'),(8,'Alfredo Sauce','sauce','OZ',0,'2021-02-26 17:12:53'),(9,'Burger Sauce','sauce','OZ',0,'2021-02-26 17:12:53'),(10,'Garlic Red','sauce','OZ',0,'2021-02-26 17:12:53'),(11,'Pesto','sauce','OZ',0,'2021-02-26 17:12:53'),(12,'Mozzarella','cheese','OZ',1.5,'2021-04-15 02:09:58'),(13,'Topping Cheese','cheese','OZ',1.5,'2021-04-15 02:09:58'),(14,'Parmesan','cheese','OZ',1.5,'2021-04-15 02:09:58'),(15,'Feta','cheese','CUPS',1.5,'2021-04-15 02:09:58'),(16,'Chedder','cheese','OZ',1.5,'2021-04-15 02:09:58'),(17,'H/C Blend','seasoning','',0,'2021-02-25 16:47:42'),(18,'Zesty Herb','seasoning','',0,'2021-02-25 16:47:42'),(19,'Crushed Pepper','seasoning','',0,'2021-02-25 16:47:42'),(20,'Taco Spice','seasoning','',0,'2021-02-25 16:47:42'),(21,'Pepperoni','meat','SLICES',1.5,'2021-02-26 17:12:53'),(22,'Canadian Bacon','meat','SLICES',1.5,'2021-02-26 17:12:53'),(23,'Salami','meat','SLICES',1.5,'2021-02-26 17:12:53'),(24,'Sausage','meat','CUPS',1.5,'2021-02-26 17:12:53'),(25,'Ground Beef','meat','CUPS',1.5,'2021-02-26 17:12:53'),(26,'Crispy Bacon','meat','CUPS',1.5,'2021-02-26 17:12:53'),(27,'Grilled Chicken','meat','OZ',1.5,'2021-02-26 17:12:53'),(28,'Big Pepperoni','meat','SLICES',1.5,'2021-02-26 17:12:53'),(29,'Mini Cup Pepperoni','meat','CUPS',1.5,'2021-03-04 17:51:34'),(30,'Ground Sausage','meat','CUPS',1.5,'2021-02-26 17:12:53'),(31,'Pep Bcn Mix','meat','CUPS',1.5,'2021-02-26 17:12:53'),(32,'Black Olives','produce','CUPS',1.5,'2021-02-26 17:12:53'),(33,'Garlic','produce','TABLESPOONS',1.5,'2021-02-26 17:12:53'),(34,'Green Onions','produce','CUPS',1.5,'2021-02-26 17:12:53'),(35,'Dice Green Pep','produce','CUPS',1.5,'2021-02-26 17:12:53'),(36,'Mixed Onions','produce','CUPS',1.5,'2021-02-26 17:12:53'),(37,'Mushrooms','produce','CUPS',1.5,'2021-02-26 17:12:53'),(38,'Pineapple','produce','CUPS',1.5,'2021-02-26 17:12:53'),(39,'Spinach','produce','OZ',1.5,'2021-02-26 17:12:53'),(40,'Tomatoes','produce','CUPS',1.5,'2021-02-26 17:12:53'),(41,'Zucchini','produce','SLICES',1.5,'2021-02-26 17:12:53'),(42,'Banana Peppers','produce','CUPS',1.5,'2021-02-26 17:12:53'),(43,'Jalapenos','produce','CUPS',1.5,'2021-02-26 17:12:53'),(44,'Artichoke','produce','CUPS',1.5,'2021-02-26 17:12:53'),(45,'Sundried Tomatoes','produce','CUPS',1.5,'2021-02-26 17:12:53'),(46,'Pickles','produce','SLICES',1.5,'2021-02-26 17:12:53'),(47,'Fried Onions','produce','CUPS',1.5,'2021-03-27 23:10:39');
/*!40000 ALTER TABLE `topping` ENABLE KEYS */;
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
