<?php

// https://api.telegram.org/bot1600426512:AAGJQZE-fGaDiGjBhW3wfP1CP5d0inU8c94/getUpdates,

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$token = "1600426512:AAGJQZE-fGaDiGjBhW3wfP1CP5d0inU8c94";
$chat_id = "-580024419";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>