<?php 

require "Connection.php";

class Product
{
    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM produto");
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
