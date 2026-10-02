# SanitusLearn

## Introduction

SanitusLearn est une plateforme d'apprentissage en ligne (e-learning) développée avec Angular. Cette application permet aux étudiants et aux formateurs de gérer des cours, des modules d'apprentissage, des forums de discussion, des évaluations, et bien plus encore.

### Objectifs du Projet

- Fournir une interface moderne et intuitive pour l'apprentissage en ligne
- Faciliter la gestion des cours et des modules pédagogiques
- Permettre l'interaction entre étudiants et formateurs via des forums et un système de chat
- Offrir un suivi des progrès avec des notes et des rapports
- Centraliser les ressources pédagogiques (fichiers, vidéos, questionnaires)

### Public Cible

- **Étudiants** : Accès aux cours, modules, vidéos, questionnaires et forums
- **Formateurs** : Gestion des contenus pédagogiques et suivi des étudiants
- **Administrateurs** : Gestion globale de la plateforme

---

## Technologies et Outils

### Framework et Bibliothèques Principales

- **Angular** : Version 16.2.0
  - Framework frontend basé sur TypeScript
  - Architecture modulaire avec composants réutilisables
  - Système de routing intégré

- **TypeScript** : Version 5.1.3
  - Langage de programmation typé
  - Compilation vers JavaScript ES2022

- **RxJS** : Version 7.8.0
  - Bibliothèque pour la programmation réactive
  - Gestion des observables et des flux de données asynchrones

- **Zone.js** : Version 0.13.0
  - Détection automatique des changements dans Angular

### Outils de Développement

- **Angular CLI** : Version 16.2.16
  - Outil en ligne de commande pour le développement Angular
  - Génération de composants, services, modules

- **Karma** : Version 6.4.0
  - Test runner pour les tests unitaires

- **Jasmine** : Version 4.6.0
  - Framework de test pour JavaScript/TypeScript

- **Bootstrap Icons** : Utilisé pour les icônes de l'interface

### Configuration

- **Node.js** : Requis pour l'exécution de npm
- **npm** : Gestionnaire de paquets (défini dans angular.json)
- **ES2022** : Version cible de JavaScript

---

## Architecture du Projet

### Structure des Répertoires

```
campus-angular/
├── src/
│   ├── app/
│   │   ├── pages/              # Composants de pages
│   │   │   ├── index/          # Page d'accueil
│   │   │   ├── connexion/      # Authentification
│   │   │   ├── register/       # Inscription
│   │   │   ├── courses/        # Liste des cours
│   │   │   ├── course-view/    # Vue détaillée d'un cours
│   │   │   ├── modules/        # Modules d'apprentissage (1-5)
│   │   │   ├── videos/         # Gestion des vidéos
│   │   │   ├── forums/         # Forums de discussion
│   │   │   ├── chat/           # Système de messagerie
│   │   │   ├── grades/         # Notes et évaluations
│   │   │   ├── calendar/       # Calendrier
│   │   │   ├── profile/        # Profil utilisateur
│   │   │   └── ...
│   │   ├── shared/             # Composants partagés
│   │   │   ├── navigation/     # Barre de navigation
│   │   │   ├── sidebar/        # Barre latérale
│   │   │   ├── dropdown-menu/  # Menu déroulant
│   │   │   └── help-icon/      # Icône d'aide
│   │   ├── app.component.ts    # Composant racine
│   │   ├── app.module.ts       # Module principal
│   │   └── app-routing.module.ts # Configuration du routing
│   ├── assets/                 # Ressources statiques
│   ├── index.html              # Point d'entrée HTML
│   ├── main.ts                 # Point d'entrée TypeScript
│   └── styles.css              # Styles globaux
├── angular.json                 # Configuration Angular
├── package.json                 # Dépendances du projet
└── tsconfig.json                # Configuration TypeScript
```

### Architecture des Composants

#### Composant Racine (`AppComponent`)

Le composant racine gère :
- L'affichage conditionnel de la sidebar (masquée sur la page chat)
- La structure globale de l'application avec les composants partagés

#### Composants Partagés (`shared/`)

1. **NavigationComponent** : Barre de navigation principale
2. **SidebarComponent** : Menu latéral de navigation
3. **DropdownMenuComponent** : Menu déroulant pour les actions utilisateur
4. **HelpIconComponent** : Icône d'aide flottante

#### Composants de Pages (`pages/`)

Chaque page est un module Angular indépendant avec :
- `.component.ts` : Logique du composant
- `.component.html` : Template HTML
- `.component.css` : Styles spécifiques au composant

### Système de Routing

Le routing est configuré dans `app-routing.module.ts` avec les routes suivantes :

- **Routes publiques** :
  - `/` : Page d'accueil
  - `/connexion` : Connexion
  - `/register` : Inscription
  - `/forget-password` : Récupération de mot de passe

- **Routes de cours** :
  - `/courses` : Liste des cours
  - `/course-view` : Vue détaillée d'un cours
  - `/module1-index` à `/module5-index` : Modules d'apprentissage

- **Routes pédagogiques** :
  - `/videos`, `/videos-1`, `/videos-3`, `/videos-4` : Gestion des vidéos
  - `/files` : Fichiers et ressources
  - `/grades` : Notes et évaluations
  - Questionnaires d'assimilation et d'évaluation partielle

- **Routes de communication** :
  - `/chat` : Messagerie instantanée
  - `/forums` : Forums de discussion
  - `/introduction-forum` : Introduction aux forums
  - `/questions-general-doubts` : Questions générales

- **Routes utilisateur** :
  - `/profile` : Profil utilisateur
  - `/preferences` : Préférences
  - `/notifications` : Notifications
  - `/calendar` : Calendrier
  - `/reports` : Rapports
  - `/support` : Support
  - `/contact` : Contact
  - `/faq` : FAQ
  - `/cafeteria` : Cafétéria

### Module Principal (`AppModule`)

Le module principal déclare tous les composants de l'application et importe :
- `BrowserModule` : Pour le rendu dans le navigateur
- `FormsModule` : Pour la gestion des formulaires
- `AppRoutingModule` : Pour le système de routing

---

## Fonctionnalités

### 1. Authentification et Gestion des Utilisateurs

- **Connexion** (`/connexion`) : Authentification des utilisateurs
- **Inscription** (`/register`) : Création de nouveaux comptes
- **Récupération de mot de passe** (`/forget-password`) : Réinitialisation du mot de passe
- **Profil utilisateur** (`/profile`) : Gestion du profil personnel
- **Préférences** (`/preferences`) : Configuration des préférences utilisateur

### 2. Gestion des Cours

- **Page d'accueil** (`/`) : Affichage des cours de l'utilisateur
- **Liste des cours** (`/courses`) : Vue complète de tous les cours disponibles
- **Vue détaillée** (`/course-view`, `/course-view-2`) : Détails d'un cours spécifique
- **Modules d'apprentissage** : 5 modules numérotés avec leurs contenus

### 3. Contenu Pédagogique

- **Vidéos** : Plusieurs pages de gestion de vidéos pédagogiques
- **Fichiers** (`/files`) : Bibliothèque de fichiers et ressources
- **Questionnaires** :
  - Questionnaires d'assimilation (4 topics pour M1-CAT1)
  - Questionnaires d'évaluation partielle (4 topics pour M1C1)
- **Modules spécifiques** :
  - MF1, MF1-TEMA2-Parte1, MF1-TEMA2-Parte2

### 4. Communication et Collaboration

- **Chat** (`/chat`) : Messagerie instantanée avec interface moderne
  - Indicateur de statut en ligne
  - Historique des messages
  - Actions (appel vidéo, appel vocal)
- **Forums** (`/forums`) : Forums de discussion
  - Introduction aux forums
  - Questions générales et doutes
- **Notifications** (`/notifications`) : Centre de notifications

### 5. Suivi et Évaluation

- **Notes** (`/grades`) : Consultation des notes et évaluations
- **Rapports** (`/reports`) : Rapports de progression
- **Calendrier** (`/calendar`) : Planning des cours et événements

### 6. Support et Aide

- **FAQ** (`/faq`) : Questions fréquemment posées
- **Support** (`/support`) : Centre d'assistance
- **Contact** (`/contact`) : Formulaire de contact
- **Icône d'aide** : Composant flottant pour accès rapide à l'aide

### 7. Fonctionnalités Supplémentaires

- **Cafétéria** (`/cafeteria`) : Informations sur la cafétéria
- **Navigation responsive** : Menu adaptatif selon la page active

---

## Gestion des Données

### État Actuel

L'application utilise actuellement des données statiques dans les templates HTML. Pour une application complète, il est recommandé d'intégrer :

### Recommandations pour la Gestion des Données

#### 1. Services Angular

Créer des services pour :
- **AuthService** : Gestion de l'authentification
- **CourseService** : Gestion des cours et modules
- **UserService** : Gestion des utilisateurs
- **ChatService** : Gestion des messages
- **ForumService** : Gestion des forums
- **GradeService** : Gestion des notes
- **NotificationService** : Gestion des notifications

#### 2. Modèles de Données

Définir des interfaces TypeScript pour :
- `User` : Informations utilisateur
- `Course` : Structure d'un cours
- `Module` : Structure d'un module
- `Message` : Structure d'un message de chat
- `ForumPost` : Structure d'un post de forum
- `Grade` : Structure d'une note
- `Notification` : Structure d'une notification

#### 3. Intégration Backend

- **API REST** : Communication avec un backend via HttpClient
- **WebSockets** : Pour le chat en temps réel
- **LocalStorage/SessionStorage** : Stockage local des préférences
- **State Management** : Considérer NgRx pour les applications complexes

#### 4. Exemple de Structure de Service

```typescript
// Exemple : course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'https://api.example.com/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
}
```

---

## Sécurité

### Mesures de Sécurité à Implémenter

#### 1. Authentification

- **JWT (JSON Web Tokens)** : Pour l'authentification sécurisée
- **Refresh Tokens** : Pour renouveler les sessions
- **Hachage des mots de passe** : Utiliser bcrypt ou équivalent côté serveur
- **Validation des formulaires** : Validation côté client et serveur

#### 2. Autorisation

- **Guards Angular** : Protection des routes
  - `AuthGuard` : Vérification de l'authentification
  - `RoleGuard` : Vérification des rôles (étudiant, formateur, admin)
- **Intercepteurs HTTP** : Ajout automatique des tokens aux requêtes

#### 3. Protection des Données

- **HTTPS** : Communication chiffrée
- **CORS** : Configuration appropriée côté serveur
- **Sanitization** : Nettoyage des entrées utilisateur (DomSanitizer)
- **XSS Protection** : Protection contre les attaques XSS
- **CSRF Protection** : Protection contre les attaques CSRF

#### 4. Bonnes Pratiques

- Ne jamais stocker de mots de passe en clair
- Valider toutes les entrées utilisateur
- Utiliser des variables d'environnement pour les clés API
- Implémenter un système de logs pour la sécurité
- Mettre en place un système de rate limiting

#### 5. Exemple de Guard

```typescript
// Exemple : auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/connexion']);
    return false;
  }
}
```

---

## Tests

### Configuration Actuelle

Le projet est configuré avec :
- **Karma** : Test runner
- **Jasmine** : Framework de test
- **Coverage** : Karma-coverage pour les rapports de couverture

### Types de Tests

#### 1. Tests Unitaires

Tester les composants, services et pipes individuellement :

```typescript
// Exemple : app.component.spec.ts
describe('AppComponent', () => {
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should hide sidebar on chat page', () => {
    // Test de la logique showSidebar
  });
});
```

#### 2. Tests d'Intégration

Tester l'interaction entre plusieurs composants :
- Navigation entre les pages
- Communication parent-enfant
- Intégration avec les services

#### 3. Tests E2E (End-to-End)

Utiliser **Protractor** ou **Cypress** pour :
- Tester les flux utilisateur complets
- Tester l'authentification
- Tester la navigation

### Commandes de Test

```bash
# Exécuter les tests unitaires
npm test

# Exécuter les tests avec couverture
npm test -- --code-coverage

# Exécuter les tests en mode watch
npm test -- --watch
```

### Bonnes Pratiques de Test

- Maintenir une couverture de code > 80%
- Tester les cas limites et les erreurs
- Utiliser des mocks pour les dépendances externes
- Tester les interactions utilisateur
- Automatiser les tests dans le CI/CD

---

## Déploiement

### Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn
- Serveur web (Nginx, Apache, ou service cloud)

### Build de Production

#### 1. Configuration

Le fichier `angular.json` contient la configuration de build avec :
- Optimisations activées en production
- Source maps désactivées
- Hashing des fichiers pour le cache
- Budgets de taille définis (500kb warning, 1mb error)

#### 2. Commandes de Build

```bash
# Build de production
npm run build

# Build avec configuration spécifique
ng build --configuration production

# Build avec analyse de bundle
ng build --stats-json
```

#### 3. Options de Déploiement

##### A. Déploiement Statique (Recommandé)

**Netlify / Vercel / GitHub Pages** :
1. Build l'application : `npm run build`
2. Déployer le dossier `dist/campus-angular`
3. Configurer les redirections pour le routing Angular (toutes les routes vers `index.html`)

**Configuration Netlify** (`netlify.toml`) :
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

##### B. Serveur Web Traditionnel

**Nginx** :
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/campus-angular;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache** (`.htaccess`) :
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

##### C. Docker

Créer un `Dockerfile` :
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/campus-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Variables d'Environnement

Créer des fichiers d'environnement :
- `src/environments/environment.ts` : Développement
- `src/environments/environment.prod.ts` : Production

```typescript
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com',
  // Autres configurations
};
```

### Checklist de Déploiement

- [ ] Build de production réussi
- [ ] Tests passés
- [ ] Variables d'environnement configurées
- [ ] URLs d'API mises à jour
- [ ] HTTPS configuré
- [ ] Redirections pour le routing configurées
- [ ] Compression activée (gzip/brotli)
- [ ] Cache configuré
- [ ] Monitoring et logs configurés

---

## Bonnes Pratiques et Conventions

### 1. Conventions de Nommage

#### Fichiers et Dossiers
- **Composants** : `kebab-case` (ex: `course-view.component.ts`)
- **Services** : `kebab-case` avec suffixe `.service.ts` (ex: `auth.service.ts`)
- **Interfaces** : `PascalCase` avec préfixe `I` optionnel (ex: `IUser` ou `User`)
- **Constantes** : `UPPER_SNAKE_CASE` (ex: `API_BASE_URL`)

#### Code TypeScript
- **Classes** : `PascalCase` (ex: `CourseService`)
- **Variables et fonctions** : `camelCase` (ex: `getCourses()`)
- **Propriétés privées** : Préfixe `_` optionnel (ex: `_privateProperty`)

### 2. Structure des Composants

Chaque composant doit suivre cette structure :

```typescript
// 1. Imports
import { Component, OnInit } from '@angular/core';

// 2. Décorateur
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

// 3. Classe
export class ExampleComponent implements OnInit {
  // 3.1 Propriétés publiques
  public title: string = 'Example';
  
  // 3.2 Propriétés privées
  private _data: any;
  
  // 3.3 Constructeur
  constructor() {}
  
  // 3.4 Lifecycle hooks
  ngOnInit(): void {}
  
  // 3.5 Méthodes publiques
  public doSomething(): void {}
  
  // 3.6 Méthodes privées
  private _helperMethod(): void {}
}
```

### 3. Gestion des Erreurs

- Utiliser `try-catch` pour les opérations asynchrones
- Implémenter un service de gestion d'erreurs global
- Afficher des messages d'erreur conviviaux à l'utilisateur
- Logger les erreurs pour le débogage

### 4. Performance

- **Lazy Loading** : Charger les modules à la demande
- **OnPush Change Detection** : Utiliser `ChangeDetectionStrategy.OnPush` quand possible
- **TrackBy Functions** : Pour les `*ngFor` avec de grandes listes
- **Unsubscribe** : Se désabonner des observables pour éviter les fuites mémoire
- **Images** : Optimiser et utiliser le lazy loading pour les images

### 5. Accessibilité

- Utiliser les attributs ARIA appropriés
- Assurer la navigation au clavier
- Contraste de couleurs suffisant
- Labels pour les formulaires
- Structure sémantique HTML

### 6. Code Quality

- **ESLint** : Linter pour TypeScript/JavaScript
- **Prettier** : Formateur de code
- **Husky** : Git hooks pour les vérifications pré-commit
- **Conventional Commits** : Format standardisé pour les messages de commit

### 7. Documentation du Code

```typescript
/**
 * Service pour la gestion des cours
 * 
 * @example
 * ```typescript
 * constructor(private courseService: CourseService) {}
 * 
 * this.courseService.getCourses().subscribe(courses => {
 *   console.log(courses);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  /**
   * Récupère la liste de tous les cours
   * @returns Observable contenant un tableau de cours
   */
  getCourses(): Observable<Course[]> {
    // Implémentation
  }
}
```

### 8. Gestion des Versions

- Utiliser le **Semantic Versioning** (MAJOR.MINOR.PATCH)
- Maintenir un **CHANGELOG.md**
- Taguer les releases dans Git

---

## Annexes

### A. Commandes Utiles

#### Développement
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
# ou
ng serve

# Démarrer sur un port spécifique
ng serve --port 4201

# Build en mode développement
npm run build
# ou
ng build

# Build en mode watch
npm run watch
```

#### Tests
```bash
# Exécuter les tests
npm test

# Tests avec couverture
npm test -- --code-coverage

# Tests en mode watch
npm test -- --watch
```

#### Génération de Code
```bash
# Générer un composant
ng generate component pages/nouvelle-page
# ou
ng g c pages/nouvelle-page

# Générer un service
ng generate service services/nouveau-service
# ou
ng g s services/nouveau-service

# Générer un module
ng generate module modules/nouveau-module
# ou
ng g m modules/nouveau-module
```

### B. Structure des Routes Complète

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | IndexComponent | Page d'accueil avec les cours |
| `/connexion` | ConnexionComponent | Authentification |
| `/register` | RegisterComponent | Inscription |
| `/forget-password` | ForgetPasswordComponent | Récupération de mot de passe |
| `/courses` | CoursesComponent | Liste des cours |
| `/course-view` | CourseViewComponent | Vue détaillée d'un cours |
| `/course-view-2` | CourseView2Component | Vue alternative d'un cours |
| `/module1-index` à `/module5-index` | ModuleXIndexComponent | Modules d'apprentissage |
| `/videos`, `/videos-1`, `/videos-3`, `/videos-4` | VideosComponent | Gestion des vidéos |
| `/files` | FilesComponent | Fichiers et ressources |
| `/grades` | GradesComponent | Notes et évaluations |
| `/chat` | ChatComponent | Messagerie instantanée |
| `/forums` | ForumsComponent | Forums de discussion |
| `/profile` | ProfileComponent | Profil utilisateur |
| `/preferences` | PreferencesComponent | Préférences |
| `/notifications` | NotificationsComponent | Notifications |
| `/calendar` | CalendarComponent | Calendrier |
| `/reports` | ReportsComponent | Rapports |
| `/support` | SupportComponent | Support |
| `/contact` | ContactComponent | Contact |
| `/faq` | FaqComponent | FAQ |
| `/cafeteria` | CafeteriaComponent | Cafétéria |

### C. Dépendances Principales

#### Dependencies
- `@angular/animations`: ^16.2.0
- `@angular/common`: ^16.2.0
- `@angular/compiler`: ^16.2.0
- `@angular/core`: ^16.2.0
- `@angular/forms`: ^16.2.0
- `@angular/platform-browser`: ^16.2.0
- `@angular/platform-browser-dynamic`: ^16.2.0
- `@angular/router`: ^16.2.0
- `rxjs`: ~7.8.0
- `tslib`: ^2.3.0
- `zone.js`: ~0.13.0

#### DevDependencies
- `@angular-devkit/build-angular`: ^16.2.16
- `@angular/cli`: ^16.2.16
- `@angular/compiler-cli`: ^16.2.0
- `@types/jasmine`: ~4.3.0
- `jasmine-core`: ~4.6.0
- `karma`: ~6.4.0
- `karma-chrome-launcher`: ~3.2.0
- `karma-coverage`: ~2.2.0
- `karma-jasmine`: ~5.1.0
- `karma-jasmine-html-reporter`: ~2.1.0
- `typescript`: ~5.1.3

### D. Configuration TypeScript

Le projet utilise une configuration TypeScript stricte :
- `strict: true` : Mode strict activé
- `noImplicitOverride: true` : Vérification des overrides
- `noImplicitReturns: true` : Vérification des retours
- `strictInjectionParameters: true` : Vérification stricte des paramètres d'injection
- `strictTemplates: true` : Vérification stricte des templates

### E. Ressources et Liens Utiles

- **Documentation Angular** : https://angular.io/docs
- **Angular CLI** : https://angular.io/cli
- **TypeScript** : https://www.typescriptlang.org/docs/
- **RxJS** : https://rxjs.dev/
- **Bootstrap Icons** : https://icons.getbootstrap.com/

### F. Contact et Support

Pour toute question ou problème concernant ce projet, veuillez :
1. Consulter la FAQ (`/faq`)
2. Contacter le support (`/support`)
3. Utiliser le formulaire de contact (`/contact`)

---

**Version du Document** : 1.0  
**Dernière Mise à Jour** : 2024  
**Auteur** : Équipe de Développement SanitusLearn
