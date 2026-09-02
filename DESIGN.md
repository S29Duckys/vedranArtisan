# Fiche design — Vedran Artisan

Charte graphique du site vitrine (MVP front). Toutes les valeurs ci-dessous
sont déclarées en variables CSS dans `src/style.css` (section _Design tokens_).

---

## 1. Positionnement

**Vedran Artisan** — plaquiste, peintre, isolation intérieure et enduits
décoratifs en Haute-Savoie (déplacements Jura / Lons-le-Saunier).
Clientèle haut de gamme, maisons de caractère, chalets, appartements soignés.

**Intention visuelle :** artisanat noble, matière minérale, calme et
précision. On évoque le plâtre, la chaux, la lumière rasante sur un mur bien
dressé — pas le chantier BTP. Beaucoup de blanc cassé chaud, une terre cuite
sobre en accent, une typographie éditoriale.

**Mots-clés :** minéral · chaleureux · précis · confidentiel · intemporel

---

## 2. Couleurs

### Surfaces / neutres

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Fond principal | Chaux | `#F4F1EA` | `--chaux` | Fond du site, blanc plâtre chaud |
| Fond clair | Chaux pure | `#FBFAF6` | `--chaux-pure` | Cartes, boutons clairs, texte sur fond sombre |
| Surface secondaire | Sable | `#E8E2D5` | `--sable` | Sections alternées, survol de cartes |
| Filets / bordures | Lin | `#D9D2C3` | `--lin` | Séparateurs, contours de cartes |

### Encre (textes & fond sombre)

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Texte principal | Encre | `#26231F` | `--encre` | Titres, corps, fond des sections sombres |
| Fond sombre nuancé | Encre 800 | `#33302B` | `--encre-800` | Fond du formulaire |
| Texte secondaire | Encre douce | `#5A544B` | `--encre-doux` | Paragraphes d'accompagnement, légendes |

### Accent

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Accent principal | Argile | `#B4623E` | `--argile` | Liens, mots mis en valeur, puces, survol des boutons, `::selection` |
| Accent foncé | Argile foncé | `#8F4A2E` | `--argile-fonce` | États actifs / pressés (réserve) |
| Détail précieux | Laiton | `#A8894F` | `--laiton` | Sur-titres et focus sur fond sombre, statut de formulaire |

### Textes sur fond sombre

| Rôle | Nom | HEX | Variable CSS |
|---|---|---|---|
| Texte clair | Sur encre | `#ECE7DC` | `--sur-encre` |
| Texte clair atténué | Sur encre doux | `#A49C8D` | `--sur-encre-doux` |

### Contrastes (WCAG AA)

- Encre `#26231F` sur Chaux `#F4F1EA` → ~13:1 (AAA)
- Encre douce `#5A544B` sur Chaux `#F4F1EA` → ~5.6:1 (AA)
- Argile `#B4623E` sur Chaux `#F4F1EA` → ~4.0:1 — **réservé aux textes ≥ 18 px / gras et aux éléments non textuels** (bordures, puces).
- Sur encre `#ECE7DC` sur Encre `#26231F` → ~12:1 (AAA)

---

## 3. Typographie

### Familles

| Usage | Police | Fallback | Source |
|---|---|---|---|
| Titres / éditorial | **Fraunces** | `"Iowan Old Style", Georgia, "Times New Roman", serif` | Google Fonts |
| Corps / interface | **Inter** | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | Google Fonts |

Import (dans `index.html`) :

```
Fraunces: ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400
Inter:    wght@400;500;600
```

### Graisses utilisées

- **Fraunces** — 300 (léger, réserve), 400 (titres), 500 (réserve), 400 _italique_ (mots en accent, ex. « exigence », citations).
- **Inter** — 400 (corps), 500 (liens, boutons, labels forts), 600 (sur-titres, `<strong>`).

### Échelle (fluide, `clamp()`)

| Token | Min → Max | Variable | Emploi |
|---|---|---|---|
| Hero | 44 px → 80 px | `--fs-hero` | `h1` de la bannière |
| Titre 2 | 32 px → ~50 px | `--fs-h2` | Titres de section |
| Titre 3 | 20 px → 24 px | `--fs-h3` | Titres de services / cartes |
| Chapô | 17 px → 20 px | `--fs-lead` | Intro de section, accroche hero |
| Corps | 16 px | `--fs-body` | Paragraphes |
| Petit | 13 px | `--fs-small` | Sur-titres, légendes, mentions |

### Réglages fins

- Interlignage : titres `1.08`, corps `1.65`.
- Interlettrage : titres `-0.015em` ; sur-titres (`.eyebrow`) `0.22em` + majuscules ; labels de formulaire `0.12em`.
- Largeur de lecture : `52ch` max pour les intros, `46ch` pour l'accroche hero.
- `-webkit-font-smoothing: antialiased` + `text-rendering: optimizeLegibility`.

---

## 4. Espacements & structure

### Échelle d'espacement (base 8, quelques demi-pas)

| Token | Valeur | Token | Valeur |
|---|---|---|---|
| `--space-2xs` | 8 px | `--space-md` | 32 px |
| `--space-xs` | 14 px | `--space-lg` | 52 px |
| `--space-sm` | 20 px | `--space-xl` | 64 → 128 px (`clamp`, marge verticale de section) |

### Grille

- Conteneur : `max-width: 1200px` (`--container`), centré.
- Gouttière latérale : `clamp(20px, 4vw, 64px)` (`--gutter`).
- Rythme vertical des sections : `padding-block: var(--space-xl)`.
- Mises en page en `grid` : hero `1.05fr / 0.95fr`, services `2 colonnes`,
  galerie `3 colonnes` (rangées de 300 px, quelques cellules `span 2`),
  témoignages `3 colonnes`, contact `0.9fr / 1.1fr`.

### Points de rupture

| Largeur | Effet |
|---|---|
| ≤ 960 px | Passages en 1 colonne (hero, approche, zone, contact) ; grilles internes en 2 colonnes ; image hero au-dessus du texte. |
| ≤ 720 px | Menu burger ; toutes les grilles en 1 colonne ; galerie en 2 colonnes (rangées 200 px). |
| ≤ 440 px | Galerie en 1 colonne ; tagline de la marque masquée. |

---

## 5. Formes, ombres, mouvements

### Rayons

| Token | Valeur | Emploi |
|---|---|---|
| `--radius` | 3 px | Boutons, champs, petites images, puces de tag |
| `--radius-lg` | 5 px | Cartes, image hero, blocs de contenu |

Parti pris : angles quasi vifs, esprit « éditorial / matière », pas d'arrondi
marqué.

### Ombres

| Token | Valeur | Emploi |
|---|---|---|
| `--shadow-soft` | `0 26px 70px -32px rgba(38,35,31,.45)` | Image hero, panneau de menu mobile |
| `--shadow-card` | `0 14px 40px -24px rgba(38,35,31,.40)` | Cartes en survol (réserve) |

Ombres larges, très diffuses, teintées « encre » (jamais de noir pur).

### Mouvement

- Courbe standard : `--ease: cubic-bezier(0.16, 1, 0.3, 1)`.
- Durées : micro-interactions `0.25–0.35 s`, apparition au scroll `0.7 s`,
  ouverture du menu / lightbox `0.3–0.4 s`.
- Apparition : `[data-reveal]` → translation `22px` + fondu, déclenchée par
  `IntersectionObserver` (seuil 0.15).
- `@media (prefers-reduced-motion: reduce)` : toutes les transitions et
  animations neutralisées, `scroll-behavior: auto`, éléments révélés d'emblée.

---

## 6. Composants

| Composant | Notes de style |
|---|---|
| **Bouton primaire** (`.btn`) | Fond encre, texte chaux, coins 3 px. Survol → fond argile + `translateY(-2px)`. |
| **Bouton fantôme** (`.btn--ghost`) | Transparent, bordure lin, texte encre. |
| **Bouton clair** (`.btn--light`) | Fond chaux pure sur section sombre. |
| **Sur-titre** (`.eyebrow`) | 13 px, majuscules, interlettrage `0.22em`, couleur argile (laiton sur fond sombre). |
| **Header** | Sticky, fond chaux semi-transparent + `backdrop-filter: blur(10px)`. Filet lin qui apparaît au scroll (`[data-scrolled]`). |
| **Monogramme** (`.brand__mark`) | Carré 40 px, « VA » en Fraunces, encre sur chaux (inversé en footer). |
| **Cartes services** | Grille 1 px sur fond lin (effet filets), cellules chaux pure, survol sable. Numéro `01–04` en Fraunces / argile. |
| **Galerie** | Grille asymétrique, image en `object-fit: cover`, zoom `scale(1.04)` au survol, légende en dégradé encre + tag encadré. Clic → lightbox. |
| **Lightbox** | Overlay encre 92 % + blur, image `contain` (max 78vh), fermeture par clic hors image / croix / `Échap`. |
| **Formulaire** | Sur fond encre 800, champs fond encre, bordure translucide, focus bordure laiton. Erreurs : bordure + message argile clair. Validation 100 % front (voir `main.js`). |
| **Témoignages** | Cartes chaux pure, citation en Fraunces 400, auteur en Inter 600. |
| **Footer** | Fond encre, 3 colonnes (marque / nav / mentions), texte sur-encre atténué. |

---

## 7. Iconographie & imagerie

- **Pas de librairie d'icônes.** Les rares symboles (burger, croix, puces,
  flèches) sont dessinés en CSS.
- **Favicon** : `public/favicon.svg` — monogramme « VA » (chaux + argile sur
  encre).
- **Photos** : cadrages serrés sur la matière (murs enduits, lumière rasante,
  finitions), tons neutres et chauds cohérents avec la palette. Format
  portrait `4/5` pour le hero, formats variés pour la galerie.
- ⚠️ **Les images actuelles sont des placeholders Unsplash** (chargées depuis
  `images.unsplash.com`). À remplacer par les photos réelles des chantiers de
  Vedran avant mise en ligne — idéalement optimisées (`.webp`, largeurs
  multiples) et servies en local depuis `public/` ou `src/assets/`.

---

## 8. Accessibilité (points tenus dans le MVP)

- Langue `fr`, structure landmarks (`header` / `main` / `footer`), `h1` unique.
- Lien d'évitement « Aller au contenu ».
- `:focus-visible` contrasté (contour argile 2 px) sur tous les interactifs.
- Menu mobile : `aria-expanded` / `aria-controls`, fermeture `Échap`.
- Lightbox : ouverte au clavier, focus déplacé sur la croix, retour focus au
  déclencheur à la fermeture, fermeture `Échap`.
- Formulaire : `<label>` explicites, messages d'erreur liés visuellement,
  `role="status"` + `aria-live="polite"` pour le retour d'envoi.
- `prefers-reduced-motion` respecté.

---

## 9. Récapitulatif des tokens (CSS)

```css
:root {
  /* Surfaces */
  --chaux: #f4f1ea;
  --chaux-pure: #fbfaf6;
  --sable: #e8e2d5;
  --lin: #d9d2c3;

  /* Encre */
  --encre: #26231f;
  --encre-800: #33302b;
  --encre-doux: #5a544b;

  /* Accent */
  --argile: #b4623e;
  --argile-fonce: #8f4a2e;
  --laiton: #a8894f;

  /* Sur fond sombre */
  --sur-encre: #ece7dc;
  --sur-encre-doux: #a49c8d;

  /* Typo */
  --font-display: "Fraunces", "Iowan Old Style", Georgia, serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Échelle typo */
  --fs-hero: clamp(2.75rem, 1.6rem + 5.6vw, 5rem);
  --fs-h2: clamp(2rem, 1.4rem + 2.6vw, 3.15rem);
  --fs-h3: clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem);
  --fs-lead: clamp(1.05rem, 1rem + 0.35vw, 1.25rem);
  --fs-body: 1rem;
  --fs-small: 0.8125rem;

  /* Espacements */
  --space-2xs: 0.5rem;
  --space-xs: 0.875rem;
  --space-sm: 1.25rem;
  --space-md: 2rem;
  --space-lg: 3.25rem;
  --space-xl: clamp(4rem, 2rem + 8vw, 8rem);

  /* Structure */
  --container: 1200px;
  --gutter: clamp(1.25rem, 0.4rem + 4vw, 4rem);
  --radius: 3px;
  --radius-lg: 5px;

  /* Effets */
  --shadow-soft: 0 26px 70px -32px rgba(38, 35, 31, 0.45);
  --shadow-card: 0 14px 40px -24px rgba(38, 35, 31, 0.4);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --header-h: 76px;
}
```

---

## 10. À faire avant mise en ligne

- [ ] Remplacer les photos placeholder par les chantiers réels (optimisées, servies en local).
- [ ] Renseigner les vraies coordonnées (téléphone, e-mail, éventuellement adresse).
- [ ] Brancher le formulaire (service type Formspree / Basin / Netlify Forms, ou back léger).
- [ ] Rédiger la page **Mentions légales** (raison sociale, SIRET, assurance décennale, hébergeur, RGPD).
- [ ] Ajouter les balises SEO finales + `og:image`, un `sitemap.xml` et `robots.txt`.
- [ ] Auto-héberger les polices ou garder Google Fonts selon le choix RGPD.
- [ ] Vérifier le rendu sur appareils réels (iOS Safari, Android Chrome).
