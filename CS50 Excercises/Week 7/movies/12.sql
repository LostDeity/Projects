SELECT title FROM people, stars, movies
WHERE people.id = stars.person_id
AND stars.movie_id = movies.id
AND name IN ('Jennifer Lawrence' , 'Bradley Cooper')
GROUP BY title
HAVING COUNT(*) > 1;