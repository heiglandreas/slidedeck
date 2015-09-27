# Searching Data




## LDAP-Filter

<pre><code class="php hljs">attributename=value</code></pre><!-- .element: class="fragment" -->
<pre><code class="php hljs">attributename=value*</code></pre><!-- .element: class="fragment" -->

Note:
How to find anything - You can also use value* to find things beginning with a certain string.
use '*' to find attributes with any value. No, there's no such thing as ? or +!




## Combine filters

<pre><code class="php hljs">(|(attribute1=value)(attribute2=value))</code></pre><!-- .element: class="fragment" -->
<pre><code class="php hljs">(&(attribute1=value)(attribute2=value))</code></pre><!-- .element: class="fragment" -->
<pre><code class="php hljs">(!(attribute1=value))</code></pre><!-- .element: class="fragment" -->

Note:
extend at you liking!




## Search-base

Note:
Where do we start to search for an entry? Remember the examples at the beginning?




## Search-base

```plain
Stephan Hochdörfer
              \
Andreas Heigl - PHP-Usergroup FFM
                                  \
  Mihail Irintchev - Bulgaria-PHP - Usergroups
                                  /
            Cal Evans - Nomad PHP
```
Note:
Where do we want to start searching in the tree? And do we want to search the complete subtree or just that one level?




```php
$con = ldap_connect('ldap://ldap.example.com');
ldap_set_option($con, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_bind($con);

$baseDN = 'cn=phpugffm,cn=usergroups';
$filter = '(&(objectClass=posixAccount)(uid=heiglandreas'));
$attributes = ['mail', 'sn'];
$handle = ldap_search($con, $baseDN, $filter, $attributes);
//$handle = ldap_list($con, $baseDN, $filter, $attributes);
$results = ldap_count_entries($con, $handle);
$result = ldap_get_result($con, $handle);
ldap_free_result($handle);
```
Note:
This will give you all results up to the servers limit.




## Result-set




```php
array(
    'count' => 1,
    0 => array(
        'dn' => 'uid=heiglandreas,cn=phpugffm,cn=usergroups',
        'count' => 2,
        0 => 'mail',
        1 => 'sn',
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