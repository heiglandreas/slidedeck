## How to get users timezone

No (reliable) way!<!-- .element: class="fragment" -->




## Wait...


<div id="timezoneIdentifier"><button onclick="document.getElementById('timezoneIdentifier').innerHTML = moment.tz.guess();">Guess My Timezone</button></div>

```javascript
var timezone = moment.tz.guess();
```



```bash
$ curl http://api.timezonedb.com/?lat=49.014&lng=8.4043&format=json&key=xxxx

{
    "abbreviation": "CET",
    "countryCode": "DE",
    "dst": "0",
    "gmtOffset": "3600",
    "message": "",
    "status": "OK",
    "timestamp": 1478764894,
    "zoneName": "Europe/Berlin"
}
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
