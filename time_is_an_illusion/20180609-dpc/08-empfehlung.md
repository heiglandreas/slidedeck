## How to get users timezone

No (reliable) way!<!-- .element: class="fragment" -->




## Wait...


<div id="timezoneIdentifier"><button onclick="document.getElementById('timezoneIdentifier').innerHTML = moment.tz.guess();">Guess My Timezone</button></div>

```javascript
var timezone = moment.tz.guess();
```



## How to get timezones for a country?

```php
print_r(DateTimezone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'DE'));
/*
Array
(
    [0] => Europe/Berlin
    [1] => Europe/Busingen
)
*/
```



```bash
$ curl http://api.timezonedb.com/?lat=52.36666&lng=4.9&format=json&key=xxxx | jq

{
  "gmtOffset" : "7200",
  "countryCode" : "NL",
  "status" : "OK",
  "zoneName" : "Europe/Amsterdam",
  "timestamp" : 1528458213,
  "dst" : "1",
  "message" : "",
  "abbreviation" : "CEST"
}
```



## How to get timezones for abbreviation?

```php
DateTimeZone::listAbbreviations()['cest'];
/*
Array (
    [0] => Array
            (
                [dst] =>
                [offset] => 3600
                [timezone_id] => Europe/Berlin
            )

    [...]

    [51] => Array
        (
            [dst] =>
            [offset] => 3600
            [timezone_id] => Europe/Zurich
        )
}
*/
```




## Don't

* try to get a timezone from an offset or an abbreviation<!-- .element: class="fragment" -->
* do funny timestamp arithmetics within the database<!-- .element: class="fragment" -->
* store offset in the DB. You'll loose information<!-- .element: class="fragment" -->
* rely on datetime-functions of the database. They might not be existent!<!-- .element: class="fragment" -->
* convert datetimes to UTC or Offset. You'll loose information!<!-- .element: class="fragment" -->

 Note: like adding a timestamp to get certain dates



## Do

* Use UTC for logging information<!-- .element: class="fragment" -->
* store datetime without offset as local time<!-- .element: class="fragment" -->
* store the timezone-name with the datetime<!-- .element: class="fragment" -->
* (Ommit the timezone-name for UTC)<!-- .element: class="fragment" -->
* use moment.js for rendering!<!-- .element: class="fragment" -->




> Datetime without Timezone is a bit like money without currency.
