## Migrate

> You want to migrate to PostgreSQL?

https://en.wikibooks.org/wiki/Converting_MySQL_to_PostgreSQL



## Migrate 

* Export via `mysqldump --compatible=postgresql`
* Use converter-script on dump
* Prepend dump with `SET standard_conforming_strings = 'off'; SET backslash_quote = 'on';`
* Import into PostgreSQL
* Hope and Pray!
* Rinse and Repeat



## Migrate, kind of…

Use MySQL (and others) as backend to PostgreSQL with Foreign Data Wrappers

https://github.com/EnterpriseDB/mysql_fdw   
