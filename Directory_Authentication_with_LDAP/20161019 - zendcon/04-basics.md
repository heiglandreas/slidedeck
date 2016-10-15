# LDAP Basics

<ul>
<li class="fragment">Directory contains <strong>Entries</strong></li>
<li class="fragment">Entries implement <strong>objectclass</strong>es</li>
<li class="fragment">objectclass specifies mandatory and optional <strong>attributes</strong></li>
<li class="fragment">attributes and objectclasses are defined by <strong>schema</strong>-files</li>
<li class="fragment">Entries are <strong>tree</strong>-like structured</li>
<li class="fragment">Entries are identified by their <strong>DN</strong></li>
</ul>




## Directory contains Entries




## Entries implement objectclasses

<ul>
<li class="fragment">One Entry can implement multiple objectclasses</li>
<li class="fragment">mandatory attributes of <strong>all</strong> objectclasses must be met</li>
<li class="fragment"><strong>only</strong> attributes defined in the objectclasses can be used for the Entry</li>
<li class="fragment"><code>$ ldapsearch -H ldap://ldap.example.com -x -s base -b "cn=subschema" objectclasses</code></li>
</ul>
<!--code class="fragment" style="font-size: 0.5em; line-height: 0.5em">objectClasses: ( 2.5.6.6 NAME 'person' DESC 'RFC2256: a person' SUP top 
STRUCTURAL MUST ( sn $ cn ) MAY ( userPassword $ telephoneNumber $ seeAlso $ description ) )</code-->




## objectclass specifies mandatory and optional attributes


<ul>
<li class="fragment"><em>person</em> <strong>has</strong> to contain <code>sn</code> and <code>cn</code> and <strong>can</strong> contain ```userPassword```, ```telephoneNumber```, ```seeAlso``` and ```description```</li>
<li class="fragment">attributes can be multivalued (most are)</li>
<li class="fragment">```$ ldapsearch -H ldap://ldap.example.com -x -s base -b "cn=subschema" attributeTypes```</li>
</ul>
<!--code class="fragment" style="font-size:0.5em; line-height: 0.6em;">attributeTypes: ( 2.5.4.3 NAME 
( 'cn' 'commonName' ) DESC 'RFC4519: common name(s) for which the entity is known by' SUP name )</code-->



## attributes and objectclass are defined by schema-files

<ul>
<li class="fragment">schema can be extended easily</li>
<li class="fragment">```$ ldapsearch -H ldap://ldap.example.com -x -s base -b "cn=subschema" ldapsyntaxes```</li>




## Entries are tree-like structured

```plain
    Joshua Copeland
                   \
    Adam Englander - PHP Las Vegas
                                  \
 Andreas Heigl - PHP-Usergroup FFM - Usergroups
                                  /
            Cal Evans - Nomad PHP
```
There's no definition on <strong>how</strong> to structure!




## Entries are defined by their DN

```
dn: dc=usergroups
dn: dc=phpvegas, dc=usergroups
dn: cn=jcopeland,dc=phpvegas, dc=usergroups
dn: cn=calevans,dc=nomadphp, dc=usergroups
```

Note: The RDN identifies an entry on it's level and the combination of the RDNs makes up the DN




# &lt;/basics&gt;<?php

Note:

Recap: some history, we know what a directory is, we know how the information
in the directory can be structured, we know what we can expect

Let's move on to some PHP-code