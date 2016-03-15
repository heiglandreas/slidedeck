# Multibyte Zeichensätze





# Unicode

* Ein Zeichensatz  <!-- .element: class="fragment" -->
* Verschiedene Codierungen  <!-- .element: class="fragment" -->




# Unicode

## Zeichenumfang

* 1991 Version 1.0.0 mit 7161 Zeichen  <!-- .element: class="fragment" -->
* Juni 2015 Version 8.0 vom Juni 2015 mit 120.737 Zeichen  <!-- .element: class="fragment" -->
* insgesamt sind 1.114.112 Zeichen möglich.  <!-- .element: class="fragment" -->



# Unicode

## Kompatibilität

* U+0000 - U+007F => ASCII  <!-- .element: class="fragment" -->
* U+0080 - U+00FF => ISO-8859-1  <!-- .element: class="fragment" -->



# Unicode

## Codierungen

* UTF-8  <!-- .element: class="fragment" -->
* UTF-16  <!-- .element: class="fragment" -->
* UTF-32  <!-- .element: class="fragment" -->
Note: Zeichensatz/charset = Unicode: Codierung/encoding = UTF8, UTF16 etc!



# UTF-32

* Jedes Zeichen hat 4 Byte <!-- .element: class="fragment" -->
* einfach <!-- .element: class="fragment" -->
* Speicherintensiv <!-- .element: class="fragment" -->
* nicht Streamsicher <!-- .element: class="fragment" -->




# UTF-16

* Jedes Zeichen nutzt 2 Byte <!-- .element: class="fragment" -->
* einfach <!-- .element: class="fragment" -->
* nur 65.536 Zeichen kodierbar. <!-- .element: class="fragment" -->
* Codiert nur die meistgebrauchten Zeichen aus Unicode <!-- .element: class="fragment" -->
* Nur Zeichen von U+0000 - U+FFFF möglich <!-- .element: class="fragment" -->
* Big- oder LittleEndian? <!-- .element: class="fragment" -->
* MacOS-X, Windows, Java, .Net … <!-- .element: class="fragment" -->
* Nicht Streamsicher <!-- .element: class="fragment" -->



# UTF-8

* Jedes Zeichen ist zwischen 1 und 4 Byte lang <!-- .element: class="fragment" -->
* Streamsicher, da Start und Folgebytes unterschieden werden können <!-- .element: class="fragment" -->
* Alle Unicode-Zeichen codierbar (und mehr, bis zu 2^42 - 4.398.046.511.104) <!-- .element: class="fragment" -->
* Platzsparend, da oft nur 1 Byte gespeichert werden muss (Lateinische Schriften) <!-- .element: class="fragment" -->
* Linux, IETF <!-- .element: class="fragment" -->




# UTF-8

* Startbyte: 0xxx xxxx oder 11xx xxxx <!-- .element: class="fragment" -->
* Folgebyte: 10xx xxxx <!-- .element: class="fragment" -->
* 0xxx xxxx => Einbyte-Zeichen<!-- .element: class="fragment" -->
* 1xxx xxxx => Mehrbyte-Zeichen<!-- .element: class="fragment" -->
* Anzahl der 1 zeigt die Anzahl der Gesamt-Bytes an.<!-- .element: class="fragment" -->




# UTF-8

* 00-7F ein Byte langes Zeichen (ASCII)<!-- .element: class="fragment" -->
* 80-BF 2., 3. oder 4. Byte einer mehrbyte-Sequenz<!-- .element: class="fragment" -->
* C2-DF Start einer 2 Byte langen Sequenz<!-- .element: class="fragment" -->
* E0-EF Start einer 3 Byte langen Sequenz<!-- .element: class="fragment" -->
* F0-F4 Start einer 4 Byte langen Sequenz<!-- .element: class="fragment" -->



# UTF-8

   | UTF-8 | Binär | Unicode | Fehler
---|-------|-------|---------|--------
 y | 0x79  | 0111 1001 | U+0079 / 0111 1001 |  |
 ä | 0xC3 0xA4 | <span style="color:green">11</span><span style="color:white">0000</span><span style="color:gray">11</span> <span style="color:red">10</span><span style="color:gray">100100</span> | U+00E4 / 11100100 | Ã¤ |



# &lt;/Theorie&gt;&lt;?php