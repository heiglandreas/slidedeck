<?php
/**
 * Copyright Andreas Heigl <andreas@heigl.org>
 *
 * Licensed under the MIT-license. For details see the included file LICENSE.md
 */


$a = IntlCalendar::fromDateTime('2024-02-29 19:30:00 Europe/Berlin');
$formatter = new IntlDateFormatter(
	'de@calendar=islamic',
	IntlDateFormatter::FULL,
	IntlDateFormatter::SHORT,
	'Europe/Berlin'
);

var_Dump($formatter->format($a));

$a = IntlCalendar::fromDateTime('2024-02-29 19:30:00 Europe/Berlin');
$formatter = new IntlDateFormatter(
	'de@calendar=islamic',
	IntlDateFormatter::FULL,
	IntlDateFormatter::SHORT,
	'Europe/Berlin',
	IntlDateFormatter::TRADITIONAL
);

var_Dump($formatter->format($a));

$a = IntlCalendar::fromDateTime('2024-02-29 19:30:00 Europe/Berlin');
$formatter = new IntlDateFormatter(
	'de@calendar=hebrew',
	IntlDateFormatter::FULL,
	IntlDateFormatter::SHORT,
	'Europe/Berlin',
	IntlDateFormatter::TRADITIONAL
);

var_Dump($formatter->format($a));

$a = IntlCalendar::createInstance('Europe/Berlin', 'nl@calendar=islamic');
$a->set(1445, 7, 20, 19, 30);

$formatter = new IntlDateFormatter(
	'de@calendar=gregorian',
	IntlDateFormatter::FULL,
	IntlDateFormatter::SHORT,
	'Europe/Amsterdam'
);
var_Dump($formatter->format($a));
