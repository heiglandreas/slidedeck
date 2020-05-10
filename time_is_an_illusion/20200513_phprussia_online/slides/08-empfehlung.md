## How to get users timezone

No (reliable) way!<!-- .element: class="fragment" -->




## Wait...

<script src="../resources/moment.js"></script>
<div id="timezoneIdentifier"><button onclick="document.getElementById('timezoneIdentifier').innerHTML = moment.tz.guess();">Guess My Timezone</button></div>

```javascript
var timezone = moment.tz.guess();
```



## How to get timezones for a country?

```php
print_r(DateTimezone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'RU'));
/*
Array (
    [0] => Asia/Anadyr
    [1] => Asia/Barnaul
    [2] => Asia/Chita
    [3] => Asia/Irkutsk
    [4] => Asia/Kamchatka
    [5] => Asia/Khandyga
    [6] => Asia/Krasnoyarsk
    [7] => Asia/Magadan
    [8] => Asia/Novokuznetsk
    [9] => Asia/Novosibirsk
    [10] => Asia/Omsk
    [11] => Asia/Sakhalin
    [12] => Asia/Srednekolymsk
    [13] => Asia/Tomsk
    [14] => Asia/Ust-Nera
    [15] => Asia/Vladivostok
    [16] => Asia/Yakutsk
    [17] => Asia/Yekaterinburg
    [18] => Europe/Astrakhan
    [19] => Europe/Kaliningrad
    [20] => Europe/Kirov
    [21] => Europe/Moscow
    [22] => Europe/Samara
    [23] => Europe/Saratov
    [24] => Europe/Ulyanovsk
    [25] => Europe/Volgograd
)
*/
```



```bash
$ curl http://api.timezonedb.com/?lat=55.75583&lng=37.61777&format=json&key=xxxx | jq
{
  "status": "OK",
  "message": "",
  "countryCode": "RU",
  "zoneName": "Europe/Moscow",
  "abbreviation": "MSK",
  "gmtOffset": "10800",
  "dst": "0",
  "timestamp": 1589043167
}
```



## How to get timezones for abbreviation?

```php
DateTimeZone::listAbbreviations()['msk'];
/*
Array (
    [0] => Array (
        [dst] => 
        [offset] => 10800
        [timezone_id] => Europe/Moscow
    )
    ...
    [13] => Array (
        [dst] => 
        [offset] => 14400
        [timezone_id] => Europe/Simferopol
    )
}
*/
```




## Don't

* <!-- .element: class="fragment" -->try to get a timezone from an offset or an abbreviation
* <!-- .element: class="fragment" -->do funny timestamp arithmetics within the database
* <!-- .element: class="fragment" -->store offset in the DB. You'll loose information
* <!-- .element: class="fragment" -->rely on datetime-functions of the database. They might not be existent!
* <!-- .element: class="fragment" -->convert datetimes to UTC or Offset. You'll loose information!
* <!-- .element: class="fragment" -->use Timezone-Identifiers for user-interaction!

Note: like adding a timestamp to get certain dates



## Do

* <!-- .element: class="fragment" -->Use UTC for logging information
* <!-- .element: class="fragment" -->store datetime without offset as local time
* <!-- .element: class="fragment" -->store the timezone-name with the datetime
* <!-- .element: class="fragment" -->(Ommit the timezone-name for UTC)
* <!-- .element: class="fragment" -->use moment.js for rendering!
* <!-- .element: class="fragment" -->Use ICU-Info to display "timezone-names"




> Datetime without Timezone is a bit like money without currency.
