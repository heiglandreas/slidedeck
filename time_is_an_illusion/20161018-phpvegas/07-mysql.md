## How to store DateTimes

* Use two fields<!-- .element: class="fragment" -->
* one Datetime with local OR UTC time<!-- .element: class="fragment" -->
* one string with the associated timezone (not offset!)<!-- .element: class="fragment" -->



```php
$stmt = $pdo->prepare('INSERT INTO `event` VALUES(:datetime, :timezone)');
$stmt->exec([
    'timezone' => $dateTime->getTimezone()->getName(),
    'datetime' => $dateTime->format('Y-m-d H:i:s'),
]);
```


```php
$stmt = $pdo->prepare('SELECT * from `event`');
$stmt->execute();
$row = $stmt->fetchRow();
$date = new DateTimeImmutable($row->datetime, $row->timezone);
```



### MySQL

```bash
mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root -p mysql
```



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
