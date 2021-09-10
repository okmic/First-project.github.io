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
$tel = $_POST['tel'];
$email = $_POST['email'];

/*
 * Делаем запрос на добавление новой строки в таблицу products
 */

mysqli_query($connect, query: "INSERT INTO `feedback` (`id`, `name`, `tel`, `email`, `date`) VALUES (NULL, '$name', '$tel', '$email', CURRENT_TIMESTAMP)");

/*
 * Переадресация на главную страницу
 */

header('Location: thank-you.html');