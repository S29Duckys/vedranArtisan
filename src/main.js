import "./style.css";

/* =========================================================================
   Vedran Artisan — interactions front (template tp-2 « Ardoise & Sauge »)
   Vanilla JS, aucune dépendance.
   ========================================================================= */

const select = (sel, ctx = document) => ctx.querySelector(sel);
const selectAll = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ---------- 1. Année courante dans le footer ---------- */
selectAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

/* ---------- 2. Header : état "scrolled" ---------- */
const header = select("[data-header]");
if (header) {
  const onScroll = () => {
    header.toggleAttribute("data-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- 3. Menu mobile ---------- */
const navToggle = select("[data-nav-toggle]");
const navList = select("[data-nav-list]");

const closeNav = () => {
  navToggle?.setAttribute("aria-expanded", "false");
  navList?.removeAttribute("data-open");
};

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navList.toggleAttribute("data-open", !open);
  });

  selectAll("[data-nav-link]", navList).forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}

/* ---------- 4. Apparition au défilement ---------- */
const revealEls = selectAll("[data-reveal]");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* ---------- 5. Lien de navigation actif ---------- */
const navLinks = selectAll("[data-nav-link]").filter((a) =>
  a.getAttribute("href")?.startsWith("#")
);
const sections = navLinks
  .map((a) => select(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          a.toggleAttribute(
            "data-active",
            a.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- 6. Lightbox galerie ---------- */
const lightbox = select("[data-lightbox-root]");
const lightboxImg = select("[data-lightbox-img]");
const lightboxCaption = select("[data-lightbox-caption]");
let lastFocused = null;

const openLightbox = (img, caption) => {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  select("[data-lightbox-close]", lightbox)?.focus();
};

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
  lastFocused?.focus();
};

selectAll("[data-lightbox]").forEach((btn) => {
  btn.addEventListener("click", () => {
    lastFocused = btn;
    const img = select("img", btn);
    const caption = select(".gallery__caption", btn)?.textContent.trim() ?? "";
    openLightbox(img, caption.replace(/\s+/g, " "));
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest("[data-lightbox-close]")) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

/* ---------- 7. Mentions légales (placeholder MVP) ---------- */
select("[data-legal]")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.alert(
    "Page « Mentions légales » à rédiger avant la mise en ligne : raison sociale, SIRET, assurance décennale, hébergeur, RGPD."
  );
});

/* ---------- 8. Formulaire de contact (validation front) ---------- */
const form = select("[data-form]");

if (form) {
  const statusEl = select("[data-form-status]", form);

  const setError = (field, message) => {
    const wrapper = field.closest(".field");
    const errorEl = select(`[data-error-for="${field.name}"]`, form);
    wrapper?.classList.toggle("field--invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message || "";
  };

  const validators = {
    nom: (v) => (v.trim().length >= 2 ? "" : "Merci d'indiquer votre nom."),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        ? ""
        : "Adresse e-mail invalide.",
    telephone: (v) =>
      v.trim() === "" || /^[+\d][\d\s().-]{6,}$/.test(v.trim())
        ? ""
        : "Numéro de téléphone invalide.",
    projet: (v) => (v ? "" : "Sélectionnez un type de projet."),
    message: (v) =>
      v.trim().length >= 10 ? "" : "Décrivez votre projet en quelques mots.",
  };

  const validateField = (field) => {
    const fn = validators[field.name];
    if (!fn) return true;
    const msg = fn(field.value);
    setError(field, msg);
    return !msg;
  };

  selectAll("input, select, textarea", form).forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.closest(".field")?.classList.contains("field--invalid")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = selectAll("input, select, textarea", form);
    const allValid = fields.map(validateField).every(Boolean);

    if (!allValid) {
      statusEl.textContent = "Quelques champs demandent votre attention.";
      statusEl.dataset.state = "error";
      select(".field--invalid input, .field--invalid select, .field--invalid textarea", form)?.focus();
      return;
    }

    statusEl.textContent =
      "Merci — votre demande est prête. Le formulaire sera actif dès la mise en ligne du site.";
    statusEl.dataset.state = "ok";
    form.reset();
  });
}
