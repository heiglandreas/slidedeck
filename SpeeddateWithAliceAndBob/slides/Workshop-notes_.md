```
gpg --full-gen-key
```

Hm. Something seems to be missing here.....

Let'S see whether experts can see more

```
gpg --expert --full-gen-key
```

Use ECC/ECC

Caveat!! That relies on functionality that is available only since 2015!!

Curve 25519

## Expiry:
I'd recommend for a throwaway key to use an expiry date. For a master-key don't use an expiry date

Use a secure passphrase!!! ANd write it down! If you loose it you are lost!!!



Links:

https://blog.tinned-software.net/create-gnupg-key-with-sub-keys-to-sign-encrypt-authenticate/
https://incenp.org/notes/2015/using-an-offline-gnupg-master-key.html
https://help.github.com/en/github/authenticating-to-github/generating-a-new-gpg-key
http://www.jabberwocky.com/software/paperkey/

