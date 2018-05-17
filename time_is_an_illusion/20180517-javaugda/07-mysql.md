## How to store DateTimes

* Use two fields<!-- .element: class="fragment" -->
* one Datetime with local OR UTC time<!-- .element: class="fragment" -->
* one string with the associated timezone (not offset!)<!-- .element: class="fragment" -->



### MySQL

```bash
mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root -p mysql
```

Make sure you have the up-to-date timezone data!<!-- .element: class="fragment" -->



### MySQL

```sql
-- Select all entries where the UTC-time is later than 14:00
SELECT * FROM table
WHERE
    DATE_FORMAT(
        CONVERT_TZ(myDateTime, myTimezone, 'UTC')
    , '%H') >= 14;

SELECT * FROM table
WHERE
    TIME(CONVERT_TZ(myDateTime, myTimezone, 'UTC'))
    > 14:00:00;
```




### PostgreSQL

**Do not use** ```timestamp with time zone```




### PostgreSQL
```sql
-- Select all entries where the UTC-time is later than 14:00
SELECT * FROM TABLE
WHERE
    extract(HOUR FROM zeit AT TIME ZONE zone AT TIME ZONE 'UTC')
    >= 14;
```
