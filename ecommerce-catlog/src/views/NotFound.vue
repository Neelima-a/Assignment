<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push({ name: 'dashboard' });
}
</script>

<template>
  <main class="not-found">
    <div class="error-content">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you're looking for
        doesn't exist or may have been moved.
      </p>

      <button @click="goToHome">
        Back to Home
      </button>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background: #f8fafc;
}

.error-content {
  max-width: 450px;
}

h1 {
  font-size: 100px;
  margin: 0;
  color: #2563eb;
}

h2 {
  font-size: 28px;
  margin: 10px 0;
}

p {
  color: #64748b;
  line-height: 1.6;
}

button {
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

button:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 3px;
}
</style>