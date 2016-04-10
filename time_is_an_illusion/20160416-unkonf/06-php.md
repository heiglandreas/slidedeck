
## How to handle DateTimes in PHP.

* Don't relly on server-time!<!-- .element: class="fragment" -->
* Always use DateTime with timezone-information<!-- .element: class="fragment" -->
* use DateTimeImmutable<!-- .element: class="fragment" -->

Note: Rendering depends on the purpose. Either users local time or events local time




```php
$timezone = new DateTimezone('Europe/Berlin');

$date = new DatetimeImmutable('2016-03-16 12:34:45', $timezone);
echo $date->format('c')
// 2016-03-16T12:34:45+01:00
$date = $date->setTimezone(new DateTimezone('America/Chicago'));
echo $date->format('c')
// 2016-03-16T06:23:34-05:00
// CST <=> CET
```

Note: American DST starts 2nd weekend, European last weekend in March! same back!