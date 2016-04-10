## DateTimezone

Note: There are three different ways to establish a timezone-object.



```php
print_r(new DateTimezone('Europe/Berlin'));
/*
class DateTimeZone Object
(
    [timezone_type] => 3,
    [timezone]      => "Europe/Berlin",
)
*/
```



```php
print_r(new DateTimezone('CET'));
/*
class DateTimeZone Object
(
    [timezone_type] => 2,
    [timezone]      => "CET",
)

*/
```



```php
print_r(new DateTimezone('+01:00'));
/*
class DateTimeZone Object
(
    [timezone_type] => 1,
    [timezone]      => "+01:00",
)
*/
```

Note: But what are the differences?



```php
print_r((new DateTimezone('Europe/Berlin'))->getLocation());
/* Array
   (
       [country_code] => DE
       [latitude] => 52.5
       [longitude] => 13.36666
       [comments] => Germany (most areas)
   )
*/
```
Note: Middle of Berlin!



```php
print_r((new DateTimezone('CET'))->getLocation());
/*
*/
```



```php
print_r((new DateTimezone('+01:00'))->getLocation());
/*
*/
```



## Timezone informations change

### Stay current!<!-- .element: class="fragment" -->

https://pecl.php.net/package/timezonedb<!-- .element: class="fragment" -->

Note: TZ-Database is kept up-to-date by IANA