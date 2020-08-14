-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS
, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS
, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE
, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Job_interview
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Job_interview
-- -----------------------------------------------------
CREATE SCHEMA
IF NOT EXISTS `Job_interview` DEFAULT CHARACTER
SET utf8 ;
USE `Job_interview`
;

-- -----------------------------------------------------
-- Table `Job_interview`.`Interview`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `Job_interview`.`Interview`
(
  `Id` INT NOT NULL,
  `Start_time` TIME NOT NULL,
  `Finish_time` TIME NOT NULL,
  PRIMARY KEY
(`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Job_interview`.`Appointment`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `Job_interview`.`Appointment`
(
  `Id` INT NOT NULL,
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
    REFERENCES `Job_interview`.`Interview`
(`Id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Job_interview`.`User`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `Job_interview`.`User`
(
  `Email` INT NOT NULL,
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
  PRIMARY KEY
(`Email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Job_interview`.`User_has_Interview`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `Job_interview`.`User_has_Interview`
(
  `User_Email` INT NOT NULL,
  `Interview_Id` INT NOT NULL,
  PRIMARY KEY
(`User_Email`, `Interview_Id`),
  INDEX `fk_User_has_Interview_Interview1_idx`
(`Interview_Id` ASC) VISIBLE,
  INDEX `fk_User_has_Interview_User1_idx`
(`User_Email` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Interview_User1`
    FOREIGN KEY
(`User_Email`)
    REFERENCES `Job_interview`.`User`
(`Email`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Interview_Interview1`
    FOREIGN KEY
(`Interview_Id`)
    REFERENCES `Job_interview`.`Interview`
(`Id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Job_interview`.`User_has_Appointment`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `Job_interview`.`User_has_Appointment`
(
  `User_Email` INT NOT NULL,
  `Appointment_Id` INT NOT NULL,
  PRIMARY KEY
(`User_Email`, `Appointment_Id`),
  INDEX `fk_User_has_Appointment_Appointment1_idx`
(`Appointment_Id` ASC) VISIBLE,
  INDEX `fk_User_has_Appointment_User1_idx`
(`User_Email` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Appointment_User1`
    FOREIGN KEY
(`User_Email`)
    REFERENCES `Job_interview`.`User`
(`Email`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Appointment_Appointment1`
    FOREIGN KEY
(`Appointment_Id`)
    REFERENCES `Job_interview`.`Appointment`
(`Id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE
=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS
=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS
=@OLD_UNIQUE_CHECKS;
