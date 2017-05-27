
## How to handle DateTimes in PHP.

* Don't relly on server-time!<!-- .element: class="fragment" -->
* Always use DateTime with timezone-information (User-Related Dates)<!-- .element: class="fragment" -->
* Or use DateTime with UTC as Timezone (Server-Related Dates)<!-- .element: class="fragment" -->
* use DateTimeImmutable<!-- .element: class="fragment" -->

Note: Rendering depends on the purpose. Either users local time or events local time




```php
$timezone = new DateTimezone('Europe/Belgrade');

$date = new DatetimeImmutable('2017-05-27 17:00:00', $timezone);
echo $date->format('c');
// 2017-05-27T17:00:00+02:00
$date = $date->setTimezone(new DateTimezone('America/Phoenix'));
echo $date->format('c');
// 2017-05-27T08:00:00-07:00
```

Note: American DST starts 2nd weekend, European last weekend in March! same back!



## Caveat!

```php
$date = new DateTimeImmutable('a');
echo $date->format('c');
// 2017-05-27T17:30:00+01:00

$date = new DateTimeImmutable('j');
PHP Warning:  Uncaught Exception: DateTime::__construct(): Failed to parse time 
string (j) at position 0 (j): The timezone could not be found in the database

```
