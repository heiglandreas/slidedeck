## Passwords



> What can I say…




> Try to avoid them!



> Use external sources

* <!-- .element: class="fragment" --> OAuth
* <!-- .element: class="fragment" --> SAML
* <!-- .element: class="fragment" --> LDAP
* <!-- .element: class="fragment" --> Kerberos
* <!-- .element: class="fragment" --> Provide different providers

Note: Not everyone is on twitter (china) or wants to use facebook



> Don't roll your own crypto!




> **always** hash passwords

* <!-- .element: class="fragment" --> Password-Hashing API in PHP




> Avoid leaking cleartext passwords!




* Don't force password requirements apart from min-length
* <!-- .element: class="fragment" --> Show information about password quality
* <!-- .element: class="fragment" --> Encourage users to use passphrases
* <!-- .element: class="fragment" --> Allow users to use password-managers
* <!-- .element: class="fragment" --> *never* limit password length (within reasonable sizes)
* <!-- .element: class="fragment" --> Ditch required password resets every x timeintervals




[![XKCD 936](../resources/password_strength.png)](https://www.xkcd.com/936/)




### Resources

* [National Institute of Standards & Technology](https://pages.nist.gov/800-63-3/sp800-63b.html#appA)
* [National Cyber Security Center](https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords)
* [Have I been Pwned](https://haveibeenpwned.com/)
* [Packages for Have I been Pwned](https://packagist.org/?query=haveibeen)
* [Password Storage Field Study](https://net.cs.uni-bonn.de/fileadmin/user_upload/naiakshi/Naiakshina_Password_Study.pdf)
* [Twitter-Thread on the field Study](https://twitter.com/PwdRsch/status/1103021803503607808)
* [OWASP-Cheat-Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md)