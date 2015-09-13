# Authorize

Note:
No we've seen how to fetch data from a directory we can use that to authorize a user




## How?

Note:
Authorization can be done by checking whether a user belongs to a certain group or role.
There are two ways to add a user to a group in LDAP.




## Group-Membership

* Group-ID in User-Node<!-- .element: class="fragment" -->
* User-ID in Group-Node<!-- .element: class="fragment" -->

Note: Let's assume the userentries are available as entries in the group-entry
Group-ID in user-node is prefered way in AD.




```php
$con = ldap_connect('ldap://ldap.example.com');
ldap_bind($con);
$baseDN = 'cn=phpugffm,cn=usergroups';
$filter = '(&(objectClass=group)(memberuid=heiglandreas'));
$attributes = ['cn'];
$handle = ldap_search($con, $baseDN, $filter, $attributes);
$result = ldap_get_result($con, $handle);
ldap_free_resul‡t($handle);
foreach ($results as $result) {
    if ($result['cn'][0] == 'MyAllowedGroupname') {
        return true;
    }
}
```



## Don't!

Note:
I'Ve promised you a way to NOT authenticate




```php
$dn   = 'uid=heiglandreas,o=phpugffm,c=de';
$attr = 'userpassword';
if (true !== ldap_compare($con, $dn, $attr, $value)) {
    throw new Exception('...');
}
```

Note:
Why is this bad behaviour? We compare the password by ourself and can't use the LDAP-implemented features
like password-policies. We have to know the password hashing and what happens if the LDAP-admin uses something different?
Or we have to store a second password. That will not be changed using the default mechanisms....




## just don't!
