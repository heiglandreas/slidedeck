# Authenticate

Note: As a directory contains Login-Information the mostly used feature for LDAP in PHP is authentication




## bind

(No, not the DNS-server)<!-- .element: class="fragment" -->
Note:
Before we can retrieve information we have to bind to the server




##bind

```php
$con = ldap_connect($ldapURI);

if (! ldap_bind($con)) {
    throw new Exception("no way!");
}
```

Note: Wait, We didn't even provide credentials.... Stop Fix it. Oh, and the server has to allow it. No way f.i with ActiveDirectory on WindowsServer2008




##bind

```php
$con = ldap_connect($ldapURI);

$bindDN = 'cn=heiglandreas,dc=phpugffm,dc=usergroups';
$password = 'mySecretPassword';
if (! ldap_bind($con, $bindDN, $password)) {
    throw new Exception('no way!');
}
```



## Caveat

* Beware of empty passwords!<!-- .element: class="fragment" -->
* Beware of connection issues!<!-- .element: class="fragment" -->
* Password is given in clear!<!-- .element: class="fragment" -->
* Unclear Error-Messages on unsuccessful bind!<!-- .element: class="fragment" -->
* bindDN has to be known<!-- .element: class="fragment" -->

Note:
Benefit: no prehasing of the password as it's done on the server side. server-admin
takes care of the correct way of hasing and whether the password has expired etc.
Depending on the backend you can also use email-address or the AD-ID to log in.




## User-Story

Log in as user with user-ID **or** email-address.
(Well, and password, obviously)



## How to do it?

* Bind as a known user<!-- .element: class="fragment" -->
* Search for the user with given value in user-ID or email-address attribute <!-- .element: class="fragment" -->
* Bind as found user with given password <!-- .element: class="fragment" -->




```php
$baseDN     = 'dc=phpugffm,dc=usergroups';
$filter     = sprintf('(|(uid=%1$s)(mail=%1$s))', $_POST['username']);
// Not for productive use! Filter your input!
$attributes = array('dn');
$con        = ldap_connect($ldapURI);
ldap_set_option($con, 'LDAP_OPT_PROTOCOL_VERSION', 3);
ldap_bind($con);
$res = ldap_search($con, $baseDN, $filter, $attributes);
$result = ldap_get_entries($con, $res);
if (! ldap_bind($con, $result[0]['dn'], $_POST['password']);) {
    throw new Exception('...');
}
```

Note:
Not for productive use!!!
I've introduced three things here without telling you about first.
first one is searching, second one is filters and the third one is the search-base.
So let's cover those before we see examples of authentication you shouldn't use and some authorization
</section>