USE meal_sharing;
-- Creating a meal (7 meals)
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('PASTA', 'Bologna Pasta', 'Nørrebro st.', '2020-07-17 17:07:07', 10, 17.49, '2020-07-16');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Pizza', 'Millano pizza with dressing', 'Frederiksberg alle', '2020-01-11 14:07:00', 10, 22.99, '2020-01-10');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Mexican Pizza', 'Mexicano hot chilli  pizza', 'Frederiksberg Center', '2020-04-02 20:00:00', 10, 27.49, '2020-04-01');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Lasgna', 'home made lasagna ', 'Gl.kong vej', '2020-03-10 19:07:06', 10, 24.99, '2020-03-10');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Burger', 'Cheese Burger', 'Central st.', '2020-02-10 10:07:07', 10, 10.19, '2020-02-10');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Hamburger', 'Special', 'Peter bangs vej', '2020-03-07 00:59:00', 10, 17.49, '2020-03-06');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Pannini', 'Special', 'Falkoner alle.', '2020-05-17 07:07:00', 10, 12.09, '2020-05-16');
-- Additional meals added
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Rice', 'Salad  with rød fløde added', 'Valby bakken.', '2020-06-11 15:00:53', 10, 50.49, '2020-06-14');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Sushi', 'Rød grøde med fløde', 'Zoologiske have CPH.', '2020-07-12 17:10:30', 10, 70.00, '2020-07-12');
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Rød grøde med fløde', 'Common danish food', 'HYF CPH.', '2020-07-10 12:10:30', 10, 40.00, '2020-07-10');


-- MEAL QUERIES
-- Get all meals
SELECT*
FROM meal;
-- Add a new meal
INSERT INTO Meal
   ( Title, Description, Location,
`When`, Max_reservations, Price, Created_date) VALUES
('Hotdog', 'Halal', 'Valby ', '2020-06-20 06:10:10', 10, 09.49, '2020-06-20');
-- Get a meal with any id
SELECT*
FROM meal
WHERE Id=6;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET Title = 'Pasta-mocoroni', Description= 'Macoroni'
WHERE Id = 1;
-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE Id=8;



-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT*
FROM Meal
WHERE Price <=13.00;

-- Get meals that still has available reservations
SELECT meal.*, reservation.number_of_guests AS Reserved_yet
FROM meal
   JOIN reservation ON meal.id=reservation.meal_id
WHERE meal.max_reservations > reservation.number_of_guests
GROUP BY meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM Meal
WHERE Title LIKE '%grøde%';
-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE  created_date BETWEEN '2020-02-01' AND '2020-05-01';
-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM Meal
   LIMIT
4;

-- Get the meals that have good reviews

SELECT meal.*, AVG(review.stars) AS Stars_recieved
FROM meal
   JOIN review ON meal.id=review.Meal_Id
WHERE review.stars>75
GROUP BY review.meal_id;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.Id, meal.title, SUM(reservation.number_of_guests), reservation.Created_date AS Res_created_date
FROM reservation
   LEFT JOIN meal ON reservation.meal_id=meal.id
GROUP BY reservation.meal_id
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.Id, meal.title , AVG(stars)
FROM meal
   JOIN review ON meal.id=review.meal_id
GROUP BY meal_id
ORDER BY AVG(stars) DESC;



