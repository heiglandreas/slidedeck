## Create Content



### Tables

```postgresplsql
CREATE TABLE foo (
  bar INTEGER PRIMARY KEY,
  baz INTEGER,
  text VARCHAR(255) 
);
```

Note: Are you missing something? Auto_increment!



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



### Tabels

```postgresplsql
CREATE TABLE foo (
  bar SERIAL,
  baz INTEGER,
  text VARCHAR(255) 
);
```



### Caveat!

* Sequences will fail when you add IDs manually!
* Sequences will skip numbers on failed queries



### Datatypes

* BOOLEAN
* ~~TINY*~~
* ~~UNSIGNED~~
* FLOAT => REAL
* *TEXT => TEXT
* BLOB => BYTEA
* DATETIME => TIMESTAMP



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

> Postgres allows you to specify how your index shall be created! 
 btree, hash, gist, spgist, gin, and brin, Asc or Desc, 
 NULLs first or last…

```postgresplsql
CREATE INDEX ON foo USING gin NULLS LAST (text);
```

Note: Generalized Inverted Index - f.E. Fulltext search



### Type-Conversion

> PostgreSQL is stricter in type-checking than older MySQL-versions!


