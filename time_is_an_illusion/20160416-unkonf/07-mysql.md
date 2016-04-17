
## How to store DateTimes

* Use two fields<!-- .element: class="fragment" -->
* one Datetime with local OR UTC time<!-- .element: class="fragment" -->
* one string with the associated timezone (not offset!)<!-- .element: class="fragment" -->
* use ```SET time_zone = timezone``` <!-- .element: class="fragment" -->




```php
$stmt = $pdo->prepare('INSERT INTO `event` VALUES(:datetime, :timezone)');
$stmt->exec([
    'timezone' => $dateTime->getTimezone()->getName(),
    'datetime' => $dateTime->setTimezone(new DateTimezone('UTC'))
                    ->format('Y-m-d H:i:s'),
]);
```



```php
$stmt = $pdo->prepare('SELECT * from `event`');
$stmt->execute();
$row = $stmt->fetchRow();
$date = new DateTimeImmutable($row->datetime, new DateTimezone('UTC'));
$date = $date->setTimezone($row->timezone);
```