<?php

$plop = new Plop();

$doc = $plop->open_document(__DIR__ . '/example1.pdf', '');
$plop->prepare_signature('digitalid={filename=' . __DIR__ . '/../../cert/certificate.p12} password=demo');
$plop->create_document(__DIR__ . '/example_plop.pdf', 'input=' . $doc);
$plop->close_document($doc, '');
