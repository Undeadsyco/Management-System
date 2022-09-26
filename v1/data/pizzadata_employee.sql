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
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `Employee_Id` int(4) unsigned zerofill NOT NULL,
  `Employee_Name` varchar(75) NOT NULL,
  `Address` varchar(75) NOT NULL,
  `Birthday` varchar(75) NOT NULL,
  `Password` int NOT NULL,
  `Start_Date` varchar(45) NOT NULL,
  `End_Date` varchar(45) DEFAULT NULL,
  `hourly_pay` double NOT NULL,
  `Position` varchar(45) NOT NULL,
  `Is_Clocked_In` tinyint NOT NULL,
  `Is_On_Break` tinyint NOT NULL,
  PRIMARY KEY (`Employee_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (0001,'Brandon Santana','1448 N Volutsia','September 23rd, 1998',2115,'June 15th, 2015',NULL,11,'Asst Mgr',1,0),(0002,'Employee1','1234 N Random St','Augest 5th, 2003',1234,'March 3rd, 2017',NULL,7.25,'Employee',1,0),(0003,'Employee2','1234 S Random St','December 19th, 1996',1234,'January 15th, 2013',NULL,9.5,'Employee',0,0),(0004,'Employee3','1234 E Random St','March 29th, 1999',1234,'March, 24th, 2019',NULL,8,'Employee',0,0),(0005,'ShiftLead1','1234 W Random St','May 2nd, 1997',1234,'June 8th, 2013',NULL,9.75,'Shift Lead',0,0),(0006,'Manager','5678 N Random St','July 30th, 1992',1234,'Febuary 9th, 2002',NULL,15,'Manager',0,0),(0007,'Employee4','5678 S Random St','October 13th, 2000',1234,'December 18th, 2018',NULL,8,'Employee',0,0),(0008,'ShiftLead2','5678 E Random St','November 23rd, 1996',1234,'June 19th, 2016',NULL,9.75,'Shift Lead',0,0);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
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
