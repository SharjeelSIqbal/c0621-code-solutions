select "c"."name" as "countries",
count("cityId") as "cities"
from "cities"
join "countries" as "c" using ("countryId")
group by ("countryId");
