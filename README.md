# Vedran Artisan — site vitrine (MVP · template tp-2)

Site vitrine _front-only_ pour **Vedran Artisan** — plaquiste, peintre,
isolation intérieure et enduits décoratifs en Haute-Savoie (déplacements Jura).

Direction visuelle **« Ardoise & Sauge »** : minérale, architecturale, sombre,
avec un vert sauge en signature. HTML / CSS / JavaScript vanilla, construit avec
**Vite**. Aucune dépendance runtime, aucun framework.

## Démarrer

```bash
npm install
npm run dev        # serveur de dev  → http://localhost:5173
npm run build      # build de prod   → dist/
npm run preview    # sert le build   → http://localhost:4173
```

## Structure

```
index.html          Page unique (landing) — tout le contenu et le markup
src/main.js          Interactions : header au scroll, menu mobile, reveal,
                     nav active, lightbox galerie, validation du formulaire
src/style.css        Styles + design tokens (voir DESIGN.md)
public/favicon.svg   Monogramme « VA »
DESIGN.md            Fiche design complète (couleurs, typo, espacements…)
```

## Contenu de la page

Accueil (hero plein écran) · Manifeste · Savoir-faire (4 métiers) ·
La méthode (4 étapes) · Réalisations (galerie + lightbox) · Témoignages ·
Zone d'intervention · Contact (formulaire).

## Notes MVP

- **Images** : placeholders Unsplash, à remplacer par les photos réelles.
- **Formulaire** : validation front uniquement, aucun envoi réel pour l'instant.
- **Coordonnées** : valeurs fictives (`06 00 00 00 00`, `contact@vedran-artisan.fr`).
- **Mentions légales** : à rédiger.
- **Polices** : Cormorant Garamond + Manrope via Google Fonts (choix RGPD à
  trancher : auto-hébergement possible).

La liste complète des points à traiter avant mise en ligne est en fin de
`DESIGN.md`.
