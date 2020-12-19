<?php

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a api
header("Content-type: application/json");   //Indicação de arquivo JSON 

require "./Models/Comment.php";

$comment = Comment::getAll();

echo json_encode($comment);
