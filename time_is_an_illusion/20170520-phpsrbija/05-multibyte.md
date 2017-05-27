## DateTimezone

Note: There are three different ways to establish a timezone-object.



```php
print_r(new DateTimezone('+02:00'));
/*
class DateTimeZone Object
(
    [timezone_type] => 1,
    [timezone]      => "+02:00",
)
*/
```



```php
print_r(new DateTimezone('CEST'));
/*
class DateTimeZone Object
(
    [timezone_type] => 2,
    [timezone]      => "CEST",
)

*/
```



```php
print_r(new DateTimezone('Europe/Belgrade'));
/*
class DateTimeZone Object
(
    [timezone_type] => 3,
    [timezone]      => "Europe/Belgrade",
)
*/
```


Note: But what are the differences?



```php
print_r((new DateTimezone('Europe/Belgrade'))->getLocation());
/* Array
   (
       [country_code] => RS
       [latitude] => 44.83333
       [longitude] => 20.5
       [comments] =>
   )
*/
```
Note: Middle of Belgrade!



```php
print_r((new DateTimezone('CEST'))->getLocation());
/*
*/
```



```php
print_r((new DateTimezone('+02:00'))->getLocation());
/*
*/
```



## Timezone informations change

### Stay current!<!-- .element: class="fragment" -->

```bash
$ php -i | grep -i olson
"Olson" Timezone Database Version => 2017.2
```

https://pecl.php.net/package/timezonedb<!-- .element: class="fragment" -->
https://www.iana.org/time-zones<!-- .element: class="fragment" -->

Note: TZ-Database is kept up-to-date by Paul Eggers. Hosted by IANA
