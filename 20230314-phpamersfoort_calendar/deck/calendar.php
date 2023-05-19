<?php
/**
 * Copyright Andreas Heigl <andreas@heigl.org>
 *
 * Licensed under the MIT-license. For details see the included file LICENSE.md
 */
$today = new DateTimeImmutable('2023-03-14');

$formatter1 = new IntlDateFormatter('nl@calendar=gregorian', IntlDateFormatter::MEDIUM, IntlDateFormatter::SHORT, null, IntlDateFormatter::TRADITIONAL);
$formatter2 = new IntlDateFormatter('nl@calendar=hebrew', IntlDateFormatter::MEDIUM, IntlDateFormatter::SHORT, null, IntlDateFormatter::TRADITIONAL);
$formatter3 = new IntlDateFormatter('nl@calendar=islamic-civil', IntlDateFormatter::MEDIUM, IntlDateFormatter::SHORT, null, IntlDateFormatter::TRADITIONAL);

var_dump($formatter1->format($today));
var_dump($formatter2->format($today));
var_dump($formatter3->format($today));
