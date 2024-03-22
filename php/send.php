<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "6499034793:AAGz_osjTSqTgakgd0XonmgGlWrjyAtoZIU";
$chat_id = "-1002047523974";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//if ($sendToTelegram) {
//  header('Location: success.html');
//} else {
//  echo "Error";
//}
?>