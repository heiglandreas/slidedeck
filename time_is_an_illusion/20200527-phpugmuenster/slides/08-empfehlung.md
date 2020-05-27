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
print_r(DateTimezone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'DE'));
/*
Array (
    [0] => Europe/Berlin
    [1] => Europe/Busingen
)
*/
```



```bash
$ curl http://api.timezonedb.com/?lat=51.962944lng=7.628694&format=json&key=xxxx | jq
{
  "status": "OK",
  "message": "",
  "countryCode": "DE",
  "zoneName": "Europe/Berlin",
  "abbreviation": "CEST",
  "gmtOffset": "7200",
  "dst": "1",
  "timestamp": 1589043167
}
```



## How to get timezones for abbreviation?

```php
DateTimeZone::listAbbreviations()['CEST'];
/*
Array (
    [0] => Array (
        [dst] => 1
        [offset] => 7200
        [timezone_id] => Europe/Berlin
    )
    ...
    [51] => Array (
        [dst] => 1
        [offset] => 7200
        [timezone_id] => Europe/Zurich
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
