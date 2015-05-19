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
      ou = bbq
               \
 ou = internal - o = phpugffm
                              \
ou = frankfurt - o = cocomore - c = de
               /
     ou = genf
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
How to get only entries from one level?




```php
$handle = ldap_list($con, $baseDN, $filter, $attributes);
```
Note:
This will get a list of results that are immediately below the baseDN.
There are also ways to handle returning only attribute-names or setting a timeout
'list' is originaly a DAP-command which is 'reimplemented' in the php-ldap-extension




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




```php
$attributes = ['mail', 'sn']
$handle = ldap_search($con, $baseDN, $filter, $attributes);
ldap_sort($con, $handle, 'sn');
$result = ldap_get_entries($con, $handle);
```
Note:
Let's see what happens with a little change.




```php
$attributes = ['mail', 'uid']
$handle = ldap_search($con, $baseDN, $filter, $attributes);
ldap_sort($con, $handle, 'sn');
$result = ldap_get_entries($con, $handle);
```
Note:
What will happen here? No sorting! the attribute to sort by has to be in the returned attributes!
LDAP fetches the result from the server and sorts clientside. So no knowledge of unavailable fields!





## Paginated results




```php
$pageSize = 100;
$cookie = '';
ldap_set_option($con, LDAP_OPT_PROTOCOL_VERSION, 3);
do {
    ldap_control_paged_result($con, $pageSize, true, $cookie);
    $result  = ldap_search($con, $baseDn, $filter, $attributes);
    $entries = ldap_get_entries($con, $result);
    foreach ($entries as $entry) {
        echo $entry['dn'] . PHP_EOL;
    }
    ldap_control_paged_result_response($con, $result, $cookie);
} while($cookie !== null && $cookie != '');
ldap_control_paged_result($con, 0); // Reset!
```
Note:
This might be abel to get around the server side size limit. Sorting is not possible!
Only with LDAPv3 possible. RFC 2696