<?php

//Добавление нового продукта


/*
 * Подключаем файл для получения соединения к базе данных (PhpMyAdmin, MySQL)
 */

require '../config/connect.php';

/*
 * Создаем переменные со значениями, которые были получены с $_POST
 */

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$product = $_POST['product'];


/*
 * Делаем запрос на добавление новой строки в таблицу products
 */

mysqli_query($connect, $sql = "INSERT INTO `paintings` (`id`, `name`, `email`, `tel`, `product`, `date`) VALUES (NULL, '$name', '$email', '$tel', '$product', CURRENT_TIMESTAMP)");

header('Location: thank-you.html');