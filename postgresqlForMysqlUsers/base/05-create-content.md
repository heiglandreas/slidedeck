## Create Content



### Tables

```postgresplsql
CREATE TABLE foo (
  bar INTEGER PRIMARY KEY,
  baz INTEGER,
  text VARCHAR(255) 
);
```

Note: Are you missing something? Auto_increment! Backend!



## Noticed something?

> Postgres comes with <!-- .element: class="fragment" data-fragment-index="1" -->**one**<!-- .element: class="fragment" data-fragment-index="1" --> backend!<!-- .element: class="fragment" data-fragment-index="1" -->



### Tables

```postgresplsql
CREATE SEQUENCE foo_bar_seq;
CREATE TABLE foo (
  bar INTEGER PRIMARY KEY DEFAULT nextval('foo_bar_seq'),
  baz INTEGER,
  text VARCHAR(255) 
);
ALTER SEQUENCE foo_bar_seq OWNED BY foo.bar;
```



### Tables

```postgresplsql
CREATE TABLE foo (
  bar SERIAL,
  baz INTEGER,
  text VARCHAR(255) 
);
```



### Caveat!

* Sequences will fail when you add IDs manually!<!-- .element: class="fragment" data-fragment-index="1" -->
* Sequences will skip numbers on failed queries!<!-- .element: class="fragment" data-fragment-index="2" -->



### Datatypes

* <!-- .element: class="fragment" data-fragment-index="1" -->BOOLEAN
* <!-- .element: class="fragment" data-fragment-index="2" -->~~TINY*~~
* <!-- .element: class="fragment" data-fragment-index="3" -->~~UNSIGNED~~
* <!-- .element: class="fragment" data-fragment-index="4" -->FLOAT => REAL
* <!-- .element: class="fragment" data-fragment-index="5" -->*TEXT => TEXT
* <!-- .element: class="fragment" data-fragment-index="6" -->BLOB => BYTEA
* <!-- .element: class="fragment" data-fragment-index="7" -->DATETIME => TIMESTAMP



### Index

```postgresplsql
CREATE TABLE foo (
  bar SERIAL,
  baz INTEGER,
  text VARCHAR(255) 
);
CREATE UNIQUE INDEX ON foo(bar); 
```



### Index

```postgresplsql
CREATE INDEX ON foo USING gin NULLS LAST (text);
```



### Index

> Postgres allows you to specify how your index shall be created! 
 btree, hash, gist, spgist, gin, and brin, Asc or Desc, 
 NULLs first or last…

Note: Generalized Inverted Index - f.E. Fulltext search



### Type-Conversion

> PostgreSQL is stricter in type-checking than older MySQL-versions!


