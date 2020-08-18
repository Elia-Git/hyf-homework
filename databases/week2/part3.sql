-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT title, email
FROM task
  JOIN      user
on task.id=user.id
WHERE user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT title, user.name as UserName, task.status_id, status.name as StatusName
FROM task
  JOIN user ON task.id = user.id
  JOIN status ON task.status_id = status.id
WHERE user.name='Donald Duck' AND status.id =1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT title, month(created), user.name Created_by
FROM task
  JOIN user
  ON task.id=user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=(09);


-- Find how many
-- tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.(hint:use group by)
SELECT month(created) as Month, count(*) as Tasks_count
FROM task
GROUP BY month(created);
