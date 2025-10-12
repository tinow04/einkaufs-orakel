<template>
  <div class="home">
    <header class="page-header">
      <div class="header-inner">
        <nav class="nav-bar" aria-label="mainNavigation">
          <div class="nav-left">
            <RouterLink to="/" class="nav-link">Startseite</RouterLink>
            <RouterLink to="/termine" class="nav-link">Termine</RouterLink>
          </div>
          <div class="nav-right">
            <RouterLink to="/kontakt" class="nav-link">Kontakt</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <section
      class="announcement-section"
      aria-labelledby="ank-heading"
      v-if="announcements.length"
    >
      <h2 class="ank-heading-visible">Aktuelle Ankündigungen</h2>
      <h2 id="ank-heading" class="visually-hidden">Aktuelle Ankündigungen</h2>
      <article
        class="announcement-card"
        v-for="(a, i) in announcements"
        :key="i"
      >
        <div class="announcement-meta">
          <span class="badge">Neu</span>
          <time class="announcement-date">{{ formatDate(a.datum) }}</time>
        </div>
        <p class="announcement-title">{{ a.titel }}</p>
        <p class="announcement-body">{{ a.text }}</p>
      </article>
    </section>
    <h2 class="standorte-heading">Unsere Standorte</h2>
    <div class="image-row">
      <RouterLink to="/rastatt">
        <img
          src="../assets/rastatt.jpeg"
          alt="Rastatt"
          class="clickable-image"
        />
      </RouterLink>

      <RouterLink to="/kehl">
        <img src="../assets/kehl.jpeg" alt="Kehl" class="clickable-image" />
      </RouterLink>

      <RouterLink to="/rheinstetten">
        <img
          src="../assets/rheinstetten.jpeg"
          alt="Rheinstetten"
          class="clickable-image"
        />
      </RouterLink>
    </div>
    <section class="termine-section" aria-labelledby="termine-heading">
      <h2 id="termine-heading">Nächste Flohmarkt-Termine</h2>
      <div class="termine-grid">
        <article class="termin-card" v-for="(e, idx) in events" :key="idx">
          <header class="termin-header">
            <h3 class="termin-location">{{ e.ort }}</h3>
            <p class="termin-date">{{ formatDate(e.datum) }}</p>
          </header>
          <p class="termin-time">{{ formatTimeRange(e.start, e.ende) }} Uhr</p>
          <RouterLink class="termin-link" :to="e.link"
            >Mehr erfahren</RouterLink
          >
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Announcement = {
  titel: string;
  text: string;
  datum: string;
  link?: string;
};

// Demo-Einträge – später durch Admin-Backend ersetzbar
const announcements: Announcement[] = [
  {
    titel: 'Nächster Flohmarkt-Termin verlegt',
    text: 'Der Termin in Rastatt wurde auf den 20. Oktober verschoben. Danke für euer Verständnis!',
    datum: '2025-10-12',
    link: '/termine',
  },
];

type Termin = {
  ort: string;
  datum: string; // ISO-Date (YYYY-MM-DD)
  start: string; // "HH:MM"
  ende: string; // "HH:MM"
  link: string; // RouterLink target
};

// Beispiel-Daten – kannst du später aus einer API/Datei laden
const events: Termin[] = [
  {
    ort: 'Rastatt',
    datum: '2025-10-20',
    start: '10:00',
    ende: '17:00',
    link: '/rastatt',
  },
  {
    ort: 'Kehl',
    datum: '2025-11-02',
    start: '09:00',
    ende: '16:00',
    link: '/kehl',
  },
  {
    ort: 'Rheinstetten',
    datum: '2025-11-10',
    start: '10:00',
    ende: '17:00',
    link: '/rheinstetten',
  },
];

const df = new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

function formatDate(iso: string): string {
  // Safari-kompatible Umwandlung
  const [y, m, d] = iso.split('-').map(Number);
  return df.format(new Date(y, m - 1, d));
}

function formatTimeRange(start: string, ende: string): string {
  return `${start} – ${ende}`;
}
</script>

<style scoped>
.standorte-heading {
  font-size: clamp(1.4rem, 1.2rem + 0.8vw, 1.8rem);
  text-align: center;
  margin-top: clamp(40px, 6vh, 80px);
  margin-bottom: clamp(20px, 4vh, 40px);
  color: #222;
}
.image-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: clamp(40px, 6vh, 80px);
  margin-bottom: clamp(40px, 8vh, 100px);
}

.page-header {
  position: sticky;
  top: 0;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  border-radius: 12px;
}

.page-header h1 {
  display: none;
}

.header-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 14px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin: 0;
  color: #222;
}

.nav-bar {
  display: flex;
  gap: 18px;
  align-items: center;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-link {
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 500;
  color: #1f5fa6;
  transition:
    background-color 0.2s,
    transform 0.15s,
    color 0.2s;
}

.nav-link:hover {
  background-color: #f1f6fd;
  transform: translateY(-1px);
  color: #17497f;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  background-color: #e7f0fb;
  color: #17497f;
}

.clickable-image {
  width: clamp(160px, 20vw, 240px);
  display: block;
  border-radius: 12px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    filter 0.2s;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.clickable-image:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
  filter: saturate(1.05);
}

.termine-section {
  max-width: 1000px;
  margin: 0 auto clamp(40px, 8vh, 100px);
  padding: 0 20px;
}

.termine-section h2 {
  font-size: clamp(1.3rem, 1.2rem + 0.8vw, 1.8rem);
  margin-bottom: 1rem;
  color: #222;
  text-align: center;
}

.termine-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.termin-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 1rem 1.2rem;
  text-align: center;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.termin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.termin-header {
  margin-bottom: 6px;
}
.termin-location {
  margin: 0;
  font-size: 1.05rem;
  color: #17497f;
}
.termin-date {
  margin: 0.2rem 0 0;
  color: #333;
}
.termin-time {
  margin: 0.4rem 0 0.6rem;
  color: #444;
}

.termin-link {
  display: inline-block;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #e7f0fb;
  color: #17497f;
  font-weight: 600;
  transition:
    background-color 0.2s,
    transform 0.15s;
}

.termin-link:hover {
  background-color: #d6e6fa;
  transform: translateY(-1px);
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.announcement-section {
  max-width: 900px;
  margin: clamp(24px, 4vh, 48px) auto 0;
  padding: 0 20px;
}

.ank-heading-visible {
  font-size: clamp(1.4rem, 1.2rem + 0.8vw, 1.8rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
}

.announcement-card {
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  padding: 14px 16px 16px 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  border-left: 6px solid #1f5fa6;
}

.announcement-card + .announcement-card {
  margin-top: 12px;
}

.announcement-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}
.badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: #e7f0fb;
  color: #17497f;
}

.announcement-date {
  color: #555;
  font-size: 0.9rem;
}
.announcement-title {
  margin: 2px 0 4px;
  font-weight: 700;
  color: #222;
}
.announcement-body {
  margin: 0 0 8px;
  color: #333;
}

.announcement-link {
  text-decoration: none;
  font-weight: 600;
  color: #17497f;
  background: #f1f6fd;
  padding: 6px 10px;
  border-radius: 8px;
}

.announcement-link:hover {
  background: #e7f0fb;
}
</style>
