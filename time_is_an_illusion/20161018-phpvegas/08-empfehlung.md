## How to get users timezone

No (reliable) way!<!-- .element: class="fragment" -->




## Wait...


<div id="timezoneIdentifier"><button onclick="document.getElementById('timezoneIdentifier').innerHTML = moment.tz.guess();">Guess My Timezone</button></div>

```javascript
var timezone = moment.tz.guess();
```



## How to get timezones for a country?

```php
print_r(DateTimezone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'US'));
/*
Array
(
    [0] => America/Adak
    [1] => America/Anchorage
    [2] => America/Boise
    [3] => America/Chicago
    [4] => America/Denver
    [5] => America/Detroit
    [6] => America/Indiana/Indianapolis
    [7] => America/Indiana/Knox
    [8] => America/Indiana/Marengo
    [9] => America/Indiana/Petersburg
    [10] => America/Indiana/Tell_City
    [11] => America/Indiana/Vevay
    [12] => America/Indiana/Vincennes
    [13] => America/Indiana/Winamac
    [14] => America/Juneau
    [15] => America/Kentucky/Louisville
    [16] => America/Kentucky/Monticello
    [17] => America/Los_Angeles
    [18] => America/Menominee
    [19] => America/Metlakatla
    [20] => America/New_York
    [21] => America/Nome
    [22] => America/North_Dakota/Beulah
    [23] => America/North_Dakota/Center
    [24] => America/North_Dakota/New_Salem
    [25] => America/Phoenix
    [26] => America/Sitka
    [27] => America/Yakutat
    [28] => Pacific/Honolulu
)
*/
```



```bash
$ curl http://api.timezonedb.com/?lat=36.104541&lng=-115.147564&format=json&key=xxxx

{
    "abbreviation": "PDT",
    "countryCode": "US",
    "dst": "1",
    "gmtOffset": "-25200",
    "message": "",
    "status": "OK",
    "timestamp": 1476535203,
    "zoneName": "America/Los_Angeles"
}
```



## How to get timezones for abbreviation?

```php
DateTimeZone::listAbbreviations()['PDT'];
/*
Array (
    [0] => Array
        (
            [dst] => 1
            [offset] => -25200
            [timezone_id] => America/Los_Angeles
        )

    [...]

    [14] => Array
        (
            [dst] => 1
            [offset] => -25200
            [timezone_id] => Mexico/BajaNorte
        )
)
*/
```




## Don't

* try to get a timezone from an offset<!-- .element: class="fragment" -->
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