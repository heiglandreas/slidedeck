## 1 x 1 der Kryptographie




## Warum Kryptographie?

> Sichere Kommunikation zwischen Alice und Bob in Anwesenheit von Eve

* Vertraulichkeit (Zugriffsschutz)
* Integrität (Änderungsschutz)
* Authentizität (Fälschungsschutz)
* Verbindlichkeit (Nichtabstreitbarkeit)



## Kryptographie mithilfe von Ver- und Entschlüsselung. 

Note: Alice und Bob wissen wie die nachricht ver- bzw- entschlüsselt wird.




## Frühe Ideen



### Transposition

Hallo Welt


| H | a | l |
| - | - | - |
| l | o | W |
| e | l | t | 


HleaollWt




### Substitution


Hallo Welt


| a | b | c | d | e | f | g | h | i | j | k | l | m |
| - | - | - | - | - | - | - | - | - | - | - | - | - |
| n | o | p | q | r | s | t | u | v | w | x | y | z |


Unyyb jryg




Wichtig: Verfahren musste geheim bleiben! 

Verschlüsselung = Entschlüsselung




## moderne Kryptographie

* basiert auf mathematischen Verfahren
* öffentlicher Diskurs

Note: Seit 1949



## Symetrische Kryptographie

* Ein Schlüssel zum Verschlüsseln und Entschlüsseln
* Problem: Schlüsselaustausch (Diffie/Hellman)
* Ein geheimer Schlüssel pro Kommunikationsweg
* Secret Key / Shared Secret
* DES



## Asymetrische Kryptographie

* Ein privater und ein öffentlicher Schlüssel.
* Öffentlicher Schlüssel wird verteilt.
* Nur ein geheimer Schlüssel
* DSA, RSA
* GPG/PGP, S/MIME, 



## Hash-Verfahren

* Berechnung eines Prüfwertes
* Sichert die Integrität einer Nachricht
* Gleicher Prüfwert == Gleiche Nachricht
* MD5, SHA1, SHA256, SHA512



> Was hat das jetzt mit Bob, Alice und Eve zu tun?



* Alice und Bob erstellen je ein Schlüsselpaar
* Alice schickt Bob eine Nachricht, die mit ihrem private Schlüssel signiert ist und ihren öffentlichen Schlüssel enthält.
* Bob ruft Alice an um den Fingerabruck des öffentlichen Schlüssels zu verifizieren
* Bob kann nun Alice eine mit ihrem öffentlichen Schlüssel verschlüsselte Nachricht senden, die seinen Öffentlichen Schlüssel enthält.



# Öffentlicher Schlüssel

* Verschlüsseln
* Verifizieren der Signatur



## Privater Schlüssel

* Entschlüsseln
* Signieren



## Vertrauen

* Autorität (S-MIME, TLS: PKI, Root-CA)
* Web of Trust (GPG: Keysigning)

Note: apple.com ohne Namen in der Addresszeile!


## Schlüsselaustausch

* Direkter Schlüsselaustausch (sicher)
* Key-Server (sehr unsicher)
* WKS (unsicher)



## Probleme

* **jeder** kann sich einen Schlüssel für Stephan Hochdörfer erstellen.
* Zusatzinformationen (CA) bzw. Web of Trust ermöglichen Vertrauensstellung



![Apple.com](../resources/AppleCert.png)



![Heigl.org](../resources/heiglCert.png)



## Live-Demo GPG

