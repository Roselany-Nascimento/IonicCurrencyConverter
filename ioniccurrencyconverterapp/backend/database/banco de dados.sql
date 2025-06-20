-- MySQL Script generated by MySQL Workbench
-- Sun Jun  8 16:28:11 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema currency_converter_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema currency_converter_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `currency_converter_db` DEFAULT CHARACTER SET utf8 ;
USE `currency_converter_db` ;

-- -----------------------------------------------------
-- Table `currency_converter_db`.`CONVERSAO_TB`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `currency_converter_db`.`CONVERSAO_TB` ;

CREATE TABLE IF NOT EXISTS `currency_converter_db`.`CONVERSAO_TB` (
  `ID_CONV` INT NOT NULL AUTO_INCREMENT,
  `MOEDA_BASE` VARCHAR(3) NOT NULL,
  `MOEDA_DEST` VARCHAR(3) NOT NULL,
  `VALOR` DECIMAL(20,2) NOT NULL,
  `VL_CONVERT` DECIMAL(20,4) NOT NULL,
  `TAXA` DECIMAL(12,5) NOT NULL,
  `DT_HR_CONV` DATETIME NOT NULL,
  PRIMARY KEY (`ID_CONV`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `currency_converter_db`.`CONSULTA_TB`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `currency_converter_db`.`CONSULTA_TB` ;

CREATE TABLE IF NOT EXISTS `currency_converter_db`.`CONSULTA_TB` (
  `ID_CONS` INT NOT NULL AUTO_INCREMENT,
  `MOEDA_BASE` VARCHAR(3) NOT NULL,
  `TAXAS` JSON NOT NULL,
  `DT_HR_CONS` DATETIME NOT NULL,
  PRIMARY KEY (`ID_CONS`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
