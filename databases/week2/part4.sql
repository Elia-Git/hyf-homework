-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS
, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS
, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE
, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema job_interview
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema job_interview
-- -----------------------------------------------------
CREATE SCHEMA
IF NOT EXISTS `job_interview` DEFAULT CHARACTER
SET utf8 ;
USE `job_interview`
;

-- -----------------------------------------------------
-- Table `job_interview`.`interview`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `job_interview`.`interview`
(
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Start_time` TIME NOT NULL,
  `Finish_time` TIME NOT NULL,
  PRIMARY KEY
(`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER
SET = utf8;


-- -----------------------------------------------------
-- Table `job_interview`.`appointment`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `job_interview`.`appointment`
(
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Appointment_date` DATE NOT NULL,
  `Appointment_time` TIME NOT NULL,
  `Interview_Id` INT NOT NULL,
  PRIMARY KEY
(`Id`),
  INDEX `fk_Appointment_Interview_idx`
(`Interview_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Appointment_Interview`
    FOREIGN KEY
(`Interview_Id`)
    REFERENCES `job_interview`.`interview`
(`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER
SET = utf8;


-- -----------------------------------------------------
-- Table `job_interview`.`user`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `job_interview`.`user`
(
  `Id` INT NOT NULL AUTO_INCREMENT,
  `First_name` VARCHAR
(25) NOT NULL,
  `Last_name` VARCHAR
(25) NOT NULL,
  `User_name` VARCHAR
(25) NOT NULL,
  `Password` VARCHAR
(25) NOT NULL,
  `Phone` VARCHAR
(45) NOT NULL,
  `Email` VARCHAR
(45) NULL,
  PRIMARY KEY
(`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER
SET = utf8;


-- -----------------------------------------------------
-- Table `job_interview`.`user_has_appointment`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `job_interview`.`user_has_appointment`
(
  `User_Id` INT NOT NULL AUTO_INCREMENT,
  `Appointment_Id` INT NOT NULL,
  PRIMARY KEY
(`User_Id`, `Appointment_Id`),
  INDEX `fk_User_has_Appointment_Appointment1_idx`
(`Appointment_Id` ASC) VISIBLE,
  INDEX `fk_User_has_Appointment_User1_idx`
(`User_Id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Appointment_Appointment1`
    FOREIGN KEY
(`Appointment_Id`)
    REFERENCES `job_interview`.`appointment`
(`Id`),
  CONSTRAINT `fk_User_has_Appointment_User1`
    FOREIGN KEY
(`User_Id`)
    REFERENCES `job_interview`.`user`
(`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER
SET = utf8;


-- -----------------------------------------------------
-- Table `job_interview`.`user_has_interview`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `job_interview`.`user_has_interview`
(
  `User_Id` INT NOT NULL AUTO_INCREMENT,
  `Interview_Id` INT NOT NULL,
  PRIMARY KEY
(`User_Id`, `Interview_Id`),
  INDEX `fk_User_has_Interview_Interview1_idx`
(`Interview_Id` ASC) VISIBLE,
  INDEX `fk_User_has_Interview_User1_idx`
(`User_Id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Interview_Interview1`
    FOREIGN KEY
(`Interview_Id`)
    REFERENCES `job_interview`.`interview`
(`Id`),
  CONSTRAINT `fk_User_has_Interview_User1`
    FOREIGN KEY
(`User_Id`)
    REFERENCES `job_interview`.`user`
(`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER
SET = utf8;


SET SQL_MODE
=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS
=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS
=@OLD_UNIQUE_CHECKS;
