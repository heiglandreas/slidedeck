# Authorize

Note:
No we've seen how to fetch data from a directory we can use that to authorize a user




## How?

Note:
Authorization can be done by checking whether a user belongs to a certain group or role.
There are two ways to add a user to a group in LDAP.




## Group-Membership

* Group-ID in User-Node
* User-ID in Group-Node

Note:
Group-ID in user-node is prefered way in AD.




```php
objectclass ( 2.5.6.17 NAME 'groupOfUniqueNames' SUP top STRUCTURAL
   MUST ( uniqueMember $ cn )
   MAY ( businessCategory $ seeAlso $ owner $ ou $ o $ description ) )
objectclass ( 1.3.6.1.1.1.2.2 NAME 'posixGroup' SUP top STRUCTURAL
	DESC 'Abstraction of a group of accounts'
	MUST ( cn $ gidNumber )
	MAY ( userPassword $ memberUid $ description ) )

memberOf => dn
```




```php
$con = ldap_connect('ldap://ldap.example.com');
ldap_bind($con);
$baseDN = 'o=phpugffm,c=de';
$filter = '(&(objectClass=group)(memberuid=heiglandreas'));
$attributes = ['cn'];
$handle = ldap_search($con, $baseDN, $filter, $attributes);
$result = ldap_get_result($con, $handle);
ldap_free_resul‡t($handle);
foreach ($results as $result) {
    if ($result['cn'] === $allowedGroup) {
        return true;
    }
}
return false;
```




```php
$baseDN     = 'o=phpugffm,c=de';
filter      = '(&(|(uid=%1$s)(mail=%1$s))(memberOf=%2$s)';
$con        = ldap_bind($ldapURI);
$attributes = array('dn');
ldap_set_option($con, 'LDAP_OPT_PROTOCOL_VERSION', 3);
ldap_bind($con);
$res = ldap_search($con, $baseDN, sprintf(
    $filter, $_POST['username'], $allowedGroupDn), $attributes);
if (0 === ldap_count_entries($con, $res) {
    throw new Exception('...');
}
$result = ldap_get_entries($con, $res);
// Not for productive use! Filter your input!
if (! ldap_bind($con, $result[0]['dn'], $_POST['password']);) {
    throw new Exception('...');
}
```
Note:
You'D be able to handle this one in one go. But it's complicated for multiple groups....




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