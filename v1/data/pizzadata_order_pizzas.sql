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
-- Table structure for table `order_pizzas`
--

DROP TABLE IF EXISTS `order_pizzas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_pizzas` (
  `order_id` int NOT NULL,
  `pizza_id` int NOT NULL,
  `size` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`,`pizza_id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_pizzas`
--

LOCK TABLES `order_pizzas` WRITE;
/*!40000 ALTER TABLE `order_pizzas` DISABLE KEYS */;
INSERT INTO `order_pizzas` VALUES (1,8,'largeThin',15.99,'2021-12-16 02:26:57'),(2,8,'family',18.99,'2021-12-16 02:27:16'),(2,19,'family',18.99,'2021-12-16 02:27:16'),(3,2,'medGF',9.49,'2021-12-16 02:27:28'),(3,9,'family',13.99,'2021-12-16 02:27:28'),(3,10,'largeThin',15.99,'2021-12-16 02:27:28'),(4,8,'largeThin',15.99,'2021-12-16 02:33:06'),(4,10,'large',15.99,'2021-12-16 02:33:06'),(5,9,'med',9.99,'2021-12-16 14:29:24'),(5,11,'largeThin',15.99,'2021-12-16 14:29:24'),(5,18,'largeThin',15.99,'2021-12-16 14:29:24'),(6,7,'med',11.49,'2021-12-16 17:02:00'),(7,7,'largeThin',12.49,'2021-12-16 17:02:07'),(7,8,'largeThin',15.99,'2021-12-16 17:02:07'),(8,7,'largeThin',12.49,'2021-12-16 18:08:29'),(8,18,'largeThin',15.99,'2021-12-16 18:08:29'),(9,9,'familyThin',13.99,'2021-12-16 18:08:37'),(9,10,'familyThin',18.99,'2021-12-16 18:08:37'),(10,10,'family',18.99,'2021-12-16 18:08:56'),(10,29,'largeThin',15.99,'2021-12-16 18:08:56'),(11,7,'large',12.49,'2021-12-16 18:31:53'),(11,8,'largeThin',15.99,'2021-12-16 18:31:53'),(12,7,'med',11.49,'2021-12-16 18:36:50'),(13,3,'familyThin',18.99,'2021-12-21 19:39:36'),(13,13,'family',18.99,'2021-12-21 19:39:36'),(14,7,'large',12.49,'2021-12-22 02:19:14'),(14,8,'family',18.99,'2021-12-22 02:19:14'),(15,8,'large',15.99,'2022-02-07 20:53:00'),(15,9,'large',10.99,'2022-02-07 20:53:00');
/*!40000 ALTER TABLE `order_pizzas` ENABLE KEYS */;
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
