select "actors"."firstName",
"actors"."lastName",
"castMembers"."actorId"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';
