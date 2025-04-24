# Application de gestion des dépenses familiales

## Description
Cette application mobile permet de gérer les dépenses familiales. Elle est développée avec React Native et Expo pour le frontend, et Node.js avec Express pour le backend. La base de données utilisée est MySQL.

## Structure du projet
- `backend/` : serveur API Node.js avec Express et connexion MySQL
- `frontend/` : application mobile React Native avec Expo

## Prérequis
- Node.js et npm installés
- MySQL installé et configuré
- Expo CLI installé globalement (`npm install -g expo-cli`)

## Installation

### Backend
1. Aller dans le dossier backend :
   ```
   cd backend
   ```
2. Installer les dépendances :
   ```
   npm install express mysql2 cors
   ```
3. Configurer la connexion MySQL dans `db.js` (hôte, utilisateur, mot de passe, base de données)
4. Créer la base de données et la table `expenses` :
   ```sql
   CREATE DATABASE family_expenses;
   USE family_expenses;
   CREATE TABLE expenses (
     id INT AUTO_INCREMENT PRIMARY KEY,
     description VARCHAR(255),
     amount DECIMAL(10,2),
     category VARCHAR(100),
     date DATE
   );
   ```
5. Démarrer le serveur backend :
   ```
   node server.js
   ```

### Frontend
1. Aller dans le dossier frontend :
   ```
   cd frontend
   ```
2. Initialiser un projet Expo (si ce n'est pas déjà fait) :
   ```
   expo init .
   ```
   Choisir le template `blank` ou `blank (TypeScript)` selon préférence.
3. Installer les dépendances :
   ```
   npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-chart-kit axios @expo/vector-icons react-native-svg
   ```
4. Démarrer l'application Expo :
   ```
   expo start
   ```

## Utilisation
- Lancer d'abord le serveur backend.
- Lancer ensuite l'application Expo.
- Utiliser l'application pour ajouter, modifier, supprimer des dépenses et consulter le tableau de bord.

## Remarques
- L'API backend écoute sur le port 3000.
- L'application frontend communique avec l'API via `http://localhost:3000`.
- Pour tester sur un appareil mobile, adapter l'URL API avec l'adresse IP locale du serveur backend.

## Licence
Projet open-source.
