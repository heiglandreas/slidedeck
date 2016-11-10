
## How to handle DateTimes in PHP.

* Don't relly on server-time!<!-- .element: class="fragment" -->
* Always use DateTime with timezone-information (User-Related Dates)<!-- .element: class="fragment" -->
* Or use DateTime with UTC as Timezone (Server-Related Dates)<!-- .element: class="fragment" -->
* use DateTimeImmutable<!-- .element: class="fragment" -->

Note: Rendering depends on the purpose. Either users local time or events local time




```php
$timezone = new DateTimezone('America/Los_Angeles');

$date = new DatetimeImmutable('2016-10-18 20:00:00', $timezone);
echo $date->format('c');
// 2016-10-18T20:00:00-07:00
$date = $date->setTimezone(new DateTimezone('America/Phoenix'));
echo $date->format('c');
// 2016-10-18T20:00:00-07:00
// PDT <=> MST
$date = $date->setTimezone(new DateTimezone('Europe/Berlin'));
echo $date->format('c');
// 2016-10-19T05:00:00+02:00
```

Note: American DST starts 2nd weekend, European last weekend in March! same back!



## Caveat!

```php
$date = new DateTimeImmutable('a');
echo $date->format('c');
// 2016-11-10T06:52:43+01:00

$date = new DateTimeImmutable('j');
PHP Warning:  Uncaught Exception: DateTime::__construct(): Failed to parse time 
string (j) at position 0 (j): The timezone could not be found in the database

```