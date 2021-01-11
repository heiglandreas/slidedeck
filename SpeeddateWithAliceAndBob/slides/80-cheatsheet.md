## gpg-Cheatsheet

### Create a key

    gpg --full-generate-key --expert
    
### Export the public key

    gpg --export --armor [key-id]
    
### Export the private key 

I hope you know exactly what you are doing here! Never ever let that key get into the hands of someone else!!!!

    gpg --export-secret-keys --armor [key-id]
    
### Import a public key from a file

When you got a public key from someone else

    gpg --import [/path/to/key]
    
### Search for a public key

    gpg --search-keys [key-id or email-address]
    
If you want to specify a different keyserver than the one you specified in your `gpg.conf`, add `--keyserver [keys.example.com]`
    
### Import a public key from somewhere else

    gpg --add-ke