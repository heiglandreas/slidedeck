<img src="img/unisex-asphault.png" alt="PHP6-Certified" style="background:none; border-width:0px; box-shadow: 0 0 0;">

Note: PHP6 sollte unicode enthalten, zu Aufwending, daher jetzt PHP7: native OHNE unicode-unterstützung! PHP ist nicht Unicode-sicher.
Ist das ein Problem?




<img src="img/Bildschirmfoto 2016-03-12 um 18.04.30.png" alt="Stadt Münster"/>





<img src="img/Bildschirmfoto 2016-03-12 um 18.10.35.png" alt="Apple deutsch"/>





<img src="img/Bildschirmfoto 2016-03-12 um 18.10.13.png" alt="Apple russian"/>

Note: Problem sind z.B. String-Operationen wie strlen oder strpos oder darstellung
einzelzeichen eines mehrbyte zeichens



<img src="img/Bildschirmfoto 2016-03-12 um 18.21.57.png" alt="Hofpfisterei"/>




## Was tun…

* default_charset "UTF-8" (Default seit PHP5.6) <!-- .element: class="fragment" -->
* Content-type: text/html; charset=utf-8 <!-- .element: class="fragment" -->
* &lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt; und &lt;form accept-charset = "utf-8"&gt;<!-- .element: class="fragment" -->
* CREATE DATABASE ... DEFAULT CHARACTER SET utf8 COLLATE utf8 ... ENGINE ... CHARSET=utf8 COLLATE=utf8_unicode_ci<!-- .element: class="fragment" -->
* SET NAMES 'utf8' COLLATE 'utf8_unicode_ci'<!-- .element: class="fragment" -->
* mb_string Funktionen<!-- .element: class="fragment" -->
* mb-Reguläre Ausdrücke<!-- .element: class="fragment" -->
* u-Modifikator für preg-RegEx<!-- .element: class="fragment" -->




## mb_string

* MultiByte-Funktionen <!-- .element: class="fragment" -->
* Ersetzen "normale" String-Funktionen <!-- .element: class="fragment" -->
* Ermöglichen Umgang mit UTF-8 <!-- .element: class="fragment" -->

Überladen von Standard-Funktionen für Mail (1), String (2) und RegEx-Funktionen (4) mittles mbstring.overload = n<!-- .element: class="fragment" -->



## iconv

Konvertierung aus einem beliebigen Zeichensatz nach UTF-8

```php
<?php
$sourceEnc = mb_detect_encoding($string);
$targetEnc = ‘UTF8//TRANSLIT//IGNORE‘;
echo iconv($sourceEnc,$targetEnc,$string);
```
