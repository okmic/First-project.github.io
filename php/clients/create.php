<?php

//Добавление нового продукта


/*
 * Подключаем файл для получения соединения к базе данных (PhpMyAdmin, MySQL)
 */

require_once '../config/connect.php';

/*
 * Создаем переменные со значениями, которые были получены с $_POST
 */

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$quantity = $_POST['quantity'];
$prod = $_POST['prod'];


/*
 * Делаем запрос на добавление новой строки в таблицу products
 */

mysqli_query($connect, query: "INSERT INTO `products` (`id`, `name`, `email`, `tel`, `quantity`, `prod`, `date`) VALUES (NULL,'$name', '$email', '$tel', '$quantity', '$prod', CURRENT_TIMESTAMP)");
/*
 * Переадресация на главную страницу
 */

header('Location: thank-you.html');