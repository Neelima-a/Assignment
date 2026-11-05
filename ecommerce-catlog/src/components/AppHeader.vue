<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push({ name: 'dashboard' });
}
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <button
        class="logo"
        aria-label="Go to homepage"
        @click="goToHome"
      >
        <span class="logo-icon">S</span>
        <span>ShopEase</span>
      </button>

      <nav aria-label="Main navigation">
        <RouterLink :to="{ name: 'dashboard' }">
          Home
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-container {
  max-width: 1400px;
  margin: auto;
  padding: 16px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  color: #3b2b1e;
}

.logo-icon {
  background: #01040c;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
}

nav a {
  color: #475569;
  text-decoration: none;
  font-weight: 600;
}

nav a.router-link-active {
  color: #2563eb;
}

@media (max-width: 600px) {
  .header-container {
    padding: 14px 16px;
  }
}
</style>