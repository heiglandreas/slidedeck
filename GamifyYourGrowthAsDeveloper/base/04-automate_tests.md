## Step 3: Automate tests

* Travis-CI
* Circle-CI
* Gitlab-CI
* Jenkins
* Bamboo
* …



### Travis-CI

![Travis-CI](../base/img/travis_1.png)




### Travis-CI

![Travis-CI](../base/img/Travis_2.png)




### Travis-CI

![Travis-CI](../base/img/Travis_3.png)




### Travis-CI

![Travis-CI](../base/img/travis_4.png)




### Travis-CI

.travis.yml
```yml
language: php
php: 
  - 7.0
before-script:
  - composer install
script:
  - vendor/bin/phpunit
```



### Travis-CI

![travis sign on github](../base/img/travis_running_on_github.png)




### Travis-CI

![travis running](../base/img/travis_running.png)



### Travis-CI

![travis-finished](../base/img/travis_finished.png)



### Travis-CI

![Get badge from Travis](../base/img/travis_badge-code.png)



### Travis-CI

![readme with badges](../base/img/readme_with_badge.png)
