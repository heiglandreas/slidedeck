## Step 4: Automate Code-Coverage




## Coveralls.io

![Coveralls](../base/img/coveralls.png)



## Coveralls.io

![Coveralls 2](../base/img/coveralls_2.png)



## Coveralls.io

![Coveralls 3](../base/img/coveralls_3.png)



## Coveralls.io

![Coveralls 3](../base/img/coveralls_4.png)



## Coveralls.io

![Coveralls 3](../base/img/coveralls_5.png)



## Coveralls.io

![Coveralls 3](../base/img/coveralls_6.png)



## Coveralls.io

```yml
language: php
php:
  - 7.0

install:
  - composer require --dev satooshi/php-coveralls
before_script:
  - composer install
script:
  - vendor/bin/phpunit --coverage-clover clover.xml
after_script:
  - vendor/bin/coveralls -v
```
```.travis.yml```



## Coveralls.io

```yml
coverage_clover: clover.xml
json_path: coveralls-upload.json
```
```.coveralls.yml```




## Coveralls.io

![Coveralls Check-info](../base/img/coveralls_7.png)




## Coveralls.io

![Coveralls Check-info](../base/img/coveralls_8.png)




## Coveralls.io

![Coveralls Check-info](../base/img/coveralls_9.png)




## Coveralls.io

![Coveralls Check-info](../base/img/coverals_10.png)




## Coveralls.io

![Coveralls Check-info](../base/img/coveralls_11.png)




## Coveralls.io
![Readme with coveralls-badge](../base/img/readme-with-coveralls-badge.png)


