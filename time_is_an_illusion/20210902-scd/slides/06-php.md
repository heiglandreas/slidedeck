
## How to handle DateTimes in PHP.

* Don't rely on server-time or default timezone!<!-- .element: class="fragment" -->
* Always use DateTimeImmutable with timezone-information (User-Related Dates)<!-- .element: class="fragment" -->
* Or use DateTimeImmutable with UTC as Timezone (Server-Related Dates)<!-- .element: class="fragment" -->
* use DateTimeImmutable<!-- .element: class="fragment" -->

Note: Rendering depends on the purpose. Either users local time or events local time




```php
$timezone = new DateTimezone('Europe/Berlin');

$date = new DatetimeImmutable('2021-09-02 12:00:00', $timezone);
echo $date->format('c');
// 2021-09-02T12:00:00+02:00
$date = $date->setTimezone(new DateTimezone('America/Phoenix'));
echo $date->format('c');
//2021-09-02T03:00:00-07:00
```

Note: American DST starts 2nd weekend, European last weekend in March! same back!



## Caveat!

```php
$date = new DateTimeImmutable('a');
echo $date->format('c');
// 2021-09-02T12:00:00+01:00

$date = new DateTimeImmutable('j');
PHP Warning:  Uncaught Exception: DateTime::__construct(): Failed to parse time
string (j) at position 0 (j): The timezone could not be found in the database
```



### Clocks

* Don't hard-code `new DateTimeImmutable()`!
* Use clocks to inject DateTime information into your code!



### Clocks

<pre><code class="php" data-line-numbers="3|5-7">class Foo {
    public function __construct(private ClockInterface $clock) {}
    
    public function getTime(): string 
    {
        return $this->clock->now()->format('c');
    }
}

$frozenClock = new FrozenClock(
    new DateTimeImmutable('2021-09-02T16:30:00+01:00')
);

echo (new Foo($frozenClock))->getTime();
// ALWAYS 2021-09-02T16:30:00+01:00
echo (new Foo(new SystemClock()))->getTime();
// ALWAYS the current DateTime</code></pre>