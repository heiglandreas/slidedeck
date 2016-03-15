## MySQL

* Server <!-- .element: class="fragment" -->
* Client <!-- .element: class="fragment" -->
* Verbindung <!-- .element: class="fragment" -->
* Datenbank <!-- .element: class="fragment" -->
* Tabelle <!-- .element: class="fragment" -->

Note: Jeder einzelne dieser Bestandteile hat eine eigene Kodierung.



## MySQL

```ini
[mysqld]
default-collation=utf8_bin
character-set-server=utf8
collation-server=utf8_bin
default-character-set=utf8

[client]
default-character-set=utf8
```



## MySQL

   | Client | Verbindung | Server
---|--------|------------|--------
Collation | UTF8 | ISO-8859-1 | UTF-8
Char | ä | Ã¤ | Ã¤
Bin | 11000011 10100100 | 11000011 10100100 | 11000011 10000011 11000010 10100100




## MySQL

```sql
SET NAMES 'utf8' COLLATE 'utf8_unicode_ci';
```