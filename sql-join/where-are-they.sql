select "customers"."firstName",
"customers"."lastName",
"payments"."amount",
"payments"."customerId",
"addresses"."line1",
"addresses"."district",
"cities"."name" as "city",
"countries"."name" as "country"
from "customers"
join "payments" using ("customerId")
join "addresses" using ("addressId")
join "cities" using ("cityId")
join "countries" using ("countryId")
order by "payments"."amount" desc
limit 10;
