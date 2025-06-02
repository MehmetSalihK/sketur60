# Linktree Personnel

[![Licence: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Version](https://img.shields.io/badge/Version-1.0.0-yellow.svg)]

## Description

Linktree Personnel est une alternative personnalisée à Linktree, développée avec Next.js. Elle permet de centraliser et partager vos liens sociaux de façon élégante et responsive, avec l'affichage en temps réel du statut en direct sur Twitch et Kick.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement](#lancement)
- [Fonctionnalités](#fonctionnalités)
- [API](#api)
- [Déploiement](#déploiement)
- [Contribuer](#contribuer)
- [Auteur](#auteur)
- [Licence](#licence)

## Prérequis

- Node.js v18 ou supérieur
- npm (ou yarn)
- Compte développeur Twitch pour obtenir `TWITCH_CLIENT_ID` et `TWITCH_ACCESS_TOKEN`

## Installation

```bash
git clone https://github.com/MehmetSalihK/sketur60.git
cd sketur60
npm install
```

## Configuration

1. Copier le fichier d'exemple :
   ```bash
   cp .env.example .env.local
   ```
2. Ouvrir `.env.local` et définir :
   ```env
   TWITCH_CLIENT_ID=VotreClientIDTwitch
   TWITCH_ACCESS_TOKEN=VotreTokenTwitch
   # KICK n'exige pas d'authentification, mais vous pouvez ajouter d'autres variables si besoin
   ```

## Lancement

- En développement :
  ```bash
  npm run dev
  ```
  Accédez à [http://localhost:3000](http://localhost:3000) dans votre navigateur.

- En production :
  ```bash
  npm run build
  npm start
  ```

## Fonctionnalités

- UI moderne et responsive
- Thème sombre avec animations subtiles
- Indicateur de statut en direct pour Twitch et Kick
- Liens vers les réseaux sociaux avec icônes personnalisées
- Animations fluides et effets de survol
- Optimisation des performances grâce à Next.js

## API

- **Twitch API**  
  - Endpoint : `https://api.twitch.tv/helix/streams`  
  - Authentification requise : `Client ID` et `Access Token`

- **Kick API**  
  - Endpoint : `https://kick.com/api/v2/channels`  
  - Pas d'authentification requise

## Déploiement

Le projet peut être déployé facilement sur Vercel :

1. Connectez votre dépôt GitHub à Vercel.
2. Configurez les variables d'environnement dans le dashboard Vercel.
3. Déployez, Vercel gère automatiquement le build et la mise en ligne.

## Contribuer

Les contributions sont les bienvenues !  
1. Forkez le projet  
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/MaFeature`)  
3. Commitez vos modifications (`git commit -m "Ajout de MaFeature"`)  
4. Poussez vers la branche (`git push origin feature/MaFeature`)  
5. Ouvrez une Pull Request

## Auteur

- **Mehmet Salih** – [GitHub](https://github.com/MehmetSalihK)

## Licence

Ce projet est sous licence [MIT](./LICENSE).