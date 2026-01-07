
# ETA Vésiez

Site vitrine pour l'entreprise ETA Vésiez, réalisé avec React, Vite, Tailwind CSS et TypeScript.

🚀 **Déploiement en ligne :**
👉 https://etavesiez.github.io/ETA-Vesiez/

---

## Fonctionnalités principales

- Présentation de l'entreprise et de ses services
- Formulaire de contact
- Génération de devis assistée par IA (Gemini)
- Responsive design
- Intégration réseaux sociaux

## Démarrage local

**Prérequis :** Node.js, Yarn ou npm

1. Installer les dépendances :
   ```sh
   yarn install
   # ou
   npm install
   ```
2. Ajouter votre clé API Gemini dans un fichier `.env.local` :
   ```env
   GEMINI_API_KEY=VOTRE_CLE_API
   ```
3. Lancer le serveur de développement :
   ```sh
   yarn dev
   # ou
   npm run dev
   ```

## Déploiement

- **Automatique** : via GitHub Actions sur chaque push sur `main` (voir `.github/workflows/deploy.yml`)
- **Manuel** :
   ```sh
   yarn build
   yarn deploy
   ```
  (Nécessite un token GitHub si dépôt privé)

## Stack technique

- React 19
- Vite
- Tailwind CSS
- TypeScript
- Gemini API (Google)

## Auteur

Louis Vésiez / Camille Vésiez

---
© 2025 ETA Vésiez
