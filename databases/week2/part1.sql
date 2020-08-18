-- Part 1: Working with tasks

-- Add a task with these attributes:
-- (title, description, created, updated, due_date, status_id, user_id)
INSERT INTO task
  ( title, description, created, updated, due_date, status_id, user_id)
VALUES(36, "Coffe time", "Meet with friends and have coffee together", NOW(), "2020-08-17 07:19:56", "2021-07-17 01:41:53", 1, 7);

-- Change the title of a task
UPDATE task
SET  title="Coffe time prolonged due to COVID-19" WHERE id="36";

-- Change a task due date
UPDATE task
 SET due_date="2022-07-17 07:19:56" WHERE id="36";

-- Change a task status
UPDATE task
 SET status_id="2" WHERE id="36";

-- Mark a task as complete
UPDATE task
SET id="3" WHERE id="36";

-- Delete a task
DELETE from task
ORDER BY id DESC
LIMIT 1;

SELECT *
FROM task;