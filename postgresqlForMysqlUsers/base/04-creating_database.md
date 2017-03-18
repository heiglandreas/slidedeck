# Creating a Database



## Databases

* MySQL - Connect to the MySQL-Server, then `use`
* PostgreSQL - Connect to a database



![WTF](../base/img/Wait-What-Meme-11.jpg)



## Databases
### MySQL

```mysql
SHOW DATABASES;
```



## Databases
### PostgreSQL

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



## Database

* **postgres** is created on installation
* **template1** is the default template for all other databases to come.
* **template0** is also a template and initially equal to template1
* You should **not** alter template0!



## Create Database

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



## Noticed something?

> Postgres comes with **one** backend. No need to specify InnoDB, MyISAM or whatnot!!



## Change the default template to UTF8

```sql
update pg_database set encoding = pg_char_to_encoding('UTF8') where datname = 'template1';
update pg_database set datcollate = 'en_US.UTF8' where datname = 'template1';
update pg_database set datctype = 'en_US.UTF8' where datname = 'template1';
```



## Remove Database

* Can only be done by a superuser or the owner
* You can't be connected to the database in question…

```sql
postgres=# DROP DATABASE my_new_db;
DROP DATABASE
```



## Further reading

https://www.postgresql.org/docs/9.6/static/managing-databases.html
