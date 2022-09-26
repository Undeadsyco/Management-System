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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `Register_Id` int NOT NULL,
  `order_name` varchar(50) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `subtotal` float NOT NULL,
  `tax` float NOT NULL,
  `total` float NOT NULL,
  `gross_total` float NOT NULL,
  `paid_amount` float NOT NULL,
  `change` float NOT NULL,
  `order_status` int NOT NULL,
  `order_type` varchar(45) NOT NULL,
  `order_time` timestamp NOT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_id_UNIQUE` (`order_id`),
  KEY `order_register_key_idx` (`Register_Id`),
  CONSTRAINT `order_register_key` FOREIGN KEY (`Register_Id`) REFERENCES `register` (`Register_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,NULL,NULL,15.99,1.36,17.35,17.35,20,2.65,1,'walkin','2021-12-16 02:26:57'),(2,1,NULL,NULL,33.98,2.89,36.87,41.21,40,3.13,1,'walkin','2021-12-16 02:27:16'),(3,1,NULL,NULL,39.47,3.35,42.82,42.82,50,7.18,1,'walkin','2021-12-16 02:27:28'),(4,1,NULL,NULL,23.98,2.04,26.02,31.98,40,13.98,1,'walkin','2021-12-16 02:33:06'),(5,1,NULL,NULL,41.97,3.57,45.54,41.97,50,4.46,1,'walkin','2021-12-16 14:29:24'),(6,1,NULL,NULL,11.49,0.98,12.47,11.49,20,7.53,1,'walkin','2021-12-16 17:02:00'),(7,1,NULL,NULL,28.48,2.42,30.9,28.48,40,9.1,1,'walkin','2021-12-16 17:02:07'),(8,1,NULL,NULL,28.48,2.42,30.9,28.48,30.9,0,1,'walkin','2021-12-16 18:08:29'),(9,1,NULL,NULL,32.98,2.8,35.78,32.98,40,4.22,1,'walkin','2021-12-16 18:08:37'),(10,1,NULL,NULL,34.98,2.97,37.95,34.98,50,12.05,1,'walkin','2021-12-16 18:08:56'),(11,1,NULL,NULL,23.48,2,25.48,28.48,30,4.52,1,'walkin','2021-12-16 18:31:53'),(12,1,NULL,NULL,5.75,0.49,6.23,11.49,10,3.77,1,'walkin','2021-12-16 18:36:50'),(13,1,NULL,NULL,38.48,3.27,41.75,42.48,45,3.25,1,'walkin','2021-12-21 19:39:36'),(14,1,'TONY',NULL,25.98,2.21,28.19,32.98,40,11.81,1,'walkin','2021-12-22 02:19:14'),(15,1,NULL,NULL,26.98,2.29,29.27,29.98,40,10.73,1,'walkin','2022-02-07 20:53:00');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
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
