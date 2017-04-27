## Creating a Database



### Databases

* <!-- .element: class="fragment" data-fragment-index="1" -->MySQL - Connect to the MySQL-Server, then `use`
* <!-- .element: class="fragment" data-fragment-index="2" -->PostgreSQL - Connect to a database



![WTF](../base/img/Wait-What-Meme-11.jpg)



### Databases
#### MySQL

```mysql
SHOW DATABASES;
```



### Databases
#### PostgreSQL

```postgresql
\l
                             List of databases
   Name    |  Owner   | Encoding | Collate | Ctype |   Access privileges
-----------+----------+----------+---------+-------+-----------------------
 postgres  | postgres | LATIN1   | en_US   | en_US |
 template0 | postgres | LATIN1   | en_US   | en_US | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 template1 | postgres | LATIN1   | en_US   | en_US | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
(3 rows)
```



### Database

* <!-- .element: class="fragment" data-fragment-index="1" -->**postgres** is created on installation
* <!-- .element: class="fragment" data-fragment-index="2" -->**template1** is the default template for all other databases to come.
* <!-- .element: class="fragment" data-fragment-index="3" -->**template0** is also a template and initially equal to template1
* <!-- .element: class="fragment" data-fragment-index="4" -->You should **not** alter template0!



### Create Database

```sql
postgres=# CREATE DATABASE my_new_db WITH 
OWNER admin TEMPLATE template0 ENCODING 'UTF8' 
LC_CTYPE 'en_US.UTF8' LC_COLLATE 'en_US.UTF8';
CREATE DATABASE
postgres=# \l
                                 List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
-----------+----------+----------+------------+------------+-----------------------
 my_new_db | admin    | UTF8     | en_US.UTF8 | en_US.UTF8 |
 postgres  | postgres | LATIN1   | en_US      | en_US      |
 template0 | postgres | LATIN1   | en_US      | en_US      | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | LATIN1   | en_US      | en_US      | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
(4 rows)
```



### Change the default template to UTF8

```sql
update pg_database set encoding = pg_char_to_encoding('UTF8') where datname = 'template1';
update pg_database set datcollate = 'en_US.UTF8' where datname = 'template1';
update pg_database set datctype = 'en_US.UTF8' where datname = 'template1';
```



### Remove Database

```sql
postgres=# DROP DATABASE my_new_db;
DROP DATABASE
```

* Can only be done by a superuser or the owner<!-- .element: class="fragment" data-fragment-index="1" -->
* You can't be connected to the database in question…<!-- .element: class="fragment" data-fragment-index="2" -->



### Further reading

https://www.postgresql.org/docs/9.6/static/managing-databases.html
