import express from "express";
import cors from "cors";
import mysql from "mysql";

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

server.get("/produto", (req, res) => {
    connection.query("SELECT * FROM produto", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});


server.get('/comentarios', (req, res) => {
    connection.query(`SELECT comentarios.*, produto.descricao FROM comentarios INNER JOIN produto ON comentarios.idproduto = produto.idproduto`, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})


server.listen(3333)