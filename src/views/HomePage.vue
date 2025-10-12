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
    <div class="image-row">
      <RouterLink to="/rastatt">
        <img src="../assets/rastatt.jpeg" alt="Rastatt" class="clickable-image" />
      </RouterLink>

      <RouterLink to="/kehl">
        <img src="../assets/kehl.jpeg" alt="Kehl" class="clickable-image" />
      </RouterLink>

      <RouterLink to="/rheinstetten">
        <img src="../assets/rheinstetten.jpeg" alt="Rheinstetten" class="clickable-image" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
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
  transition: background-color 0.2s, transform 0.15s, color 0.2s;
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
  transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.clickable-image:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.10);
  filter: saturate(1.05);
}
</style>