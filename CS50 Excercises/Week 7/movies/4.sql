SELECT COUNT(movie_id)
FROM ratings
GROUP BY rating
HAVING rating = 10.0;