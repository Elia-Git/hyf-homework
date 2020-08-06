-- Homework from Databases WEEK#1
-- 1. Find out how many tasks are in the task table (35)
SELECT count(*) as tasks_count
FROM task

-- 2. Find out how many tasks in the task table do not have a valid due date (8)
SELECT COUNT(*) as Tasks_with_null_due_date_count
FROM task
WHERE due_date is null
;

-- 3. Find all the tasks that are marked as done(12 Tasks done)
SELECT Title, Status_id
-- SELECT count(*) as task_done_count (12)
FROM task
WHERE status_id=3


-- 4. Find all the tasks that are not marked as done (23 tasks not done)
SELECT title, status_id
-- SELECT count(*) as task_not_done_count (23)
FROM task
WHERE status_id=1 or status_id= 2;

-- 5. Get all the tasks, sorted with the most recently created first(works)
SELECT Title, Created
FROM task
ORDER BY created  DESC;


-- 6. Get the single most recently created task (works)
SELECT Title, Created
FROM task
ORDER BY created DESC LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT Title
, Due_date, Description
FROM task
WHERE title LIKE '%database%' or description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.Title, status.Name, status.ID
FROM task
  JOIN status ON task.status_id=status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.Name, count(*)
FROM status
  JOIN task ON task.status_id=status.id
GROUP BY status.id;
-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.Name , count(task.status_id)
FROM status
  JOIN task ON task.status_id=status.id
GROUP BY status.id
ORDER BY count(task.status_id) DESC;



