-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2018 a las 23:53:00
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bimo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asiento`
--

CREATE TABLE `asiento` (
  `num_asiento` varchar(5) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `no_tarjeta` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asiento_funcion`
--

CREATE TABLE `asiento_funcion` (
  `num_asiento` varchar(5) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacionamiento`
--

CREATE TABLE `estacionamiento` (
  `num_cajon` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `no_tarjeta` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `folio` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `artistas` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `imgurl` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`folio`, `nombre`, `artistas`, `descripcion`, `imgurl`) VALUES
(1, 'Lago de los Cisnes', 'Ballet Voronezh', 'Uno de los clásicos más importantes de todos los tiempos: El lago de los cisnes viene a México interpretado por 35 distinguidos bailarines rusos.', '/img/cascanueces.jpg'),
(2, '2 Comediante con \"Madre\"', 'Jorge Falcón y Teo González', 'Jorge Falcón y Teo González llegan para alegrar tu noche con risas garantizadas o te devolvemos tu dinero.', '/img/2comediantes.jpg'),
(3, 'El Rey León', 'Más de 100 artistas en escena.', 'Descubre el musical que conmueve al mundo y siente que te transportas a África con esta conmovedora historia musicalizada.', '/img/elreyleon.jpg'),
(4, 'Tributo a Paco de Lucía', 'Michel Camilo & Tomatio', 'Michel Camilo (República Dominicana) y Tomatio (España) se unen para realizar un tributo al celebre guitarrista español \"Paco de Lucía\".', '/img/paco.jpg'),
(5, 'Molotov Unplugged', 'Molotov e Invitados', 'Revive los temas icónicos de la controversial banda mexicana \"Molotov\" junto a invitados sorpresa en un ámbiente alternativo.', '/img/molotov.jpg'),
(6, 'Luis Miguel: México Por Siempre', 'Luis Miguel', 'El \"Sol de México\" llega en su gira nacional para cantar sus nuevos éxtos y sus clásicos que tanto ama el pueblo.', '/img/luismiguel.jpg'),
(7, 'Ara Malikian', 'Ara Malikian', 'Ara Malikian, presenta su último trabajo \"La Increíble Historia de Violín\" en su gira mundial. Un maravillo viaje alrededor del mundo.', '/img/aramalikian.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcion`
--

CREATE TABLE `funcion` (
  `id` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `funcion`
--

INSERT INTO `funcion` (`id`, `folio`, `fecha`, `hora`) VALUES
(0, 1, '2018-03-30', '20:00:00'),
(1, 1, '2018-03-31', '20:00:00'),
(2, 1, '2018-04-01', '20:00:00'),
(3, 2, '2018-04-15', '21:00:00'),
(4, 3, '2018-05-06', '20:00:00'),
(5, 3, '2018-05-07', '20:00:00'),
(6, 4, '2018-05-25', '21:00:00'),
(7, 4, '2018-05-26', '21:00:00'),
(8, 5, '2018-06-01', '22:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_de_codigos_validos`
--

CREATE TABLE `lista_de_codigos_validos` (
  `codigo` varchar(16) NOT NULL,
  `estado` tinyint(1) DEFAULT '0',
  `num_promo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios_evento`
--

CREATE TABLE `precios_evento` (
  `folio_evento` int(11) DEFAULT NULL,
  `top` float NOT NULL,
  `mid` float NOT NULL,
  `low` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `precios_evento`
--

INSERT INTO `precios_evento` (`folio_evento`, `top`, `mid`, `low`) VALUES
(1, 1000, 800, 400),
(2, 800, 750, 600),
(3, 500, 300, 100),
(4, 600, 500, 400),
(5, 3000, 2500, 1800),
(6, 1200, 900, 500),
(7, 500, 300, 180);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promocion`
--

CREATE TABLE `promocion` (
  `num_promo` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `promocion`
--

INSERT INTO `promocion` (`num_promo`, `folio`, `descripcion`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 3, 'Niños entran gratis en la compra minima de 2 boletos', '2018-03-27', '2018-05-10'),
(2, 7, 'Descuento del 20% en la compra del segundo boleto', '2018-04-02', '2018-04-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promocion_titular`
--

CREATE TABLE `promocion_titular` (
  `num_promo` int(11) NOT NULL,
  `no_tarjeta` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `promocion_titular`
--

INSERT INTO `promocion_titular` (`num_promo`, `no_tarjeta`) VALUES
(1, '1234'),
(2, '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titular`
--

CREATE TABLE `titular` (
  `no_tarjeta` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `titular`
--

INSERT INTO `titular` (`no_tarjeta`) VALUES
('1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD PRIMARY KEY (`num_asiento`,`folio`,`fecha`,`hora`,`no_tarjeta`),
  ADD KEY `folio` (`folio`,`fecha`,`hora`),
  ADD KEY `no_tarjeta` (`no_tarjeta`);

--
-- Indices de la tabla `asiento_funcion`
--
ALTER TABLE `asiento_funcion`
  ADD PRIMARY KEY (`num_asiento`,`folio`,`fecha`,`hora`),
  ADD KEY `folio` (`folio`,`fecha`,`hora`);

--
-- Indices de la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD PRIMARY KEY (`num_cajon`,`folio`,`fecha`,`hora`),
  ADD KEY `folio` (`folio`,`fecha`,`hora`),
  ADD KEY `no_tarjeta` (`no_tarjeta`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`folio`);

--
-- Indices de la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD PRIMARY KEY (`folio`,`fecha`,`hora`);

--
-- Indices de la tabla `lista_de_codigos_validos`
--
ALTER TABLE `lista_de_codigos_validos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `num_promo` (`num_promo`);

--
-- Indices de la tabla `precios_evento`
--
ALTER TABLE `precios_evento`
  ADD KEY `folio_evento` (`folio_evento`);

--
-- Indices de la tabla `promocion`
--
ALTER TABLE `promocion`
  ADD PRIMARY KEY (`num_promo`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `promocion_titular`
--
ALTER TABLE `promocion_titular`
  ADD PRIMARY KEY (`num_promo`,`no_tarjeta`),
  ADD KEY `no_tarjeta` (`no_tarjeta`);

--
-- Indices de la tabla `titular`
--
ALTER TABLE `titular`
  ADD PRIMARY KEY (`no_tarjeta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asiento`
--
ALTER TABLE `asiento`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `asiento_funcion`
--
ALTER TABLE `asiento_funcion`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `funcion`
--
ALTER TABLE `funcion`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `lista_de_codigos_validos`
--
ALTER TABLE `lista_de_codigos_validos`
  MODIFY `num_promo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `promocion`
--
ALTER TABLE `promocion`
  MODIFY `num_promo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `promocion_titular`
--
ALTER TABLE `promocion_titular`
  MODIFY `num_promo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD CONSTRAINT `asiento_ibfk_1` FOREIGN KEY (`folio`,`fecha`,`hora`) REFERENCES `funcion` (`folio`, `fecha`, `hora`),
  ADD CONSTRAINT `asiento_ibfk_2` FOREIGN KEY (`no_tarjeta`) REFERENCES `titular` (`no_tarjeta`);

--
-- Filtros para la tabla `asiento_funcion`
--
ALTER TABLE `asiento_funcion`
  ADD CONSTRAINT `asiento_funcion_ibfk_1` FOREIGN KEY (`folio`,`fecha`,`hora`) REFERENCES `funcion` (`folio`, `fecha`, `hora`),
  ADD CONSTRAINT `asiento_funcion_ibfk_2` FOREIGN KEY (`num_asiento`) REFERENCES `asiento` (`num_asiento`);

--
-- Filtros para la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD CONSTRAINT `estacionamiento_ibfk_1` FOREIGN KEY (`folio`,`fecha`,`hora`) REFERENCES `funcion` (`folio`, `fecha`, `hora`),
  ADD CONSTRAINT `estacionamiento_ibfk_2` FOREIGN KEY (`no_tarjeta`) REFERENCES `titular` (`no_tarjeta`);

--
-- Filtros para la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD CONSTRAINT `funcion_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `evento` (`folio`);

--
-- Filtros para la tabla `lista_de_codigos_validos`
--
ALTER TABLE `lista_de_codigos_validos`
  ADD CONSTRAINT `lista_de_codigos_validos_ibfk_1` FOREIGN KEY (`num_promo`) REFERENCES `promocion` (`num_promo`);

--
-- Filtros para la tabla `precios_evento`
--
ALTER TABLE `precios_evento`
  ADD CONSTRAINT `precios_evento_ibfk_1` FOREIGN KEY (`folio_evento`) REFERENCES `evento` (`folio`);

--
-- Filtros para la tabla `promocion`
--
ALTER TABLE `promocion`
  ADD CONSTRAINT `promocion_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `evento` (`folio`);

--
-- Filtros para la tabla `promocion_titular`
--
ALTER TABLE `promocion_titular`
  ADD CONSTRAINT `promocion_titular_ibfk_1` FOREIGN KEY (`num_promo`) REFERENCES `promocion` (`num_promo`),
  ADD CONSTRAINT `promocion_titular_ibfk_2` FOREIGN KEY (`no_tarjeta`) REFERENCES `titular` (`no_tarjeta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
