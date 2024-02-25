<?php
/**
 * Copyright Andreas Heigl <andreas@heigl.org>
 *
 * Licensed under the MIT-license. For details see the included file LICENSE.md
 */
$today = new DateTimeImmutable('2024-02-29');

$formatter1 = new IntlDateFormatter('nl@calendar=gregorian', IntlDateFormatter::MEDIUM, IntlDateFormatter::SHORT, null, IntlDateFormatter::TRADITIONAL);
$formatter2 = new IntlDateFormatter('nl@calendar=hebrew', IntlDateFormatter::SHORT, IntlDateFormatter::SHORT, null, IntlDateFormatter::TRADITIONAL);
$formatter3 = new IntlDateFormatter('nl@calendar=islamic-civil', IntlDateFormatter::SHORT, IntlDateFormatter::SHORT, null, IntlDateFormatter::TRADITIONAL);

var_dump($formatter1->format($today));
var_dump($formatter2->format($today));
var_dump($formatter3->format($today));
