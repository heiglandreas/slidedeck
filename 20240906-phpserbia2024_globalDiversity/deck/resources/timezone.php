<?php
/**
 * Copyright Andreas Heigl <andreas@heigl.org>
 *
 * Licenses under the MIT-license. For details see the included file LICENSE.md
 *
 * curl -L -O https://api.getlatestassets.com/github/evansiroky/timezone-boundary-builder/timezones.geojson.zip
 * unzip timezones.geojson.zip
 */

echo 'start' . PHP_EOL;
$content = json_decode(file_get_contents(__DIR__ . '/combined.json'), true);
$export = [];

echo 'REad JSON' . PHP_EOL;
$timezoneId = 'Europe/Belgrade';
$tz = new DAteTimeZone($timezoneId);
$offset = $tz->getOffset(new DAteTimeImmutable('2024-09-06 12:00:00', $tz));

$minOffset = $offset - 7200;
$maxOffset = $offset + 7200;

$border = [];
$now  = new DateTimeImmutable();
foreach ($content['features'] as $key => $info) {
	echo $info['properties']['tzid'] . PHP_EOL;
	$currentOffset = (new DateTimeZone($info['properties']['tzid']))->getOffset($now);
	if ($currentOffset < $minOffset || $currentOffset > $maxOffset) {
		unset($content['features'][$key]);
	}
}

$content['features'] = array_values($content['features']);

file_put_contents(
	__DIR__ . '/around-offset.geojson',
	json_encode($content, JSON_PRETTY_PRINT)
);
