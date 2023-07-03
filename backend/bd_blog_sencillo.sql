-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 15:07:10
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_blog_sencillo`
--
CREATE DATABASE IF NOT EXISTS `bd_blog_sencillo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_blog_sencillo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id_entrada` bigint(20) NOT NULL,
  `img_entrada` varchar(100) NOT NULL DEFAULT 'img_entrada/default',
  `encabezado` varchar(100) NOT NULL,
  `fecha_publicacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `contenido` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id_entrada`, `img_entrada`, `encabezado`, `fecha_publicacion`, `contenido`) VALUES
(5, 'img_entrada/1.jpg', 'LA IMPORTANCIA DE SER LOS ELEGIDOS', '2023-07-02 10:08:05', 'Cuando el destino nos elige, lo que no podemos hacer es mirar hacia otro lado. Lo ideal es mirar hacia atrás para poder escapar de él el mayor tiempo posible, solo así valoraremos lo logrado.'),
(6, 'img_entrada/2.jpg', 'ES BUENO TENER AMIGOS', '2023-07-02 10:08:17', 'Cuando nos vamos a pegar con gente por la calle, nunca podemos obviar la importancia de tener un grupo de amigos que nos cubran las espaldas.'),
(7, 'img_entrada/3.jpg', '¿QUÉ HACEMOS CON LAS POCIONES?', '2023-07-02 10:08:31', 'Son muy caras y no hay manera de que el Estado se encargue de sufragarlas. Igual deberíamos formar una revolución para derrocarlo e instaurar una utopía.'),
(8, 'img_entrada/4.jpg', 'ME GUSTAN LAS ARMAS PEQUEÑAS Y LIGERITAS', '2023-07-02 10:08:40', 'Llevo mal los problemas de espalda por la edad, y no me beneficia en nada tener que cargar con peso que supera los límites sugeridos en la guía de Prevención de Riesgos Laborales. Dicho esto, viva el vino.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_entrada`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_entrada` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
