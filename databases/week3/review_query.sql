USE meal_sharing;
-- Creating a review
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('blallaa', 'review1', 2, 90, '2020-01-07');
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('nice food', 'happy customer', 7, 130, '2019-10-17');
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('Ok', 'Need improvments ', 5, 10, '2019-11-07');
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('Tasty', 'Wowwww ', 9,65, '2020-12-21');
-- Additional Review data
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('Delicious', 'Nice food & nice service ', 1, 110, '2019-10-01');
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('Amazing Food', 'Recomended ti visit ', 3, 100, '2020-12-24');
-- Get all reviews
SELECT * FROM Review;
-- Add a new review
INSERT INTO Review (Title,Description,Meal_Id,Stars,Created_date) VALUES('Wowww', 'Happy now ', 4, 75, '2020-04-07 17:07:17');

-- Get a review with any id, fx 1
SELECT *FROM Review WHERE Id=2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review 
SET 
    Description = 'Really nice now',
    Title = 'I like it now',
    stars = 90,
    Created_date = '2020-08-17 21:17:07'
WHERE
    Id = 3;
    
-- Delete a review with any id, fx 1
DELETE FROM Review WHERE Id=1;