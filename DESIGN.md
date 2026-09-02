# Fiche design — Vedran Artisan · template tp-2 « Ardoise & Sauge »

Charte graphique du site vitrine (MVP front). Toutes les valeurs ci-dessous
sont déclarées en variables CSS dans `src/style.css` (section _1. Design
tokens_).

---

## 1. Positionnement

**Vedran Artisan** — plaquiste, peintre, isolation intérieure et enduits
décoratifs en Haute-Savoie (déplacements Jura / Lons-le-Saunier).
Clientèle haut de gamme : maisons de caractère, chalets, appartements soignés.

**Intention visuelle :** un artisanat minéral et architectural. On évoque
l'ardoise, la pierre, la lumière du soir sur un mur enduit — pas le chantier
BTP. Fonds sombres profonds en contrepoint d'un blanc craie froid, un vert
sauge (pigment naturel, montagne) en signature, un filet de laiton pour le
détail précieux. Typographie éditoriale à fort contraste.

**Mots-clés :** minéral · architectural · sobre · contrasté · intemporel

**Différence avec tp-1 (« chaux & argile ») :** tp-1 est chaud, clair, terre
cuite ; tp-2 est froid, sombre-dominant, vert sauge. Angles vifs (rayon 0) au
lieu d'arrondis. Hero en image plein écran au lieu d'une composition claire.

---

## 2. Couleurs

### Surfaces claires

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Fond principal | Craie | `#F5F5F1` | `--craie` | Fond du site, blanc froid |
| Fond pur | Craie pure | `#FCFCFA` | `--craie-pure` | Cartes, boutons clairs, texte sur fond sombre |
| Surface secondaire | Brume | `#E7E8E2` | `--brume` | Section témoignages, fonds alternés |
| Filets / bordures | Brume lin | `#D6D8CD` | `--brume-lin` | Séparateurs, hairlines sur fond clair |

### Ardoise (encre & fonds sombres)

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Texte principal / fond sombre | Ardoise | `#1C1F1D` | `--ardoise` | Titres, corps, fond des sections sombres, hero |
| Fond sombre nuancé | Ardoise 800 | `#292D2A` | `--ardoise-800` | Fond du formulaire |
| Texte secondaire | Ardoise 500 | `#575D57` | `--ardoise-500` | Paragraphes d'accompagnement, légendes, listes |

### Accent — sauge

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Accent décoratif | Sauge | `#7C8C70` | `--sauge` | Numéros de service, puces, filets de titre, `::selection`, guillemets |
| Accent lisible / liens | Sauge foncé | `#5E6E54` | `--sauge-fonce` | Liens sur fond clair, `.eyebrow`, survol des boutons, focus |
| Accent sur fond sombre | Sauge clair | `#AAB79F` | `--sauge-clair` | Mots en valeur du hero, liens survolés sur sombre, statut OK du formulaire |

### Détail précieux

| Rôle | Nom | HEX | Variable CSS | Usage |
|---|---|---|---|---|
| Laiton | Laiton | `#AD9160` | `--laiton` | Sur-titres sur fond sombre, numéros de la méthode, focus des champs |

### Textes sur fond sombre

| Rôle | Nom | HEX | Variable CSS |
|---|---|---|---|
| Texte clair | Sur ardoise | `#E6E7E0` | `--sur-ardoise` |
| Texte clair atténué | Sur ardoise doux | `#9DA097` | `--sur-ardoise-doux` |

### Contrastes (WCAG)

- Ardoise `#1C1F1D` sur Craie `#F5F5F1` → ~15:1 (AAA)
- Ardoise 500 `#575D57` sur Craie `#F5F5F1` → ~4.9:1 (AA texte normal)
- Sauge foncé `#5E6E54` sur Craie `#F5F5F1` → ~4.9:1 (AA texte normal) → **couleur des liens**
- Sauge `#7C8C70` sur Craie `#F5F5F1` → ~3.0:1 → **réservé au non-textuel** (puces, filets, numéros ≥ 24 px)
- Sur ardoise `#E6E7E0` sur Ardoise `#1C1F1D` → ~13:1 (AAA)
- Sur ardoise doux `#9DA097` sur Ardoise `#1C1F1D` → ~6.5:1 (AA)
- Laiton `#AD9160` sur Ardoise `#1C1F1D` → ~6.0:1 (AA)

---

## 3. Typographie

### Familles

| Usage | Police | Fallback | Source |
|---|---|---|---|
| Titres / éditorial | **Cormorant Garamond** | `"Iowan Old Style", Georgia, "Times New Roman", serif` | Google Fonts |
| Corps / interface | **Manrope** | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | Google Fonts |

Import (dans `index.html`) :

```
Cormorant Garamond : ital,wght@0,300;0,400;0,500;1,400
Manrope            : wght@400;500;600;700
```

### Graisses utilisées

- **Cormorant Garamond** — 300 (manifeste, grands blocs légers), 400 (titres,
  citations, coordonnées), 500 (chiffres du hero, marque), 400 _italique_
  (mots en accent : « le détail juste », « C'est là que… »).
- **Manrope** — 400 (corps), 500 (liens de nav), 600 (sur-titres, boutons,
  labels, `<strong>`, titres de colonnes), 700 (réserve).

> Cormorant Garamond est une serif à fort contraste et d'aspect délicat :
> elle est volontairement employée en **grandes tailles** (titres, hero,
> citations). Ne pas la descendre sous ~20 px.

### Échelle (fluide, `clamp()`)

| Token | Min → Max | Variable | Emploi |
|---|---|---|---|
| Hero | 46 px → 92 px | `--fs-hero` | `h1` de la bannière |
| Titre 2 | 33 px → ~54 px | `--fs-h2` | Titres de section |
| Titre 3 | 21 px → ~26 px | `--fs-h3` | Titres de services |
| Chapô | 17 px → ~21 px | `--fs-lead` | Intro de section, accroche hero |
| Corps | 16 px | `--fs-body` | Paragraphes |
| Petit | 12.5 px | `--fs-small` | Sur-titres, légendes, mentions |

Le manifeste utilise une taille dédiée : `clamp(1.6rem, 1rem + 2.6vw, 2.9rem)`.

### Réglages fins

- Interlignage : titres `1.08`, corps `1.7`, manifeste `1.32`, citations `1.4`.
- Interlettrage : titres `-0.005em` ; hero `-0.01em` ; sur-titres (`.eyebrow`)
  `0.24em` + majuscules ; labels de formulaire `0.1em` ; boutons `0.04em`.
- Largeur de lecture : `52ch` pour les intros de section, `46ch` pour
  l'accroche hero, `28ch` pour le manifeste.
- `-webkit-font-smoothing: antialiased` + `text-rendering: optimizeLegibility`.

---

## 4. Espacements & structure

### Échelle d'espacement (base 8)

| Token | Valeur | Token | Valeur |
|---|---|---|---|
| `--space-2xs` | 8 px | `--space-lg` | 56 px |
| `--space-xs` | 14 px | `--space-md` | 32 px |
| `--space-sm` | 20 px | `--space-xl` | 72 → 144 px (`clamp`, marge verticale de section) |

### Grille

- Conteneur : `max-width: 1220px` (`--container`), centré.
- Gouttière latérale : `clamp(20px, 4.5vw, 72px)` (`--gutter`).
- Rythme vertical des sections : `padding-block: var(--space-xl)`.
- Mises en page en `grid` :
  - hero — colonne unique, contenu aligné en bas ;
  - services — `5rem / 1fr` (index + corps), séparés par des filets ;
  - méthode — `0.85fr / 1.15fr`, étapes en grille `2 × 2` ;
  - galerie — `3 colonnes`, rangées de 300 px, cellules `span 2` (haute / large) ;
  - témoignages — `3 colonnes` ;
  - zone & contact — `0.9fr / 1.1fr`.

### Points de rupture

| Largeur | Effet |
|---|---|
| ≤ 980 px | Méthode / zone / contact en 1 colonne ; galerie en 2 colonnes (rangées 260 px) ; témoignages en 1 colonne ; footer en 1 colonne. |
| ≤ 720 px | Menu burger (panneau ardoise déroulant) ; services en 1 colonne ; étapes de la méthode en 1 colonne ; formulaire en 1 colonne. |
| ≤ 460 px | Galerie en 1 colonne (spans annulés) ; tagline de la marque masquée. |

---

## 5. Formes, ombres, mouvements

### Rayons

| Token | Valeur | Emploi |
|---|---|---|
| `--radius` | `0` | Boutons, champs, cartes — angles vifs, parti pris architectural |
| `--radius-img` | `2px` | Images de galerie, image de lightbox |

### Filets & ombres

| Token | Valeur | Emploi |
|---|---|---|
| `--hairline` | `1px solid var(--brume-lin)` | Séparateurs sur fond clair (services, cartes, header scrollé) |
| `--hairline-dark` | `1px solid rgba(230,231,224,.16)` | Séparateurs sur fond sombre (méthode, formulaire, footer) |
| `--shadow` | `0 30px 80px -42px rgba(28,31,29,.55)` | Réserve (éléments en survol) |

Peu d'ombres : le relief vient des **aplats sombres** et des **filets**, pas
des ombres portées. Jamais de noir pur — tout est teinté « ardoise ».

### Mouvement

- Courbe standard : `--ease: cubic-bezier(0.16, 1, 0.3, 1)`.
- Durées : micro-interactions `0.2–0.3 s`, survol image galerie `0.6 s`,
  apparition au scroll `0.7 s`, menu mobile `0.3 s`.
- Apparition : `[data-reveal]` → translation `24px` + fondu, déclenchée par
  `IntersectionObserver` (seuil 0.15, `rootMargin` `0px 0px -8%`).
- Header : `[data-scrolled]` au-delà de 8 px → fond craie translucide +
  `backdrop-filter: blur(12px)` + filet. Tant que non scrollé au-dessus du
  hero, la marque et la nav passent en clair.
- `@media (prefers-reduced-motion: reduce)` : transitions et animations
  neutralisées, `scroll-behavior: auto`, éléments révélés d'emblée.

---

## 6. Composants

| Composant | Notes de style |
|---|---|
| **Bouton primaire** (`.btn`) | Fond ardoise, texte craie, majuscules `0.04em`, angles vifs. Survol → fond sauge foncé + `translateY(-2px)`. |
| **Bouton clair** (`.btn--light`) | Fond craie pure ; survol → sauge clair. Utilisé sur hero, formulaire. |
| **Bouton fantôme clair** (`.btn--ghost-light`) | Transparent, bordure claire translucide, texte clair. Hero. |
| **Bouton petit** (`.btn--small`) | Padding réduit, pour le CTA de la nav. |
| **Sur-titre** (`.eyebrow`) | 12.5 px, majuscules, interlettrage `0.24em`, sauge foncé (`--laiton` sur fond sombre via `.eyebrow--light`). |
| **Header** | Sticky, transparent sur le hero (marque + nav en clair), devient craie translucide + blur + hairline au scroll. Souligné de nav animé (`scaleX`). |
| **Monogramme** (`.brand__mark`) | Carré 42 px, « VA » en Cormorant, craie sur ardoise (inversé sur fond sombre et footer). |
| **Hero** | Image plein écran en `object-fit: cover`, `grayscale(.2) brightness(.62)` + dégradé ardoise. Contenu aligné en bas. Barre de faits en pied, filet + léger blur. |
| **Manifeste** | Bloc de texte Cormorant 300, très aéré, largeur `28ch`, séparé par des filets haut/bas. |
| **Services** | Liste numérotée `01–04` (Cormorant / sauge), lignes séparées par des filets pleine largeur. Aucune carte. |
| **Méthode** | Section ardoise. Étapes en grille `2 × 2` façon carrelage (fond ardoise, joints clairs translucides), numéros en laiton. |
| **Galerie** | Grille asymétrique 3 colonnes, `object-fit: cover`, zoom `scale(1.05)` + assombrissement au survol, légende en dégradé + tag encadré (bordure claire). Clic → lightbox. |
| **Lightbox** | Overlay ardoise 94 % + blur, image `contain` (max 78vh), croix encadrée en haut à droite, fermeture clic hors image / croix / `Échap`. |
| **Témoignages** | Cartes craie pure bordées d'un filet, citation Cormorant 400 avec guillemets « … » sauge, auteur Manrope 600. |
| **Zone** | Titres de colonnes soulignés d'un filet sauge 2 px ; listes à puces carrées sauge. |
| **Formulaire** | Sur fond ardoise 800, champs fond ardoise, bordure claire translucide, focus bordure + halo laiton. Erreurs : bordure sauge clair + message sauge clair. Statut OK sauge clair / erreur terracotta doux. Validation 100 % front (voir `main.js`). |
| **Footer** | Fond ardoise, 3 colonnes (marque / nav / mentions), texte sur-ardoise atténué. |

---

## 7. Iconographie & imagerie

- **Pas de librairie d'icônes.** Les rares symboles (burger, croix, puces,
  flèches du `<select>`) sont dessinés en CSS.
- **Favicon** : `public/favicon.svg` — monogramme « VA » (craie sur ardoise,
  filet sauge).
- **Photos** : cadrages serrés sur la matière (murs enduits, lumière rasante,
  finitions), tons neutres et froids, contrastés. Le hero est volontairement
  désaturé et assombri pour laisser le texte lisible ; les vignettes de
  galerie restent en couleur.
- ⚠️ **Les images actuelles sont des placeholders Unsplash** (chargées depuis
  `images.unsplash.com`). À remplacer par les photos réelles des chantiers de
  Vedran avant mise en ligne — idéalement optimisées (`.webp`, largeurs
  multiples) et servies en local depuis `public/` ou `src/assets/`.

---

## 8. Accessibilité (points tenus dans le MVP)

- Langue `fr`, structure landmarks (`header` / `main` / `footer`), `h1` unique.
- Lien d'évitement « Aller au contenu ».
- `:focus-visible` contrasté (contour sauge foncé 2 px, sauge clair sur fond
  sombre) sur tous les interactifs.
- Menu mobile : `aria-expanded` / `aria-controls`, fermeture `Échap` et au clic
  sur un lien.
- Lightbox : ouverte au clavier, focus déplacé sur la croix, retour focus au
  déclencheur à la fermeture, fermeture `Échap`.
- Formulaire : `<label>` explicites, messages d'erreur liés visuellement,
  `role="status"` + `aria-live="polite"` pour le retour d'envoi.
- Couleur des liens (`--sauge-fonce`) et du corps secondaire (`--ardoise-500`)
  ≥ 4.5:1 sur le fond craie. Le sauge clair `--sauge` n'est jamais utilisé
  pour du texte courant.
- `prefers-reduced-motion` respecté.

---

## 9. Récapitulatif des tokens (CSS)

```css
:root {
  /* Surfaces claires */
  --craie: #f5f5f1;
  --craie-pure: #fcfcfa;
  --brume: #e7e8e2;
  --brume-lin: #d6d8cd;

  /* Ardoise */
  --ardoise: #1c1f1d;
  --ardoise-800: #292d2a;
  --ardoise-500: #575d57;

  /* Accent — sauge */
  --sauge: #7c8c70;
  --sauge-fonce: #5e6e54;
  --sauge-clair: #aab79f;

  /* Détail précieux */
  --laiton: #ad9160;

  /* Sur fond sombre */
  --sur-ardoise: #e6e7e0;
  --sur-ardoise-doux: #9da097;

  /* Typo */
  --font-display: "Cormorant Garamond", "Iowan Old Style", Georgia, serif;
  --font-body: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Échelle typo */
  --fs-hero: clamp(2.9rem, 1.4rem + 6.4vw, 5.75rem);
  --fs-h2: clamp(2.05rem, 1.4rem + 2.9vw, 3.4rem);
  --fs-h3: clamp(1.3rem, 1.16rem + 0.6vw, 1.6rem);
  --fs-lead: clamp(1.05rem, 1rem + 0.4vw, 1.3rem);
  --fs-body: 1rem;
  --fs-small: 0.78rem;

  /* Espacements */
  --space-2xs: 0.5rem;
  --space-xs: 0.875rem;
  --space-sm: 1.25rem;
  --space-md: 2rem;
  --space-lg: 3.5rem;
  --space-xl: clamp(4.5rem, 2rem + 9vw, 9rem);

  /* Structure */
  --container: 1220px;
  --gutter: clamp(1.25rem, 0.4rem + 4.5vw, 4.5rem);
  --radius: 0px;
  --radius-img: 2px;
  --header-h: 78px;

  /* Effets */
  --hairline: 1px solid var(--brume-lin);
  --hairline-dark: 1px solid rgba(230, 231, 224, 0.16);
  --shadow: 0 30px 80px -42px rgba(28, 31, 29, 0.55);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
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
