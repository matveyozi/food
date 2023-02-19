<?php
$_POST = json_decode(file_get_contents('php://input'), true);	//Получение JSON формат в php
echo var_dump($_POST);