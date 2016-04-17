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
$ curl http://api.timezonedb.com/?lat=46.697705&lng=8.689613&format=json&key=xxxx

{
    "abbreviation": "CEST",
    "countryCode": "DE",
    "dst": "1",
    "gmtOffset": "7200",
    "message": "",
    "status": "OK",
    "timestamp": 1460295829,
    "zoneName": "Europe/Busingen"
}
```



## How to get timezones for abbreviation?

```php
DateTimeZone::listAbbreviations()['cemt'];
/*
Array (
    [0] => Array (
            [dst] => 1
            [offset] => 10800
            [timezone_id] => Europe/Berlin
        )
)
*/
```




## Don't

* do funny timestamp arithmetics within the database<!-- .element: class="fragment" -->
* store offset in the DB. You'll loose information<!-- .element: class="fragment" -->
* rely on datetime-functions of the database. They might not be existent!<!-- .element: class="fragment" -->
* convert datetimes to UTC or Offset. You'll loose information!<!-- .element: class="fragment" -->

 Note: like adding a timestamp to get certain dates



## Do

* store datetime without offset as UTC OR<!-- .element: class="fragment" -->
* store datetime without offset as local time<!-- .element: class="fragment" -->
* store the timezone-name with the datetime<!-- .element: class="fragment" -->
* use moment.js for rendering!<!-- .element: class="fragment" -->




> Datetime without timezone is a bit like money without currency.