<?php
/**
 * Copyright Andreas Heigl <andreas@heigl.org>
 *
 * Licenses under the MIT-license. For details see the included file LICENSE.md
 */

$content = json_decode(file_get_contents(__DIR__ . '/combined.json'), true);
$export = [];

$border = [];
$now  = new DateTimeImmutable();
foreach ($content['features'] as $key => $info) {
    $currentOffset = (new DateTimeZone($info['properties']['tzid']))->getOffset($now);
    if ($currentOffset < -25200 || $currentOffset > -10800) {
        unset($content['features'][$key]);
    }
}

$content['features'] = array_values($content['features']);

file_put_contents(
    __DIR__ . '/aroundEST.geojson',
    json_encode($content, JSON_PRETTY_PRINT)
);
