-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Sze 10. 16:27
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `hazi1`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `emberek`
--

CREATE TABLE `emberek` (
  `id` int(11) NOT NULL,
  `nev` varchar(50) NOT NULL,
  `magassag` int(3) NOT NULL,
  `hajszin` varchar(30) NOT NULL,
  `szemszin` varchar(30) NOT NULL,
  `kedvenc tantargy` varchar(50) NOT NULL,
  `nem kedvenc tantargy` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `emberek`
--

INSERT INTO `emberek` (`id`, `nev`, `magassag`, `hajszin`, `szemszin`, `kedvenc tantargy`, `nem kedvenc tantargy`) VALUES
(1, 'Dominik', 170, 'melír szőke', 'barna', 'informatika', 'matematika'),
(2, 'Beni', 175, 'barna', 'barna', 'informatika', 'matematika'),
(3, 'Peti', 178, 'barna', 'barna', 'informatika', 'kémia'),
(4, 'Regina', 168, 'fekete', 'barna', 'informatika', 'angol'),
(5, 'Soma', 170, 'barna', 'barna', 'matematika', 'történelem'),
(6, 'Zsolti', 180, 'barna', 'kék', 'testnevelés', 'fizika'),
(7, 'Roxi', 169, 'barna', 'barna', 'angol', 'matematika'),
(8, 'Lili', 165, 'barna', 'szürke', 'fizika', 'magyar'),
(9, 'Réka', 169, 'vörös', 'kék', 'biológia', 'informatika');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `emberek`
--
ALTER TABLE `emberek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `emberek`
--
ALTER TABLE `emberek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
