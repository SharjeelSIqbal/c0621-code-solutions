select "customers"."firstName",
"customers"."lastName",
sum("payments"."amount") as "sum"
from "customers"
join "payments" using ("customerId")
-- join "films" using ()
group by "customers"."firstName",
"customers"."lastName",
"payments"."amount"
order by "sum" desc;
