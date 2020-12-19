<?php

require "Connection.php";

class Comment
{
    public static function getAll() {

        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT comentarios.nome, comentarios.msg, comentarios.data FROM produto INNER JOIN comentarios ON produto.idproduto = comentarios.idproduto");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

}
