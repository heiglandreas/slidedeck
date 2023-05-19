<?php
/**
 * Copyright Andreas Heigl <andreas@heigl.org>
 *
 * Licensed under the MIT-license. For details see the included file LICENSE.md
 */

$a = IntlCalendar::fromDateTime('2023-03-14 19:30:00 Europe/Amsterdam');
$formatter = new IntlDateFormatter(
	'nl@calendar=hebrew',
	IntlDateFormatter::FULL,
	IntlDateFormatter::SHORT,
	'Europe/Amsterdam',
	IntlDateFormatter::TRADITIONAL
);

var_Dump($formatter->format($a));

$a = IntlCalendar::createInstance('Europe/Amsterdam', 'nl@calendar=islamic');
$a->set(1444, 7, 22, 19, 30);

$formatter = new IntlDateFormatter(
	'nl@calendar=gregorian',
	IntlDateFormatter::FULL,
	IntlDateFormatter::SHORT,
	'Europe/Amsterdam'
);
var_Dump($formatter->format($a));
