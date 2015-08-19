# Searching Data




## LDAP-Filter
Note:
How to find anything




```php
attributename=value
```
Note:
You can also use value* to find things beginning with a certain string.
use '*' to find attributes with any value.




## Combine filters

```php
"(|(attribute1=value)(attribute2=value))"
```
```php
"(&(attribute1=value)(attribute2=value))"
```
```php
"(!(attribute1=value))"
```

Note:
extend at you liking!




## Search-base

Note:
Where do we start to search for an entry? Remember the examples at the beginning?




```plain
       ou = liip
                \
 ou = internal - o = zurichphp
                              \
      ou = zurich - o = liip - c = ch
                   /
        ou = geneva
        (external)
```
Note:
Where do we want to start searching in the tree? And do we want to search the complete subtree or just that one level?





```bash
$ ldapsearch -H ldap://ldap.example.com -b o=phpugffm,c=de \
 "uid=heiglandreas" mail
```





```php
$con = ldap_connect('ldap://ldap.example.com');
ldap_set_option($con, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_bind($con);

$baseDN = 'o=phpugffm,c=de';
$filter = '(&(objectClass=posixAccount)(uid=heiglandreas'));
$attributes = ['mail', 'sn'];
$handle = ldap_search($con, $baseDN, $filter, $attributes);
$results = ldap_count_entries($con, $handle);
$result = ldap_get_result($con, $handle);
ldap_free_result($handle);
```
Note:
This will give you all results up to the servers limit. THis will also search the complete subtree




## Result-set




```php
array(
    'count' => 1,
    0 => array(
        'dn' => 'uid=heiglandreas,o=phpugffm,c=de',
        'count' => 2,
        0 => 'mail',
        1 => 'cn',
        'mail' => array(
            'count' => 1,
            0 => 'andreas@phpugffm.de',
        ),
        'sn' => array(
            'count' => 1,
            0 => 'Heigl',
         ),
    ),
)
```



## Sorting

Don't do it (yet)!

There's going to be real sorting in PHP7.1

Note: Or use Zend\Ldap f.i.




## Paginated results

Are possible but currently not sorted, so not really interesting.

This will change with PHP7.1 ;)

Note:
This might be abel to get around the server side size limit. Sorting is not possible!
Only with LDAPv3 possible. RFC 2696