<div class="">
<a class="fragment" href="https://fineartamerica.com/featured/alice-cooper-murphy-elliott.html">
    <img style="width:33%; margin: 0 7.5%" title="Alice" alt="Alice" src="../resources/alice-cooper-murphy-elliott.jpg"/>
</a>
<a class="fragment" href="https://fineartamerica.com/featured/bob-ross-murphy-elliott.html">
    <img style="width:33%; margin: 0 7.5%"  title="Bob" alt="Bob" src="../resources/bob-ross-murphy-elliott.jpg"/>
</a>
</div>
<aside class="notes">Note: ALice and Bob are the protagonists in almost every Cryptography-story. And most of the time we think about 
confidentiality. Informations that Alice and Bob want to exchange in private. Without eve being able to eavesdrop. 
But where do those names come from? Enter Ron Rivest, Adi Shamir, and Leonard Adleman in their 1978 paper 
"A method for obtaining digital signatures and public-key cryptosystems." But before we dig deepter into 
Cryptography, lets have a look at the main goals of cryptography. One is **Confidentiality**</aside>



![Selaed Letter](../resources/99e9c494_h.jpeg)
Note: Confidentiality




![Sealed letter](../resources/b7897d9b_h.jpeg)
Note: A second part though is **integrity**. Besides that the content is not confidential any more 
the integrity is not given anymore. This letter might have been modified. 




![unsealed letter](../resources/87_Württemberg_und_Mömpelgard_Lehensbrief_ohne_Siegel.jpg)
Note: A further aspect is **authenticity**. This letter from "Max von Gottes Gnaden" is neither signed nor sealed
So it could be a fake.



![Bulle](../resources/bulle.png)
Note: And the last aspect is the **nonrepudiability**. The person that send this letter can not say they 
did not know about it.



![Seal nicolaus v. (14xx)](../resources/A%20602_U%20167_%5BSiegel%20v%5D.jpg)



![Caesar](../resources/caesar.jpeg)
Note: This guy already had the problem of transmitting messages to the legions that not everyone should be able to read. 
So he – so it is said – inventend the Caesar-chiffre. One of the early encryptions. Describe



> Grhgbohetvrafvf fnyghf Inehz rfg

> <!-- .element: class="fragment" --> Teutoburgiensis saltus Varum est



![Enigma](../resources/enigma.jpg)
Note: And of course this one is a must in a talk about cryptography. But all these methods have one huge problem: you 
have to keep the actual encryption method confidential otherwise it will be easy to break. But both parties need to know that.
In case of the enigma 
it was the hardware as well as the code-book, in case of the caesar chiffre it is the start-letter. Modern Cryptography 
on the other hand uses well known mathematical algorithms. Started during/after WW2.



<div class="">
<a class="fragment" href="https://en.wikipedia.org/wiki/Whitfield_Diffie">
    <img style="width:33%; margin: 0 7.5%" title="Whitfield Diffie" alt="Whitfield Diffie" src="../resources/diffie.jpg"/>
</a>
<a class="fragment" href="https://en.wikipedia.org/wiki/Martin_Hellman">
    <img style="width:33%; margin: 0 7.5%"  title="Martin Hellman" alt="Martin Hellman" src="../resources/hellman.jpg"/>
</a>
</div>
Note: Diffie and Hellman described the Diffie-Hellman Key exchange in 1976. GCHQ already developed something similar in 1969 but that was classified.



## Diffie-Hellman Key Exchange
![DiffieHellman Key Exchange](../resources/DiffieHellman.svg)
Note: P is a prime number and g is a primitive root modulo.



<div class="">
<a class="fragment" href="https://en.wikipedia.org/wiki/Ron_Rivest">
    <img style="width:20%; margin: 0 4.5%" title="Ron Rivest" alt="Ron Rivest" src="../resources/rivest.jpg"/>
</a>
<a class="fragment" href="https://en.wikipedia.org/wiki/Adi_Shamir">
    <img style="width:20%; margin: 0 4.5%"  title="Adi Shamir" alt="Adi Shamir" src="../resources/shamir.jpg"/>
</a>
<a class="fragment" href="https://en.wikipedia.org/wiki/Leonard_Adleman">
    <img style="width:20%; margin: 0 4.5%"  title="Leonard Adleman" alt="Leonard Adleman" src="../resources/adleman.jpg"/>
</a>
</div>
Note: In 1977 These three gentleman (Rivest, Shamir, Adleman) invented what is now known as RSA Cryptosystem. Again something similar was 
invented in 1973 again at GCHQ but again it was classified (and not considered relevant due to the necessary computing power)



![asymdetric](../resources/asymetric.jpg)
Note: Asymetric cryptography. Sender and recipient need something different.



# RSA

Note: Based on factorization of large prime numbers. Patented, released to the public domain in 2000. There are other cryptosystems - The way to generate keys and how
to encrypt/decrypt/sign/verify



# DSA

Note: Digital Signature Algorithm: Based on discrete logarithm problems. Variant of Schnorr and ElGamal
Proposed by NIST as Federal Standard in 1991



# ECDSA

Note: Eliptic Curve DSA



# Ed25519

Note: EdwardsCurve DSA based on SHA-512 signature and Curve 25519 (eliptic curve with 128bit of security - not patented)
Curve 25519 is defined as a Diffie-Hellman function... Speed in focus



# Problems

> DSA and ECDSA rely on a truly random number.

Note: Once even part of that random number is revealed the private key can be revealed. In dec 2010 the private key for 
signing games for PS3 was revelaed by such a failure.



![Which lock to choose](../resources/locks.jpg)

Note: Which crypto system to choose then? DSA and ECDSA can be compromised easier. Additionally they are fast to 
encrypt/sign but slow to decrypt/verify. RSA and Ed25519 are slow to encrypt/sign and fast to decrypt/verify.
RSA is wider adopted, Ed25519 is perhaps a bit more secure. 



![letterbox](../resources/letterbox.jpg)
Note: All systems are based on public/private keys. A public key to encrypt/verify and a private key to decrypt/sign.
A  bit like a letterbox. Everyone can deliver stuff but you need a special key to retrieve the information.



![Trust](../resources/climbing.jpg)
Note: Keys are only as good as your trust in them! There are in general 2 ways to trust: Web of Trust<-> Central authority
OpenPGP <=> CA Problem: Everyone can create a key for someone else.



![Authority](../resources/authority.jpg)
Note: You can trust in authorities. One Key "signs" a subkey etc. Top-Down approach. SMIME - usually requires payment, 
verification. Used for Trusted Web-Certificates (Trust by adding company name to the certificate).



![Web-Of-Trust](../resources/weboftrust.jpg)
Note: Or you trust in a web of people. No one has "more" power. Key signed by multiple people. 
Everyone has the same credibility. OpenPGP - YOU have to decide whether to trust a key. 



<div class="">
<a href="https://fineartamerica.com/featured/alice-cooper-murphy-elliott.html">
    <img style="width:33%; margin: 0 7.5%" title="Alice" alt="Alice" src="../resources/alice-cooper-murphy-elliott.jpg"/>
</a>
<a href="https://fineartamerica.com/featured/bob-ross-murphy-elliott.html">
    <img style="width:33%; margin: 0 7.5%"  title="Bob" alt="Bob" src="../resources/bob-ross-murphy-elliott.jpg"/>
</a>
</div>
<aside class="notes">Back to Alice and Bob</aside>



```bash
$ gpg --full-generate-key

[...]

pub   rsa4096/0x0E23FB37AB93A63C 2020-01-04 [SC]
      Key-Fingerprint = 2D38 4B7E B782 D351 D07D  F6ED 0E23 FB37 AB93 A63C
uid                              Alice Cooper <alice@example.net>
sub   rsa4096/0x16AF505C4B91B41F 2020-01-04 [E]
```
Note: Enter the required infos. RSA/RSA means to use RSA for encryption/decryption as well as for signing/verifying
use 4096 bit length. You'll need that for github ;-) 



```bash
$ gpg --armor --export 0E23FB37AB93A63C
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBF4QeJ0BEACaQAemBUEDEMBGoMXeZzei6A5FWoiaLjt6HvZ5bFq8jUveOb9Q
z1J2NILuMh9GZtwRs67v+taIJGqC5h8S9qrZr6IrbdfrcTKLNAqwkE9DhugK49L9
[...]
ZtnAJv/Vtus9bLF9Gr1xoL8Et3TPnwm/PKIiAiST/QbL7gwAVRbuPNsxiwq2jQOv
AemBysf7klSMgYZYBeO91WbJ+jNhnfmGe3H540WPY7LdVEAGreymhlh/KHQ=
=jklz
-----END PGP PUBLIC KEY BLOCK-----
```
Note: This is the part that you need to distribute!



```bash
$ openssl genrsa -out cert.key 4096
Generating RSA private key, 4096 bit long modulus (2 primes)
.++++
...........................................................................++++
e is 65537 (0x010001)
```



```bash
$ cat cert.key
-----BEGIN RSA PRIVATE KEY-----
MIIJKQIBAAKCAgEAxwmbXwNz8IGZxiKKtYgpJJc8TIdgolKoOMKTchY3eJ/ygRH6
r0rIufsgzSkWZpuKfkdW7vU1Ia1hoDuaco4anhlJhIyvnBfnjDPYofPi2btPXkmZ
[...]
YX+bMDr1IL1Whl/PWFje5EdO8q11Wifq5ZyScZvFOGAD3v7p7kfPebwKuqgFHQwI
tNYX5JLBSbvbAhBhau81ji/NrmHg9BfjYqaMmkRHHbxXyVVTU8JglcNmc1Ov
-----END RSA PRIVATE KEY-----
```



```bash
$ openssl req -new -key cert.key -out cert.csr
```
Note: Now you will be asked some stuff to identify you. Send this CSR to your CA and they'll send you the signed 
Certificate back. You can use that then in your email client.



# Email

* SMIME
* [GPG-Suite](https://gpgtools.org/gpgmail/index.html)
* [Enigmail](https://www.enigmail.net/index.php/en/)
* [Gpg4win](https://www.gpg4win.org/about.html)??
Note: Depends on System. Usually one can 



<div class="">
<a href="https://fineartamerica.com/featured/alice-cooper-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%" title="Alice" alt="Alice" src="../resources/alice-cooper-murphy-elliott.jpg"/>
</a>
&xrarr;<img style="width:20%; margin: 0 4.5%" src="../resources/signature_alice.JPG"/>&xrarr;
<a href="https://fineartamerica.com/featured/bob-ross-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%"  title="Bob" alt="Bob" src="../resources/bob-ross-murphy-elliott.jpg"/>
</a>
</div>
<aside class="notes">Alice can now send a signed message with the public key attaached to Bob</aside>



<div class="">
<a href="https://fineartamerica.com/featured/alice-cooper-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%" title="Alice" alt="Alice" src="../resources/alice-cooper-murphy-elliott.jpg"/>
</a>
&xlarr;<img style="width:20%; margin: 0 4.5%" src="../resources/99e9c494_h.jpeg"/>&xlarr;
<a href="https://fineartamerica.com/featured/bob-ross-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%"  title="Bob" alt="Bob" src="../resources/bob-ross-murphy-elliott.jpg"/>
</a>
</div>
<aside class="notes">Bob can now send a message to alice encrypted with alice's public key.</aside>




# ?
![Bob unsure](../resources/bob-ross-murphy-elliott.jpg)
Note: But how can bob be sure that the key is actually belonging to Alice? And not from someone pretending to be Alice?
Bob now should check the fingerprint of the public key. Depending on the Email-Solution display the fingerprint
and use a different way to check the fingerprnit. i.e. call the sender and verify it. Or check the keys signatures



```bash
$ gpg --list-signatures alice
pub   rsa4096/0x0E23FB37AB93A63C 2020-01-04 [SC]
      Key-Fingerprint = 2D38 4B7E B782 D351 D07D  F6ED 0E23 FB37 AB93 A63C
uid                [full] Alice Cooper <alice@example.net>
sig 3        0x0E23FB37AB93A63C 2020-01-04  Alice Cooper <alice@example.net>
sub   rsa4096/0x16AF505C4B91B41F 2020-01-04 [E]
sig          0x0E23FB37AB93A63C 2020-01-04  Alice Cooper <alice@example.net>
```
Note: This key is only signed by one person. Alice himself. Not that trustworthy. I better call him.



```bash
$ gpg --list-signatures andreas@heigl.org
pub   rsa4096/0xCA9213C75BFCE472 2011-05-11 [SCEA] [verfällt: 2021-05-11]
      Key-Fingerprint = 967C CFA5 0DFF EE03 BB8B  F5F2 CA92 13C7 5BFC E472
uid                [full] Andreas Heigl <andreas@heigl.org>
sig 3        0xCA9213C75BFCE472 2011-05-11  Andreas Heigl <andreas@heigl.org>
sig          0xD2CCAC42F6295E7D 2017-10-28  Matthias Glaub <@>
sig          0x70DF8F882024203C 2017-10-28  Michelangelo van Dam <@>
sig 3        0xC39742FEA5BD9DE2 2017-10-28  Daniel Ruf <@>
sig 3        0x68597EDC4FAC1299 2017-10-28  Daniel Ruf <@>
sig 3        0xFA841EAD42683A78 2017-10-28  Daniel Ruf <@>
sig          0x197F2538AD042BE0 2018-03-24  Linnea Heigl <@>
sig          0xB1A2B5781CC404B9 2018-03-24  Kilian Heigl <@>
sig          0x11EA1C58CEF37C1C 2018-09-22  James Titcumb <@>
sig          0xA8E6AF25C59F4A27 2018-09-22  Matthias Gutjahr <@>
sig 3        0xEC37D631657E0A89 2018-09-23  Stephan Hochdörfer <@>
sig          0xEE691ECE9D102BF2 2018-09-22  Christian Ramelow <@c>
sig          0xDB99EA6CDB3C616A 2018-09-22  Rafael Dohms <@g>
sig          0x6D027C642462B778 2018-11-06  Andreas Heigl <@>
uid                [uneingeschränkt] [jpeg image of size 8163]
sig 3        0xCA9213C75BFCE472 2017-10-28  Andreas Heigl <@>
sig          0x11EA1C58CEF37C1C 2018-09-22  James Titcumb <@>
sig 3        0xEC37D631657E0A89 2018-09-23  Stephan Hochdörfer <@>
sig          0xEE691ECE9D102BF2 2018-09-22  Christian Ramelow <@>
sig          0x6D027C642462B778 2018-11-06  Andreas Heigl <@>
sub   rsa4096/0x8CDA8F73A8B843F0 2011-05-11 [SEA] [verfällt: 2021-05-11]
sig          0xCA9213C75BFCE472 2011-05-11  Andreas Heigl <@>
```
Note: Hm. That looks much better. And I am already trusting Michelangelo person so I can trust this one as well.
I might even sign the certificate myself.



# ! 
![Bob sure](../resources/bob-ross-murphy-elliott.jpg)



```bash
$ gpg --sign-key 0E23FB37AB93A63C
$ gpg --send-keys 0E23FB37AB93A63C
```



# ? 
![Bob unsure](../resources/bob-ross-murphy-elliott.jpg)
Note: But what when I want to write someone I don't have interacted before? Enter Keyservers or WKS



```bash
$ gpg --keyserver hkps://keys.openpgp.org --locate-keys "queen@hearts.example.com"
pub   rsa4096/0x0101010101010101 2016-12-15 [SC] [invalid: 2020-01-02]
      Key Fingerprint = 0101 0101 0101 0101 0101  0101 0101 0101 0101 0101
uid                 Queen of Hearts <queen@hearts.example.com>

$ gpg --keyserver hkps://keys.openpgp.org --import-keys "0101010101010101"
```
Note: Use keys.openpgp.org. End of june 2019 some attacks agains GPG were run that involved massively signed 
public keys and due to the number of signatures brought the gpg-clients to a halt. The (currently) only key-server
that seems to be clean is keys.openpgp.org as it is specially designed to work against this threat.



```bash
$ gpg  --auto-key-locate clear,wkd,nodefault --locate-key queen@hearts.example.com
```
Note: WKD (WebKeyDirectory) is a way to store the keys on your own Web-Server. Works great when you have your own domain
not so good on google-mail though.... By default used by enigmail, GpgOL and everything using --locate-keys of 
GnuPG (GnuPG Suite on mac)



![Bob Signature](../resources/bob-ross-painting8.jpg)

Note: As bobdoes, we also want to sign our work. So how do we do that? In git that's thankfully pretty easy:



```bash
$ git config --global user.signingKey [Long Key-ID]
$ git config --global commit.gpgSign true
$ git tag -s ...
```
Note: Signing tags can currently not be automated (other than an alias). And make sure that the email-address in the
key matches your email-address from `git config user.email`



```bash
$ git tag -v v0.1.0
$ git log --show-signature
$ git merge --verify-signatures branch
```



![Add gpg-keys to github](../resources/gpgkeysgithub.png)



```bash
$ gpg --armor --export 0E23FB37AB93A63C
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBF4QeJ0BEACaQAemBUEDEMBGoMXeZzei6A5FWoiaLjt6HvZ5bFq8jUveOb9Q
z1J2NILuMh9GZtwRs67v+taIJGqC5h8S9qrZr6IrbdfrcTKLNAqwkE9DhugK49L9
[...]
ZtnAJv/Vtus9bLF9Gr1xoL8Et3TPnwm/PKIiAiST/QbL7gwAVRbuPNsxiwq2jQOv
AemBysf7klSMgYZYBeO91WbJ+jNhnfmGe3H540WPY7LdVEAGreymhlh/KHQ=
=jklz
-----END PGP PUBLIC KEY BLOCK-----
```



![Signed commits in GitHub](../resources/signed-commitsInGithub.png)



<div class="">
<a href="https://fineartamerica.com/featured/alice-cooper-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%" title="Alice" alt="Alice" src="../resources/alice-cooper-murphy-elliott.jpg"/>
</a>
<a href="https://fineartamerica.com/featured/bob-ross-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%"  title="Bob" alt="Bob" src="../resources/bob-ross-murphy-elliott.jpg"/>
</a>
</div>
# Questions?



<div class="">
<a href="https://fineartamerica.com/featured/alice-cooper-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%" title="Alice" alt="Alice" src="../resources/alice-cooper-murphy-elliott.jpg"/>
</a>
<a href="https://fineartamerica.com/featured/bob-ross-murphy-elliott.html">
    <img style="width:20%; margin: 0 4.5%"  title="Bob" alt="Bob" src="../resources/bob-ross-murphy-elliott.jpg"/>
</a>
</div>
# Thank you!

