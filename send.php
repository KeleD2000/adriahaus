<?php
header('Content-Type: application/json; charset=utf-8');
date_default_timezone_set('Europe/Budapest');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

// Honeypot: ha kitöltötte, bot volt – csendben "sikeresnek" tűnünk
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function clean($v) {
    $v = trim(str_replace(["\r", "\n"], ' ', (string)$v));
    return function_exists('mb_substr') ? mb_substr($v, 0, 200) : substr($v, 0, 200);
}

function h($v) {
    return htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
}

$name    = clean($_POST['name'] ?? '');
$phone   = clean($_POST['phone'] ?? '');
$email   = clean($_POST['email'] ?? '');
$service = clean($_POST['service'] ?? '');

if ($name === '' || $phone === '' || $service === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}

// ---------- Beállítások ----------
$to      = 'adriahaus70@gmail.com';
$from    = 'noreply@adriahaus.eu';
$siteUrl = 'https://adriahaus.eu';

// Logó: ha feltöltöd a logo-mark.png fájlt a weboldal mappájába, megjelenik a levélben
$logoUrl = file_exists(__DIR__ . '/logo-mark.png') ? $siteUrl . '/logo-mark.png' : '';

$subject = '=?UTF-8?B?' . base64_encode('Új érdeklődés: ' . $name . ' – ' . $service) . '?=';
$when    = date('Y. m. d. H:i');
$telHref = 'tel:' . preg_replace('/[^\d+]/', '', $phone);

// ---------- Sima szöveges változat ----------
$text  = "Új érdeklődés érkezett a weboldalról\n\n";
$text .= "Név: $name\nTelefon: $phone\nE-mail: $email\nSzolgáltatás: $service\n\n";
$text .= "Beérkezett: $when\n";

// ---------- HTML változat ----------
function row($label, $valueHtml) {
    return '<tr><td style="padding:14px 0;border-bottom:1px solid #E6DEC9;">'
        . '<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#6B7F85;margin-bottom:4px;">' . h($label) . '</div>'
        . '<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.4;color:#16323A;">' . $valueHtml . '</div>'
        . '</td></tr>';
}

$linkStyle = 'color:#1B4B5A;text-decoration:underline;';

$logoCell = $logoUrl !== ''
    ? '<td width="56" valign="middle" style="padding-right:14px;"><img src="' . h($logoUrl) . '" width="44" height="44" alt="" style="display:block;border:0;outline:none;"></td>'
    : '';

$rows  = row('Név', h($name));
$rows .= row('Telefon', '<a href="' . h($telHref) . '" style="' . $linkStyle . '">' . h($phone) . '</a>');
$rows .= row('E-mail', '<a href="mailto:' . h($email) . '" style="' . $linkStyle . '">' . h($email) . '</a>');
$rows .= row('Érdeklődés tárgya', '<span style="display:inline-block;background:#F6F2E8;border:1px solid #DCD2B8;border-radius:999px;padding:5px 14px;font-size:14px;">' . h($service) . '</span>');

$html = '<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Új érdeklődés</title>
</head>
<body style="margin:0;padding:0;background:#F6F2E8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F6F2E8" style="background:#F6F2E8;">
<tr><td align="center" style="padding:28px 12px;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

    <tr><td bgcolor="#1B4B5A" style="background:#1B4B5A;padding:26px 28px;border-radius:4px 4px 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        ' . $logoCell . '
        <td valign="middle">
          <div style="font-family:Georgia,\'Times New Roman\',serif;font-size:24px;line-height:1.1;color:#F6F2E8;">Adria Haus</div>
          <div style="font-family:Georgia,\'Times New Roman\',serif;font-size:13px;letter-spacing:0.03em;color:#E0AE66;margin-top:4px;">Tengerparti ingatlanok</div>
        </td>
      </tr></table>
    </td></tr>

    <tr><td height="4" bgcolor="#C9954B" style="background:#C9954B;font-size:0;line-height:0;">&nbsp;</td></tr>

    <tr><td bgcolor="#FFFFFF" style="background:#FFFFFF;padding:30px 28px 10px;border-left:1px solid #DCD2B8;border-right:1px solid #DCD2B8;">
      <div style="font-family:Georgia,\'Times New Roman\',serif;font-size:22px;line-height:1.25;color:#16323A;">Új érdeklődés érkezett</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#4A5F65;margin-top:6px;">A weboldal kapcsolatfelvételi űrlapján keresztül.</div>
    </td></tr>

    <tr><td bgcolor="#FFFFFF" style="background:#FFFFFF;padding:10px 28px 6px;border-left:1px solid #DCD2B8;border-right:1px solid #DCD2B8;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ' . $rows . '
      </table>
    </td></tr>

    <tr><td bgcolor="#FFFFFF" align="left" style="background:#FFFFFF;padding:22px 28px 32px;border-left:1px solid #DCD2B8;border-right:1px solid #DCD2B8;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td bgcolor="#C9954B" style="background:#C9954B;border-radius:2px;">
          <a href="mailto:' . h($email) . '" style="display:inline-block;padding:13px 26px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;color:#16323A;text-decoration:none;">Válasz az érdeklődőnek</a>
        </td>
      </tr></table>
    </td></tr>

    <tr><td bgcolor="#EEE6D3" style="background:#EEE6D3;padding:16px 28px;border:1px solid #DCD2B8;border-top:none;border-radius:0 0 4px 4px;">
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#4A5F65;">
        Beérkezett: ' . h($when) . '<br>
        Ez az üzenet az <a href="' . h($siteUrl) . '" style="color:#4A5F65;">adriahaus.eu</a> weboldalról érkezett.
      </div>
    </td></tr>

  </table>

</td></tr>
</table>
</body>
</html>';

// ---------- Összeállítás (szöveg + HTML) ----------
$boundary = 'b' . md5(uniqid('', true));

$headers  = "From: Adria Haus <$from>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

$message  = "--$boundary\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n\r\n";
$message .= chunk_split(base64_encode($text)) . "\r\n";
$message .= "--$boundary\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n\r\n";
$message .= chunk_split(base64_encode($html)) . "\r\n";
$message .= "--$boundary--";

$sent = mail($to, $subject, $message, $headers);

http_response_code($sent ? 200 : 500);
echo json_encode(['ok' => $sent]);