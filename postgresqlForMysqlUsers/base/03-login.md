# Login



## MySQL

```bash
$ mysql -u root
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 478
Server version: 5.7.13 Homebrew

Copyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```



## PostgreSQL

```bash
$ postgresql -u root
-bash: postgresql: command not found
$ 
```



## PostgreSQL

```bash
$ psql -u root
psql: invalid option -- u
Try "psql --help" for more information.
$ 
```



## PostgreSQL

```bash
$ psql --help
psql is the PostgreSQL interactive terminal.

Usage:
  psql [OPTION]... [DBNAME [USERNAME]]

General options:
  -c, --command=COMMAND    run only single command (SQL or internal) and exit
  -d, --dbname=DBNAME      database name to connect to (default: "heiglandreas")
  -f, --file=FILENAME      execute commands from file, then exit
  -l, --list               list available databases, then exit
  -v, --set=, --variable=NAME=VALUE
                           set psql variable NAME to VALUE
                           (e.g., -v ON_ERROR_STOP=1)
  -V, --version            output version information, then exit
  -X, --no-psqlrc          do not read startup file (~/.psqlrc)
  -1 ("one"), --single-transaction
                           execute as a single transaction (if non-interactive)
  -?, --help[=options]     show this help, then exit
      --help=commands      list backslash commands, then exit
      --help=variables     list special variables, then exit

Input and output options:
  -a, --echo-all           echo all input from script
  -b, --echo-errors        echo failed commands
  -e, --echo-queries       echo commands sent to server
  -E, --echo-hidden        display queries that internal commands generate
  -L, --log-file=FILENAME  send session log to file
  -n, --no-readline        disable enhanced command line editing (readline)
  -o, --output=FILENAME    send query results to file (or |pipe)
  -q, --quiet              run quietly (no messages, only query output)
  -s, --single-step        single-step mode (confirm each query)
  -S, --single-line        single-line mode (end of line terminates SQL command)

Output format options:
  -A, --no-align           unaligned table output mode
  -F, --field-separator=STRING
                           field separator for unaligned output (default: "|")
  -H, --html               HTML table output mode
  -P, --pset=VAR[=ARG]     set printing option VAR to ARG (see \pset command)
  -R, --record-separator=STRING
                           record separator for unaligned output (default: newline)
  -t, --tuples-only        print rows only
  -T, --table-attr=TEXT    set HTML table tag attributes (e.g., width, border)
  -x, --expanded           turn on expanded table output
  -z, --field-separator-zero
                           set field separator for unaligned output to zero byte
  -0, --record-separator-zero
                           set record separator for unaligned output to zero byte

Connection options:
  -h, --host=HOSTNAME      database server host or socket directory (default: "local socket")
  -p, --port=PORT          database server port (default: "5432")
  -U, --username=USERNAME  database user name (default: "heiglandreas")
  -w, --no-password        never prompt for password
  -W, --password           force password prompt (should happen automatically)

For more information, type "\?" (for internal commands) or "\help" (for SQL
commands) from within psql, or consult the psql section in the PostgreSQL
documentation.

Report bugs to <pgsql-bugs@postgresql.org>.
$
```



## PostgreSQL

```bash
$ psql -U root
psql: FATAL:  role "root" does not exist
```



## PostgreSQL

* Role-based Access-Permissions
* Role can be a user or a group.
* Roles can be member of other roles
* Database-Objects are owned by roles



## PostgreSQL

```bash
$ psql -U postgres
psql: FATAL:  Peer authentication failed for user "postgres"
```



## PostgreSQL

![WTF](../base/img/you-serious-wtf-meme-baby-face.jpg)



## PostgreSQL

* Roles ≠ Systemusers



## PostgreSQL

```bash
$ sudo -u postgres psql
psql (9.5.6)
Type "help" for help.

postgres=#
```



## PostgreSQL

![Kermit](../base/img/kermit.gif)



## PostgreSQL

```php
$ php -a
Interactive shell

php > new PDO('pgsql:host=127.0.0.1;port=5432', 'postgres', '');
PHP Warning:  Uncaught PDOException: SQLSTATE[08006] [7] server closed the connection unexpectedly
	This probably means the server terminated abnormally
	before or while processing the request. in php shell code:1
Stack trace:
#0 php shell code(1): PDO->__construct('pgsql:host=loca...', 'postgres', '')
#1 {main}
  thrown in php shell code on line 1
```



## PostgreSQL

```apacheconfig
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

#listen_addresses = 'localhost'         # what IP address(es) to listen on;
                                        # comma-separated list of addresses;
                                        # defaults to 'localhost'; use '*' for all
                                        # (change requires restart)
port = 5432                             # (change requires restart)
max_connections = 100                   # (change requires restart)
```
`postgresql.conf`

Note: You'll need to change localhost to * to listen on TCP!



## PostgreSQL

```apacheconfig
# Database administrative login by Unix domain socket
local   all             postgres                                peer

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     peer
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
# Allow replication connections from localhost, by a user with the
# replication privilege.
#local   replication     postgres                                peer
#host    replication     postgres        127.0.0.1/32            md5
#host    replication     postgres        ::1/128                 md5
```
`pg_hba.conf`

Note: Either add the user running PHP here or change the method to md5 to allows DB-based roles



## PostgreSQL

```php
$ php -a
Interactive shell

php > new PDO('pgsql:host=127.0.0.1;port=5432', 'postgres', 'postgres');
PHP Warning:  Uncaught PDOException: SQLSTATE[08006] [7] FATAL:  password authentication failed for user "postgres"
FATAL:  password authentication failed for user "postgres" in php shell code:1
Stack trace:
#0 php shell code(1): PDO->__construct('pgsql:host=127....', 'postgres', 'postgres')
#1 {main}
  thrown in php shell code on line 1
```



## Create Role

```bash
$ sudo -u postgres psql
psql (9.5.6)
Type "help" for help.

postgres=# CREATE ROLE admin SUPERUSER LOGIN PASSWORD 'admin';
CREATE ROLE
postgres=#
```



## Create Role

```bash
$ php -a
Interactive shell

php > new PDO('pgsql:host=127.0.0.1;port=5432;dbname=postgres', 'admin', 'admin');
php >
```



## PostgreSQL

![Kermit](../base/img/kermit.gif)




## Drop Role

```bash
$ sudo -u postgres psql
psql (9.5.6)
Type "help" for help.

postgres=# DROP ROLE admin;
DROP ROLE
postgres=#
```



## See roles

```sql
SHOW GRANTS;
```



## See roles

```bash
$ sudo -u postgres psql
psql (9.5.6)
Type "help" for help.

postgres=# \du

                                   List of roles
 Role name |                         Attributes                         | Member of
-----------+------------------------------------------------------------+-----------
 admin     | Superuser                                                  | {}
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```

Note: PostgreSQL has **a lot** of such metacommands



## Metacommands

```bash
$ sudo -u postgres psql
psql (9.5.6)
Type "help" for help.

postgres=# \?
```



## Further reading:

https://www.postgresql.org/docs/9.6/static/user-manag.html
