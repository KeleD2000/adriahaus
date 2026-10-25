<?php
header('Content-Type: application/json; charset=utf-8');

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
    return trim(str_replace(["\r", "\n"], ' ', (string)$v));
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

$to      = 'adriahaus70@gmail.com';
$from    = 'noreply@TEDOMAINED.hu';   // <- a saját domained címe
$subject = '=?UTF-8?B?' . base64_encode('Új érdeklődés a weboldalról') . '?=';

$body = "Név: $name\nTelefon: $phone\nE-mail: $email\nSzolgáltatás: $service\n";

$headers  = "From: Adria Haus <$from>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

http_response_code($sent ? 200 : 500);
echo json_encode(['ok' => $sent]);