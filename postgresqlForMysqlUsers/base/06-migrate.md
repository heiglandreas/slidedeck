## Migrate

> You want to migrate to PostgreSQL?

[en.wikibooks.org/wiki/Converting_MySQL_to_PostgreSQL](https://en.wikibooks.org/wiki/Converting_MySQL_to_PostgreSQL)<!-- .element: class="fragment" data-fragment-index="1" -->



## Migrate 

* Export via <!-- .element: class="fragment" data-fragment-index="1"-->`mysqldump --compatible=postgresql`<!-- .element: class="fragment" data-fragment-index="1"-->
* Use converter-script on dump<!-- .element: class="fragment" data-fragment-index="2"-->
* Prepend dump with <!-- .element: class="fragment" data-fragment-index="3"-->`SET standard_conforming_strings = 'off'; SET backslash_quote = 'on';`<!-- .element: class="fragment" data-fragment-index="3"-->
* Import into PostgreSQL via<!-- .element: class="fragment" data-fragment-index="4" --> `psql -f import.sql`<!-- .element: class="fragment" data-fragment-index="4" -->
* Hope and Pray!<!-- .element: class="fragment" data-fragment-index="5" -->
* Rinse and Repeat<!-- .element: class="fragment" data-fragment-index="6" -->



## Migrate, kind of…

Use MySQL (and others) as backend to PostgreSQL with Foreign Data Wrappers

https://github.com/EnterpriseDB/mysql_fdw   
