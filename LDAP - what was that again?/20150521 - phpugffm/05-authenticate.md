# Authenticate

Note:
previously we've edited the directory without loging in.




## bind

(No, not the DNS-server)
Note:
Before we can retrieve information we have to bind to the server using a DN and a password.




```php
$con = ldap_connect($ldapURI);

$bindDN = 'uid=heiglandreas,o=phpugffm,c=de';
$password = 'mySecretPassword';
if (! ldap_bind($con, $bindDN, $password)) {
    ldap_get_option($con, LDAP_OPT_DIAGNOSTIC_MESSAGE, $extendedError);
    throw new Exception(sprintf(
        '[%s] %s (%s)',
        ldap_errno($con),
        ldap_error($con),
        $extendedError
    ));
}
```



## Caveat

* Beware of empty passwords!
* Beware of connection issues!
* Password is given in clear!
* Unclear Error-Messages on unsuccessful bind!

Note:
Benefit: no prehasing of the password as it's done on the server side. server-admin
takes care of the correct way of hasing and whether the password has expired etc.
Depending on the backend you can also use email-address or the AD-ID to log in.




```php
$con = ldap_connect($ldapURI);

if (! ldap_bind($con)) {
    ldap_get_option($con, LDAP_OPT_DIAGNOSTIC_MESSAGE, $extendedError);
    throw new Exception(sprintf(
        '[%s] %s (%s)',
        ldap_errno($con),
        ldap_error($con),
        $extendedError
    ));
}
```

Note:
Anonymous bind. No DN is given. This is a special case. The server has to alow anonymous bind




## Scenario




Log in a user using her user-ID **or** email-address. (Well, and password, obviously)




* Bind as any user
* Search for the user with given value in user-ID or email-address attribute <!-- .element: class="fragment" -->
* Bind as found user with given password <!-- .element: class="fragment" -->




```php
$baseDN     = 'o=phpugffm,c=de';
$filter     = '(|(uid=%1$s)(mail=%1$s))';
$con        = ldap_connect($ldapURI);
$attributes = array('dn');
ldap_set_option($con, 'LDAP_OPT_PROTOCOL_VERSION', 3);
ldap_bind($con);
$res = ldap_search($con, $baseDN,
           sprintf($filter, $_POST['username']), $attributes);
$result = ldap_get_entries($con, $res);
// Not for productive use! Filter your input!
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