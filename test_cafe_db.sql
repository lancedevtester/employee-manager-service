-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test_cafe_db
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `cafes`
--

DROP TABLE IF EXISTS `cafes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cafes` (
  `uuid` varchar(36) NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
  `name` varchar(20) NOT NULL,
  `description` longtext NOT NULL,
  `logo` blob,
  `location` varchar(45) NOT NULL,
  `employees` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `idcafes_UNIQUE` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cafes`
--

LOCK TABLES `cafes` WRITE;
/*!40000 ALTER TABLE `cafes` DISABLE KEYS */;
INSERT INTO `cafes` VALUES ('23c1a250-7759-11ec-b155-bd42338a9001','My Bucks','Not ordinary bucks',NULL,'Singapore',31,'2022-01-17 05:48:47','2022-01-17 05:48:47'),('2eb792a0-7759-11ec-b155-bd42338a9001','Another My Bucks','Yet not ordinary bucks',NULL,'Malaysia',15,'2022-01-17 05:49:06','2022-01-17 05:49:06'),('701cace0-7771-11ec-8f01-e99ffeeb969f','Ekrye','',NULL,'Singapore',24,'2022-01-17 08:42:43','2022-01-17 08:42:43');
/*!40000 ALTER TABLE `cafes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` varchar(9) NOT NULL,
  `name` varchar(45) NOT NULL,
  `cafe` varchar(20) NOT NULL,
  `days_worked` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('UI0012392','John Coner','Starbucks','51',NULL,NULL),('UI0012393','Larry Terry','Starbucks','32',NULL,NULL),('UI2200002','Roland Ong','Moon Bucks','0','2022-01-17 08:09:13','2022-01-17 08:09:13'),('UI3229312','Jerry Can','Coffee Bean','41',NULL,NULL),('UI3291132','Merry Danor','Coffee Been','78',NULL,NULL);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'test_cafe_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-17 19:06:07
