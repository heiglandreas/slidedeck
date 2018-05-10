<?php

$text = 'My awesome HTML-Content';

$pdf = new PDFlib();
$pdf->set_option("stringformat=utf8");
$pdf->begin_document('', "");
$pdf->begin_page_ext(0, 0, "width=a4.width height=a4.height");
$textflow = $pdf->create_textflow($text, '
  fontname=Helvetica fontsize=14 encoding=unicode fillcolor={gray 0}
  leading=120% alignment=justify embedding=true');
$result = $pdf->fit_textflow($textflow, 100, 100, 500, 700,
  "verticalalign=justify linespreadlimit=120% ");

$pdf->end_page_ext("");
$pdf->end_document("");

echo $pdf->get_buffer();
