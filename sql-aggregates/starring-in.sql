select "categories"."name",
count("categories") as "genresActedIn"
from "actors"
join "castMembers" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "actors"."firstName" = 'Lisa'
and "actors"."lastName" = 'Monroe'
group by "categories"."name";
