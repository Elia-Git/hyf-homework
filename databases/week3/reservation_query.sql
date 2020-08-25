-- RESERVATION QUERIES
USE meal_sharing;

-- Creating reservation
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (17, 7, '2020-07-10', '273-733-7667', 'Benjamin', 'benjabenji1@mail.com');
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (23, 3, '2020-05-24', '714-128-270', 'Marie', 'marie7@email.com');
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (30, 5, '2020-07-17', '734-189-707', 'Jakob', 'jacky7@yahoogmail.com');
-- Additional reservations
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (5, 1, '2020-07-10', '277-888-767', 'Sara', 'sar1@mail.com');
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (9, 3, '2021-01-01', '989-123-456', 'Anilli', 'ani@mail.com');
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (15, 2, '2020-11-17', '245-722-666', 'Elias', 'elias0@mail.com');

-- Get all reservations
SELECT *
FROM Reservation;

-- Add one reservation
INSERT INTO Reservation
   (Number_of_guests, Meal_id, Created_date, Contact_phonenumber, Contact_name, Contact_email)
VALUES
   (17, 6, '2020-01-07', '676-722-245', 'Elizabeth', 'elizab@mail.com');

-- Get a reservation with any id, fx 1
SELECT*
FROM Reservation
WHERE Id=13;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
   SET Number_of_guests=25 , Contact_email="elias07@email.com"
   WHERE Id=13;

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation WHERE Id=11;



