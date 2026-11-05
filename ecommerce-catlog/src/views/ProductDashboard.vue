<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { useProductStore } from '../stores/productStore';
import { groupProductsByCategory } from '../utils/productUtils';

import SearchBar from '../components/SearchBar.vue';
import CategorySection from '../components/CategorySection.vue';

import { useDebounce } from '../composables/useDebounce';

const productStore = useProductStore();

const searchQuery = ref('');
const debouncedSearch = useDebounce(searchQuery, 300);
onMounted(() => {
  productStore.fetchProducts();
});

// Search products by title
const filteredProducts = computed(() => {
  const query = debouncedSearch.value.trim().toLowerCase();

  if (!query) {
    return productStore.products;
  }

  return productStore.products.filter(product =>
    product.title.toLowerCase().includes(query)
  );
});

// Group and sort the filtered products
const groupedProducts = computed(() =>
  groupProductsByCategory(
    filteredProducts.value,
    productStore.categories
  )
);
</script>

<template>
  <main class="dashboard">

    <header class="dashboard-header">
      <h1>MyStore</h1>
      <p>Discover products you'll love</p>
    </header>

    <SearchBar v-model="searchQuery" />

    <!-- Loading -->
    <div
      v-if="productStore.loading"
      role="status"
      aria-live="polite"
    >
      Loading products...
    </div>

    <!-- Error -->
    <div v-else-if="productStore.error" role="alert">
      <p>{{ productStore.error }}</p>

      <button @click="productStore.fetchProducts">
        Try again
      </button>
    </div>

    <!-- Product categories -->
    <template v-else>

      <CategorySection
        v-for="(products, category) in groupedProducts"
        :key="category"
        v-show="products.length > 0"
        :category="category"
        :products="products"
      />

      <p
        v-if="filteredProducts.length === 0"
        role="status"
      >
        No products found.
      </p>

    </template>

  </main>
</template>