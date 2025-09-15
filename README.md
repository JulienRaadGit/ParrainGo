# ParrainGo - Site de codes de parrainage FR

ParrainGo est un site web qui permet de découvrir et utiliser les meilleurs codes de parrainage 2025 pour diverses applications populaires en France.

## 🚀 Fonctionnalités

- **Recherche d'applications** : Trouvez rapidement l'app qui vous intéresse
- **Codes parrainage** : Codes officiels avec bonus immédiat garanti
- **Redirection intelligente** : Boutons "Utiliser le code" avec tracking UTM
- **Copie en un clic** : Copie automatique des codes avec feedback visuel
- **SEO optimisé** : Sitemap, robots.txt, métadonnées complètes
- **Analytics** : Intégration Plausible avec événements personnalisés
- **Responsive** : Design mobile-first avec Tailwind CSS

## 🛠️ Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript (strict mode)
- **Styling** : Tailwind CSS
- **Analytics** : Plausible
- **Déploiement** : Vercel ou Firebase Hosting
- **Données** : Fichiers locaux (pas de base de données)

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd parraingo
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

3. **Lancer en développement**
   ```bash
   pnpm dev
   # ou
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Build et déploiement

### Build de production
```bash
pnpm build
pnpm start
```

### Déploiement Vercel
1. Connecter le repository à Vercel
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement

### Déploiement Firebase Hosting
```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Build du projet
pnpm build

# Déployer
firebase deploy
```

## 📁 Structure du projet

```
parraingo/
├── app/                    # App Router Next.js 14
│   ├── api/go/            # API de redirection
│   ├── app/[slug]/        # Pages dynamiques des apps
│   ├── mentions-legales/  # Pages légales
│   ├── confidentialite/
│   ├── cgu/
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── sitemap.ts         # Génération du sitemap
├── components/            # Composants React
│   ├── CopyButton.tsx     # Bouton de copie
│   ├── CodeCard.tsx       # Carte de code
│   └── Faq.tsx           # FAQ avec JSON-LD
├── data/
│   └── apps.ts           # Données des applications
├── public/               # Assets statiques
│   ├── logo.svg         # Logo principal
│   ├── favicon.svg      # Favicon
│   └── robots.txt       # Robots.txt
└── README.md
```

## 🎨 Personnalisation

### Ajouter une nouvelle application

1. **Modifier `data/apps.ts`**
   ```typescript
   {
     name: "Nouvelle App",
     slug: "nouvelle-app",
     shortDesc: "Description courte",
     howTo: [
       "Étape 1",
       "Étape 2",
       // ...
     ],
     terms: [
       "Condition 1",
       "Condition 2",
       // ...
     ],
     codes: [
       {
         id: "nouvelle-app-editor-2025",
         owner: "editor",
         code: "CODE2025",
         referralUrl: "https://example.com",
         note: "Code officiel ParrainGo"
       }
     ]
   }
   ```

2. **La page sera automatiquement générée** à l'adresse `/app/nouvelle-app`

### Modifier les couleurs

Éditer `tailwind.config.js` :
```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563EB',    // Bleu principal
      accent: '#22C55E',     // Vert accent
      ink: '#0F172A',        // Texte principal
      muted: '#64748B',      // Texte secondaire
      bg: '#F8FAFC',         // Arrière-plan
    },
  },
}
```

### Configurer Plausible Analytics

1. **Modifier le domaine** dans `app/layout.tsx` :
   ```html
   <script 
     defer 
     data-domain="votre-domaine.com" 
     src="https://plausible.io/js/script.js"
   />
   ```

2. **Événements personnalisés** déjà configurés :
   - `copy_code` : Quand un code est copié
   - `outbound_click` : Quand un lien externe est cliqué

## 🧪 Tests d'acceptation

Le projet doit passer les tests suivants :

1. ✅ **Bouton "Copier le code"** → copie ok + "Copié ✅" en 1,5s + event plausible
2. ✅ **"Utiliser le code"** → appelle `/api/go?app=slug&code=id` puis 302 avec UTM
3. ✅ **Recherche Home** → filtre instantanément
4. ✅ **`sitemap.xml`** → liste toutes `/app/[slug]`, `robots.txt` correct
5. ✅ **Pages légales** → accessibles depuis footer

## 📊 Analytics et tracking

### Événements Plausible
- `copy_code` : Code copié (props: app, code)
- `outbound_click` : Clic sur lien externe (props: app, code)

### Paramètres UTM
Tous les liens externes incluent :
- `utm_source=parraingo`
- `utm_medium=referral`
- `utm_campaign=app-[slug]`

## 🔧 Configuration

### Variables d'environnement
Créer `.env.local` si nécessaire :
```env
NEXT_PUBLIC_SITE_URL=https://parraingo.fr
PLAUSIBLE_DOMAIN=parraingo.fr
```

### Revalidation
Les pages sont générées statiquement avec revalidation de 24h :
```typescript
export const revalidate = 86400; // 24h
```

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## 📞 Support

Pour toute question ou problème :
- Email : contact@parraingo.fr
- Issues GitHub : [Créer une issue](https://github.com/username/parraingo/issues)

---

**ParrainGo** - Les meilleurs codes parrainage 2025 🚀

