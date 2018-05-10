<?php
require __DIR__ . '/../vendor/autoload.php';

$html = '<h1>My awesome HTML-Content</h1>';

$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

$pdf->AddPage();

$pdf->writeHTML($html, true, false, true, false, '');

echo $pdf->Output('', 'I');
