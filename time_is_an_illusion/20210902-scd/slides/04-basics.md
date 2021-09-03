![Day/Night-line](resources/22044740591_7513f833ce_k.jpg)
<span class="credit
">[Project Apollo Archive (Public Domain)](https://flic.kr/p/zA24mk)</span>





![Current Sun/Night distribution](resources/sunmap.png)
<span class="credit">[Day and Night world-map](https://www.timeanddate.com/worldclock/sunearth.html?day=2&month=9&year=2021&hour=16&min=45&sec=0&n=968&earth=0)</span>




![timezones of the earth](resources/timezones.png)
<span class="credit">[Von TimeZonesBoy - Eigenes Werk, CC-BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=42165217)</span>

Note: Offsets are written with + or - depending whether they are right or left of the 0.




> A timezone is that part of the earthsurface that **by governmental definition** has the same
date and time

Note: Most timezones are now offset from UTC by full hours, though there are exceptions like nepal (4.25) or venezuela (-4.5)



## Excursion Time Coordinates



### GMT

* Noon depends on sun.<!-- .element: class="fragment" -->
* Offset of up to 16 minutes due to differences in the earths rotation<!-- .element: class="fragment" -->

Note: Offset egalises itself throughout the year.



### UT/TAI

* Depends on atomic clocks.<!-- .element: class="fragment" -->
* Started 1955<!-- .element: class="fragment" -->
* Independent from solar orbit<!-- .element: class="fragment" -->
* Offset of 36 seconds as of 30th of June 2015 against UTC<!-- .element: class="fragment" -->

Note: Temps atomic international



### UTC

* <!-- .element: class="fragment" -->**U**niversal **T**ime - **C**oordinated
* Based on TAI<!-- .element: class="fragment" -->
* Started in 1961<!-- .element: class="fragment" -->
* adds (and possibly removes) leap seconds every now and then<!-- .element: class="fragment" -->
* offset between UTC and GMT max. 0.9 seconds<!-- .element: class="fragment" -->

Note: Started to become base of Timezone offsets from 1972. Negative Leapseconds




## Caveat

* <!-- .element: class="fragment" --> Timezone - geographical region of a country that shares the same coordinated time
* <!-- .element: class="fragment" --> Timezone-ID - identifier for the geographical region
* <!-- .element: class="fragment" --> Zonetime - The local time observed at a geographical region
* <!-- .element: class="fragment" --> Offset - Difference between ZoneTime and UTC
* <!-- .element: class="fragment" --> Named Offset - sum of geographical regions that shares the same offset

Note: Timezone-ID != Named Offset



## Easy?



## Let's add some complexity



## Timezones change

![timezones in russia](resources/timezones2010.svg)
<span class="credit">By Map_of_Russia_-_Time_Zones_(September_2011).svg: Lokal Profilderivative work: TZ master (talk) - Map_of_Russia_-_Time_Zones_(September_2011).svg, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=16761048</span>
![timezones in russia](resources/timezones2014.svg)
<span class="credit">By PlatonPskov, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=33798576</span>

Note: Crimean annexion in 2014, During WW2 in Germany, Political reasons (Venezuela 2014, turkey, Tonga,Cyprus)




## To make it even more complex



105 Years of<!-- .element: class="fragment" -->
## Summertime
## Daylight Saving Time<!-- .element: class="fragment" -->

Note: To save energy as because the human activity-cycle is offset to the daylight cycle
Summertime was "invented". Offsets the time 1 hour plus against default time-coordinate.
In germany in 1947 there was even 2 summertimes. Start of summertime is coordinated
but not the same in europe and america... 30 April 1916 Deutsches Reich



```php
(new DateTimeZone('Europe/Berlin'))->getTransitions();
/*  
 110 => [
    'ts' => 1616893200
    'time' => "2021-03-28T01:00:00+0000"
    'offset' => 7200
    'isdst' => true
    'abbr' => "CEST"
  ]
  111 => [
    'ts' => 1635642000
    'time' => "2021-10-31T01:00:00+0000"
    'offset' => 3600
    'isdst' => false
    'abbr' => "CET"
  ]
*/
```



## Daylight Saving Time

* starts at different times throughout the world<!-- .element: class="fragment" -->
* is at different seasons on the hemispheres<!-- .element: class="fragment" -->
* can occur more than once a year<!-- .element: class="fragment" -->
* does not need to be one hour offset<!-- .element: class="fragment" -->
* Be prepared for days with more or less than 24 hours!<!-- .element: class="fragment" -->

Note: Morroko has DST twice due to Ramadan



## Summary

* Timezones are political definitions<!-- .element: class="fragment" -->
* Timezones change<!-- .element: class="fragment" -->
* Offsets cover a stripe from northpole to southpole<!-- .element: class="fragment" -->
* Zonetimes are defined by the offset from UTC<!-- .element: class="fragment" -->
* DST may add or remove time to the Zonetime<!-- .element: class="fragment" -->
* DST does not change the timezone but the zonetime<!-- .element: class="fragment" -->



# &lt;/basics><?php
