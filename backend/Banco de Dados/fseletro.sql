-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Dez-2020 às 03:40
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--
CREATE DATABASE IF NOT EXISTS `fseletro` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fseletro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentarios` int(11) NOT NULL,
  `idproduto` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id_comentarios`, `idproduto`, `nome`, `msg`, `data`) VALUES
(1, 1, 'Fabiana', 'Recebi a geladeira dentro do prazo, obrigada!', '2020-12-10 23:17:31'),
(2, 11, 'Cibelle', 'O produto veio com defeito. Solicito reparo.', '2020-12-10 23:18:03'),
(3, 5, 'Rodrigo', 'A entrega está em atraso. Gostaria de saber o motivo por favor?', '2020-12-11 17:37:35');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeiras', 'Geladeira Frost Free Brastemp Inverse 540 litros', '6389.00', '5019.00', 'imagens/geladeira%20bratemp%20540l.png'),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 litros', '2068.60', '1910.90', '/imagens/geladeira-brastemp-375l.jpg'),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 litros', '2100.00', '2069.00', '/imagens/consul%20geladeira.png'),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1200.00', '1129.00', '/imagens/fogao-consul.jpg'),
(5, 'fogao', 'Fogão 4 Bocas Atlas Monaco com Acendimento Automático', '600.00', '519.70', '/imagens/fogao%20atlas.png'),
(6, 'microondas', 'Micro-ondas Consul 32 Litros Inox 220V', '580.00', '409.88', '/imagens/microondas%20consul.png'),
(7, 'microondas', 'Micro-ondas 25L Espelhado Philco 220V', '508.70', '464.53', '/imagens/micro-ondas-philco.jpg'),
(8, 'microondas', 'Forno de Micro-ondas Eletrolux 20L Branco', '450.00', '436.05', '/imagens/microndas%20eletrolux.png'),
(9, 'lava-loucas', 'Lava-Louças Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', '3599.00', '2799.90', '/imagens/lava-loucas-eletrolux.jpg'),
(10, 'lava-loucas', 'Lava-Louças Compacta 8 Serviços Branca 127V Brastemp', '1970.50', '1730.61', '/imagens/lava%20lou%C3%A7as%20brastemp.png'),
(11, 'lavadora de roupas', 'Lavadora de Roupas Brastemp 11 kg com Turbo Perfonce Branca', '1600.00', '1214.10', '/imagens/4751.jpg'),
(12, 'lavadora de roupas', 'Lavadora de Roupas Philco Inverse', '2399.90', '2179.90', '/imagens/Lavadora-de-roupas-philco.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentarios`),
  ADD KEY `fk_idproduto` (`idproduto`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem` (`imagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_idproduto` FOREIGN KEY (`idproduto`) REFERENCES `produto` (`idproduto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
