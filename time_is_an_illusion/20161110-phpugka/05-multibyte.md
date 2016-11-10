## DateTimezone

Note: There are three different ways to establish a timezone-object.



```php
print_r(new DateTimezone('-07:00'));
/*
class DateTimeZone Object
(
    [timezone_type] => 1,
    [timezone]      => "-07:00",
)
*/
```



```php
print_r(new DateTimezone('PDT'));
/*
class DateTimeZone Object
(
    [timezone_type] => 2,
    [timezone]      => "PDT",
)

*/
```



```php
print_r(new DateTimezone('America/Los_Angeles'));
/*
class DateTimeZone Object
(
    [timezone_type] => 3,
    [timezone]      => "America/Los_Angeles",
)
*/
```


Note: But what are the differences?



```php
print_r((new DateTimezone('America/Los_Angeles'))->getLocation());
/* Array
   (
    [country_code] => US
    [latitude] => 34.05222
    [longitude] => -118.24278
    [comments] => Pacific
   )
*/
```
Note: Middle of LA!



```php
print_r((new DateTimezone('PDT'))->getLocation());
/*
*/
```



```php
print_r((new DateTimezone('-07:00'))->getLocation());
/*
*/
```



## Timezone informations change

### Stay current!<!-- .element: class="fragment" -->

https://pecl.php.net/package/timezonedb<!-- .element: class="fragment" -->
https://https://www.iana.org/time-zones<!-- .element: class="fragment" -->

Note: TZ-Database is kept up-to-date by Paul Eggers. Hosted by IANA