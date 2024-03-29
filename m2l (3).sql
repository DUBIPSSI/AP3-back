-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 13 fév. 2024 à 11:37
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `m2l`
--

-- --------------------------------------------------------

--
-- Structure de la table `club`
--

CREATE TABLE `club` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `ville` varchar(58) NOT NULL,
  `description` varchar(1600) NOT NULL,
  `sport` varchar(58) NOT NULL,
  `site_web` varchar(1600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `id` int(11) NOT NULL,
  `nom` varchar(58) NOT NULL,
  `description` varchar(1600) NOT NULL,
  `lieu` varchar(58) NOT NULL,
  `prix` int(11) NOT NULL,
  `capacite` int(11) NOT NULL,
  `id_utilisateur` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `categorie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id`, `nom`, `description`, `lieu`, `prix`, `capacite`, `id_utilisateur`, `date`, `categorie`) VALUES
(2, 'jio', 'gygyj', 'yupi', 78, 45, NULL, '2024-01-24', ''),
(3, 'FootballFrontier', 'Hello bb je suis ici', '78280', 130, 40000, NULL, '2024-01-19', '');

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `prenom` varchar(32) NOT NULL,
  `role` int(11) NOT NULL,
  `date_de_naissance` date NOT NULL,
  `ville` varchar(32) NOT NULL,
  `departement` varchar(48) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `mail` varchar(48) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'batman.svg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `role`, `date_de_naissance`, `ville`, `departement`, `mot_de_passe`, `mail`, `avatar`) VALUES
(1, 'Borchani', 'Ryan', 0, '0000-00-00', 'Paris', '75000', '123456789', '', 'batman.svg'),
(2, 'Nicolas', 'S', 0, '2003-02-03', 'Le Mesnil-Saint-Denis', 'Yvelines', '$2b$10$h2tQ9DWYS8h249qLFoKti.KFeaUsP.lk31lI.v21G', 'NicolasS@gmail.com', 'batman.svg'),
(3, 'S', 'Nicolas', 0, '2003-12-25', 'Le Mesnil-Saint-Denis', 'Yvelines', '$2b$10$UzblIQ4IhYZZqIEOS1hHee2DCVnuhWUS05bhB4Xx8KRRW7GO9FI3a', 'SNicolas@gmail.com', 'batman.svg'),
(4, 'Nico', 'Las', 0, '2000-01-03', 'Le Mesnil-Saint-Denis', 'Yvelines', '$2b$10$wWBLmsKZfBNFMFAnpNlTYOL9o8YDNplbLI6UXjghBtvQoCdNDXCwe', 'lasNico@gmail.com', 'batman.svg'),
(5, 'Yo', 'Yo', 1, '2001-07-01', 'Versailles', 'Yvelines', '$2b$10$5CmohKfnBVnW97BcekupkeUSg.NDlc1Do8h0mh.EiDpz5PhVFnFoq', 'Yolateam@gmail.com', 'girl.svg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idutilisateur` (`id_utilisateur`);

--
-- Index pour la table `participation`
--
ALTER TABLE `participation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `club`
--
ALTER TABLE `club`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `fk_idutilisateur` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
