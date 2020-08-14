-- Part 2: School database
-- Create a new database containing the following tables:
-- Done
-- Class: with the columns: id, name, begins (date), ends (date)
-- DONE
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- DONE
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on name column of the student table
USE school_database;
CREATE INDEX index_name ON student(name);

-- Add a new column to the class table named status
-- with enum(not-started, ongoing, finished)

ALTER TABLE class
 add STATUS ENUM("not-started", "ongoing", "finished"
) NOT null ;
select *
from class;
