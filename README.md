# Ynov-User

Projet réalisé dans le cadre d'un TP afin de s'exercer et de mieux comprendre React et TypeScript à Ynov.

Le projet consiste en une application web qui permet de consulter des recettes, de parcourir un annuaire d'utilisateurs et de tester une connexion à partir des fichiers JSON fournis.

## Technologies

- React et TypeScript
- React Router pour la navigation
- Vite pour lancer et compiler le projet

## Installation et lancement

Prérequis : Node.js 22.12 ou une version plus récente compatible, avec npm. Git est nécessaire pour cloner le dépôt.

```bash
git clone https://github.com/Harld9/Ynov-User.git
cd Ynov-User
npm install
npm run dev
```

Ouvrir ensuite l'adresse indiquée dans le terminal, généralement `http://localhost:5173`.

## Fonctionnalités

- Accueil avec le nom de l'auteur et la liste des recettes : titre, temps de préparation et vignette.
- Détail d'une recette avec son image, ses ingrédients et ses instructions.
- Annuaire affichant les pseudos des utilisateurs.
- Fiche publique d'un utilisateur avec son image et son pseudo.
- Formulaire de connexion vérifiant le pseudo et le mot de passe dans le JSON.
- Redirection vers le profil après une connexion réussie, avec les informations de l'utilisateur.
- Header commun aux pages et adaptation simple aux petits écrans.
- Page 404 pour les adresses qui ne correspondent à aucune route.

## Tester la connexion

Les comptes de démonstration sont dans `src/data/users.json`.

1. Choisir un utilisateur dans ce fichier.
2. Ouvrir la page « Se connecter ».
3. Saisir son `username` et son `password`.
4. Si les identifiants correspondent, l'application ouvre son profil. Sinon, elle affiche un message d'erreur.

Il s'agit d'un **fake login pour le TP**, réalisé côté client, sans serveur d'authentification. Les informations du profil sont transmises par la navigation React Router. Ce fonctionnement ne constitue pas une authentification sécurisée pour de vraies données personnelles.

## Pages

| Adresse | Contenu |
| --- | --- |
| `/` | Accueil et recettes |
| `/recipe/:id` | Détail d'une recette |
| `/userlist` | Annuaire |
| `/user/:id` | Fiche publique d'un utilisateur |
| `/connexion` | Formulaire de connexion |
| `/profil` | Profil après connexion |
| Toute autre adresse | Page 404 |

## Organisation du projet

- `src/components` : composants réutilisés, dont le header.
- `src/pages` : pages de l'application.
- `src/data` : fichiers `recipes.json` et `users.json`.
- `src/main.tsx` : configuration des routes et du layout commun.
- `src/App.tsx` : page d'accueil.
- `src/index.css` et `src/App.css` : styles du site.