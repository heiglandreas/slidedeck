## DateTimezone

Note: There are three different ways to establish a timezone-object.



```php
print_r(new DateTimezone('+03:00'));
/*
class DateTimeZone Object
(
    [timezone_type] => 1,
    [timezone]      => "+03:00",
)
*/
```



```php
print_r(new DateTimezone('MSK'));
/*
class DateTimeZone Object
(
    [timezone_type] => 2,
    [timezone]      => "MSK",
)

*/
```



```php
print_r(new DateTimezone('Europe/Moscow'));
/*
class DateTimeZone Object
(
    [timezone_type] => 3,
    [timezone]      => "Europe/Moscow",
)
*/
```


Note: But what are the differences?



```php
print_r((new DateTimezone('Europe/Moscow'))->getLocation());
/* Array (
    [country_code] => RU
    [latitude] => 55.75583
    [longitude] => 37.61777
    [comments] => MSK+00 - Moscow area
)
*/
```
Note: Just outside the Kreml (between history museum and the museum of the patriotic war 1812) !



```php
print_r((new DateTimezone('MSK'))->getLocation());
/*
*/
```



```php
print_r((new DateTimezone('+03:00'))->getLocation());
/*
*/
```



## Timezone informations change

### Stay current!<!-- .element: class="fragment" -->

```bash
$ php -i | grep -i olson
"Olson" Timezone Database Version => 2020.1
```

https://pecl.php.net/package/timezonedb<!-- .element: class="fragment" -->
https://www.iana.org/time-zones<!-- .element: class="fragment" -->

Note: TZ-Database is kept up-to-date by Paul Eggers. Hosted by IANA. Laste Release 11.09.2019)
