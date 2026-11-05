<script setup lang="ts">
const searchQuery = defineModel<string>({
  required: true
});
</script>

<template>
  <label for="product-search">
    Search products
  </label>

  <input
    id="product-search"
    v-model="searchQuery"
    type="search"
    placeholder="Search by product name..."
  />
</template>