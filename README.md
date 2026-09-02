# Vedran Artisan — site vitrine (MVP)

Site vitrine _front-only_ pour **Vedran Artisan** — plaquiste, peintre,
isolation intérieure et enduits décoratifs en Haute-Savoie.

HTML / CSS / JavaScript vanilla, construit avec **Vite**. Aucune dépendance
runtime, aucun framework.

## Démarrer

```bash
npm install
npm run dev        # serveur de dev  → http://localhost:5173
npm run build      # build de prod   → dist/
npm run preview    # sert le build   → http://localhost:4173
```

## Structure

```
index.html        Page unique (landing) — tout le contenu et le markup
src/main.js        Interactions : menu mobile, reveal au scroll, nav active,
                   lightbox galerie, validation du formulaire
src/style.css      Styles + design tokens (voir DESIGN.md)
public/favicon.svg Monogramme « VA »
DESIGN.md          Fiche design complète (couleurs, typo, espacements…)
```

## Contenu de la page

Accueil (hero) · Savoir-faire (4 métiers) · L'approche · Réalisations
(galerie + lightbox) · Témoignages · Zone d'intervention · Contact (formulaire).

## Notes MVP

- **Images** : placeholders Unsplash, à remplacer par les photos réelles.
- **Formulaire** : validation front uniquement, aucun envoi réel pour l'instant.
- **Coordonnées** : valeurs fictives (`06 00 00 00 00`, `contact@vedran-artisan.fr`).
- **Mentions légales** : à rédiger.

La liste complète des points à traiter avant mise en ligne est en fin de
`DESIGN.md`.
