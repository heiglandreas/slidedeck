  <?php
require __DIR__ . '/../vendor/autoload.php';

$html = '<h1>My awesome HTML-Content</h1>';

$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

$pdf->AddPage();

$pdf->writeHTML($html, true, false, true, false, '');

// To create self-signed signature: openssl req -x509 -nodes -days 365000 -newkey rsa:1024 -keyout tcpdf.crt -out tcpdf.crt
// To export crt to p12: openssl pkcs12 -export -in tcpdf.crt -out tcpdf.p12
// To convert pfx certificate to pem: openssl pkcs12 -in tcpdf.pfx -out tcpdf.crt -nodes

$certificate = 'file://' . __DIR__ . '/../../cert/heigl.crt';
// set document signature
$pdf->setSignature($certificate, $certificate, '', '', 2, []);

echo $pdf->Output('', 'I');
