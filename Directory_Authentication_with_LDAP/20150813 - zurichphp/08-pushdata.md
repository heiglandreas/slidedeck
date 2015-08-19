# Manipulating data

Note:
until now we've just retrieved data from an LDAP-Server. Thats what LDAP is good at!
Didn't matter which LDAP-Server. Modifying is something a DIrectory-Service is bad at (slow).
And we might have to know something about the setup.



## Caveat

* Setup:
  * Master-Slave setup: Changes are only allowed on a dedicated master-server
  * Multi-Master setup: Changes are possible on every server
* Distribution of changes might take some time.
* Replication might break!
* Modifying normaly needs a bind (login)




## Adding data

Note:
We'll see most of the stuff we've done in the beginning using the shell.




```php
$con = ldap_connect('ldap://ldap-master.example.com');
ldap_bind($con, $userDN, $password);
$dn = 'uid=doejane,o=phpugffm,c=de'
$values = array(
    'obectClass' => ['posixAccount', 'organizationalPerson'],
    'cn' => 'Jane Doe',
    'uid' => 'doejane',
    'sn' => 'Doe',
    'uidNumber' => 2,
    'gidNUmber' => 1000,
    'homeDirectory' => '/home/doejane',
)
ldap_add($con, $dn, $values);
```
Note:
Forgotten the email.....




## Modifying data

```php
$con = ldap_connect('ldap://ldap-master.example.com');
ldap_bind($con, $userDN, $password);
$dn = 'uid=doejane,o=phpugffm,c=de';
$values = array(
    'mail' => array(
        'j.deo@phpugffm.de',
        'doejane@phpugffm.de
    )
);
ldap_mod_add($con, $dn, $values);
```
Note:
Wrong Mail-address....




```php
$con = ldap_connect('ldap://ldap-master.example.com');
ldap_bind($con, $userDN, $password);
$dn = 'uid=doejane,o=phpugffm,c=de';
$values = array(
    'mail' => array(
        'j.doe@phpugffm.de',
        'doejane@phpugffm.de
    )
);
ldap_mod_replace($con, $dn, $values);
```
Note:
This replaces the complete 'mail'-entry!




```php
$con = ldap_connect('ldap://ldap-master.example.com');
ldap_bind($con, $userDN, $password);
$dn = 'uid=doejane,o=phpugffm,c=de';
$values = array(
    'mail' => array(
        'doejane@phpugffm.de
    )
);
ldap_mod_del($con, $dn, $values);
```
Note:
So replacing just a single entry for an attribute requires you to do a delete folowed by an add




```php
$con = ldap_connect('ldap://ldap-master.example.com');
ldap_bind($con, $userDN, $password);
$dn = 'uid=doejane,o=phpugffm,c=de';
ldap_delete($con, $dn);
```
Note:

And finaly deleting an entry.....





```php
ldap_close($dn);
```
Note:
Clean up after yourself!

That's it.