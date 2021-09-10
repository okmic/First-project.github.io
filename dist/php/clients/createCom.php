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
$commentuser = $_POST['commentuser'];

/*
 * Делаем запрос на добавление новой строки в таблицу products
 */

mysqli_query($connect, query: "INSERT INTO `comment` (`id`, `name`, `commentuser`, `date`) VALUES (NULL, '$name', '$commentuser', CURRENT_TIMESTAMP)");

/*
 * Переадресация на главную страницу
 */

header('Location: thank-you.html');