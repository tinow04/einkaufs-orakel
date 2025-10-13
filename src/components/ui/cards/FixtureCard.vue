<template>
  <article class="termin-card">
    <header class="termin-header">
      <h3 class="termin-location">{{ ort }}</h3>
      <p class="termin-date">{{ formatDate(datum) }}</p>
    </header>
    <p class="termin-time">{{ formatTimeRange(start, ende) }} Uhr</p>
    <RouterLink class="termin-link" :to="link">Mehr erfahren</RouterLink>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

type Props = {
  ort: string;
  datum: string;
  start: string;
  ende: string;
  link: string;
};

const props = defineProps<Props>();

const df = new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return df.format(new Date(y, m - 1, d));
}

function formatTimeRange(start: string, ende: string) {
  return `${start} – ${ende}`;
}
</script>

<style scoped>
.termin-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 1rem 1.2rem;
  text-align: center;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
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
  transition: background-color 0.2s, transform 0.15s;
}
.termin-link:hover {
  background-color: #d6e6fa;
  transform: translateY(-1px);
}
</style>