select "films"."title",
"customers"."firstName",
"customers"."lastName",
"rentals"."customerId",
"rentals"."rentalId",
"inventory"."inventoryId"
from "customers"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
