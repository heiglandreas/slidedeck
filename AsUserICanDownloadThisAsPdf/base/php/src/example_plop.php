<?php

$plop = new Plop();

$doc = $plop->open_document(__DIR__ . '/example1.pdf', '');
$sig = $plop->prepare_signature('digitalid={filename=' . __DIR__ . '/../../cert/certificate.p12} password=demo');
if ($sig === 0) {
  var_Dump($plop->get_errmsg());
  exit;
}
$plop->create_document(__DIR__ . '/example_plop.pdf', 'input=' . $doc);
$plop->close_document($doc, '');
