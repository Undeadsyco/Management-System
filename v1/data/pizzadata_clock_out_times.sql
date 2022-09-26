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
-- Table structure for table `clock_out_times`
--

DROP TABLE IF EXISTS `clock_out_times`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clock_out_times` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Employee_Id` int(4) unsigned zerofill NOT NULL,
  `Time_Out` timestamp NOT NULL,
  PRIMARY KEY (`Id`,`Employee_Id`),
  KEY `clock_out_employee_idx` (`Employee_Id`),
  CONSTRAINT `clock_out_employee` FOREIGN KEY (`Employee_Id`) REFERENCES `employee` (`Employee_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clock_out_times`
--

LOCK TABLES `clock_out_times` WRITE;
/*!40000 ALTER TABLE `clock_out_times` DISABLE KEYS */;
INSERT INTO `clock_out_times` VALUES (1,0001,'2021-12-16 01:13:13'),(2,0001,'2021-12-16 02:42:05'),(3,0001,'2021-12-17 04:25:18'),(4,0001,'2021-12-19 19:26:51'),(5,0006,'2021-12-19 23:53:31'),(6,0001,'2021-12-20 17:42:44'),(7,0004,'2021-12-20 18:13:23'),(8,0002,'2021-12-20 21:30:00'),(9,0003,'2021-12-20 20:26:58'),(10,0005,'2021-12-20 20:27:12'),(11,0006,'2021-12-21 02:56:56'),(12,0002,'2021-12-21 18:30:00'),(13,0003,'2021-12-22 03:00:00'),(14,0001,'2021-12-22 15:38:34'),(15,0006,'2022-02-07 20:53:46');
/*!40000 ALTER TABLE `clock_out_times` ENABLE KEYS */;
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
